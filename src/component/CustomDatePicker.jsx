import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  format as formatDate,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  subMonths,
  addMonths,
  subYears,
  addYears,
} from "date-fns";

export default function CustomDatePicker({
  type,
  id,
  name,
  value,
  label,
  defaultDate,
  placeholder,
  required = false,
  disabled = false,
  readOnly = true,
  error,
  disabledDates = [],
  disableBeforeDate,
  disableAfterDate,
}) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [renderComponent, setRenderComponent] = useState("day");
  const calendarRef = useRef(null);

  useEffect(() => {
    setCurrentMonth((prevMonth) => {
      const newMonth = new Date(currentYear, prevMonth.getMonth(), 1);
      return newMonth;
    });
  }, [currentYear]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setCalendarVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDateClick = (day) => {
    setSelectedDate(formatDate(day, "dd-MM-yyyy"));
    setCalendarVisible(false);
  };

  const goToPreviousMonth = () => {
    const previousMonth = subMonths(currentMonth, 1);
    if (previousMonth.getMonth() === 11) {
      setCurrentYear((prevYear) => prevYear - 1);
    }
    setCurrentMonth(previousMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = addMonths(currentMonth, 1);
    if (nextMonth.getMonth() === 0) {
      setCurrentYear((prevYear) => prevYear + 1);
    }
    setCurrentMonth(nextMonth);
  };

  const goToPreviousYear = () => {
    setCurrentYear((prevYear) => prevYear - 1);
  };

  const goToNextYear = () => {
    setCurrentYear((prevYear) => prevYear + 1);
  };

  const renderWeekDays = () => {
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekDays.map((weekDay, index) => (
      <div key={`weekDay-${index}`} className="w-10 text-center py-2 font-bold">
        {weekDay}
      </div>
    ));
  };

  const renderCalenderYears = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 21 }, (_, index) => currentYear - 10 + index);
  };

  const renderCalenderMonth = () => {
    return Array.from({ length: 12 }, (_, i) => formatDate(new Date(0, i), "MMMM"));
  };

  const renderCalendarDays = () => {
    const daysInMonth = eachDayOfInterval({
      start: startOfMonth(currentMonth),
      end: endOfMonth(currentMonth),
    });

    const today = new Date();

    return daysInMonth.map((day) => {
      const isSelected = selectedDate && isSameDay(day, new Date(selectedDate));
      const isToday = isSameDay(day, today);
      const isDisabledBefore = disableBeforeDate && day < disableBeforeDate;
      const isDisabledAfter = disableAfterDate && day > disableAfterDate;
      const isDisabled = disabledDates.some((disabledDate) => isSameDay(day, disabledDate));

      let classNames = "w-10 border ";
      if (isSelected) classNames += "bg-blue-500 text-white";
      else if (isToday) classNames += "bg-blue-100";
      else if (isDisabled && !isDisabledBefore && !isDisabledAfter) classNames += "bg-yellow-300 cursor-not-allowed";
      else if (isDisabledBefore || isDisabledAfter) classNames += "bg-red-300 cursor-not-allowed";
      else classNames += "hover:bg-gray-200";

      return (
        <button
          key={day.getTime()}
          onClick={() => handleDateClick(day)}
          className={classNames}
          disabled={isDisabled || isDisabledBefore || isDisabledAfter}
        >
          {formatDate(day, "d")}
        </button>
      );
    });
  };

  const renderMonthAndYear = () => {
    return (
      <div className="inline-flex items-center justify-center gap-x-2 w-full font-semibold text-xl">
        <button
          type="button"
          onClick={() => setRenderComponent("month")}
        >{formatDate(currentMonth, "MMMM")}</button>
        <button
          type="button"
          onClick={() => setRenderComponent("year")}
        >{formatDate(currentMonth, "yyyy")}</button>
      </div>
    );
  };

  return (
    <div ref={calendarRef} className="relative">
      <input
        type="text"
        id={id}
        name={name}
        defaultValue={defaultDate ? formatDate(new Date(defaultDate), "dd-MM-yyyy") : ""}
        value={selectedDate || ""}
        placeholder={placeholder || "Select Date"}
        onFocus={() => setCalendarVisible(true)}
        readOnly={readOnly}
        className="w-96 border border-solid border-gray-300 rounded px-2 py-1"
      />

      {calendarVisible && (
        <div className="max-w-xs w-300">
          {renderComponent === "day" &&
            <div>
              <div className="flex justify-between">
                <button onClick={goToPreviousMonth}>Previous</button>
                {renderMonthAndYear()}
                <button onClick={goToNextMonth}>Next</button>
              </div>
              <div className="grid grid-cols-7">
                {renderWeekDays()}
                {renderCalendarDays()}
              </div>
            </div>
          }
          {renderComponent === "month" &&
            <div>
              <h2>Select Month</h2>
              <div className="grid grid-cols-3">
                {renderCalenderMonth().map((month, index) => (
                  <button
                    key={`month-${index}`}
                    value={currentMonth.getMonth()}
                    onClick={(e) => {
                      setCurrentMonth(new Date(currentYear, index));
                      setRenderComponent("day");
                    }}
                    className="btn btn-outline btn-primary"
                  >{month}</button>
                ))}
              </div>
            </div>
          }
          {renderComponent === "year" &&
            <div>
              <button onClick={goToPreviousYear}>Previous</button>
              <h2>Select Year</h2>
              <button onClick={goToNextYear}>Next</button>
              <div className="grid grid-cols-3">
                {
                  renderCalenderYears().map((year, index) => (
                    <button
                      key={`year-${index}`}
                      type="button"
                      onClick={(e) => {
                        setCurrentYear(parseInt(e.target.textContent));
                        setRenderComponent("day");
                      }}
                      className="btn btn-outline btn-primary"
                    >
                      {year}
                    </button>
                  ))
                }
              </div>
            </div>
          }
        </div>
      )}
    </div>
  );
}

CustomDatePicker.propTypes = {
  defaultDate: PropTypes.instanceOf(Date),
  disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  disableBeforeDate: PropTypes.instanceOf(Date),
  disableAfterDate: PropTypes.instanceOf(Date),
};
