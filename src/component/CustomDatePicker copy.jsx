import React, { useState, useEffect, useRef } from "react";
import { BiReset } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import moment from "moment";

export default function CustomDatePicker({
  type,
  id,
  name,
  value = "",
  label,
  defaultDate,
  placeholder,
  required = false,
  disabled = false,
  readOnly = true,
  error,
  specialDates = [],
  disabledDates = [],
  disableBeforeDate,
  disableAfterDate,
}) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(moment()); // Use moment for current month
  const [currentYear, setCurrentYear] = useState(moment().year()); // Use moment for current year
  const [renderComponent, setRenderComponent] = useState("day");
  const calendarRef = useRef(null);

  useEffect(() => {
    setCurrentMonth((prevMonth) => {
      const newMonth = moment([currentYear, prevMonth.month(), 1]);
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
    setSelectedDate(day.format("DD-MM-YYYY"));
    setCalendarVisible(false);
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(currentMonth.clone().subtract(1, "month"));
    setCurrentYear(currentMonth.clone().subtract(1, "month").year());
  };

  const goToNextMonth = () => {
    setCurrentMonth(currentMonth.clone().add(1, "month"));
    setCurrentYear(currentMonth.clone().add(1, "month").year());
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
    const currentYear = moment().year();
    return Array.from({ length: 21 }, (_, index) => currentYear - 10 + index);
  };

  const renderCalenderMonth = () => {
    return Array.from({ length: 12 }, (_, i) => moment().month(i).format("MMMM"));
  };

  const renderCalendarDays = () => {
    const startOfMonth = currentMonth.clone().startOf("month");
    const endOfMonth = currentMonth.clone().endOf("month");
    const daysInMonth = [];
    let currentDay = startOfMonth.clone();

    while (currentDay.isSameOrBefore(endOfMonth, "day")) {
      daysInMonth.push(currentDay);
      currentDay = currentDay.clone().add(1, "day");
    }
    // const daysInMonth = Array.from({ length: currentMonth.daysInMonth() }, (_, i) =>
    //   currentMonth.clone().date(i + 1)
    // );

    const today = moment();

    return daysInMonth.map((day) => {
      const isSelected = selectedDate && day.isSame(moment(selectedDate, "DD-MM-YYYY"), "day");
      const isToday = day.isSame(today, "day");
      const isDisabledBefore = disableBeforeDate && day.isBefore(moment(disableBeforeDate));
      const isDisabledAfter = disableAfterDate && day.isAfter(moment(disableAfterDate));
      const isDisabled = disabledDates.some((disabledDate) => day.isSame(moment(disabledDate), "day"));
      const isSpecialDate = specialDates.some((specialDate) => day.isSame(moment(specialDate), "day"));
      const isDisabledInDateRange = isDisabled && (isDisabledBefore || isDisabledAfter);
      const isSpecialDateInDateRange = isSpecialDate && (isDisabledBefore || isDisabledAfter);

      let buttonClass = "w-10 h-10 rounded";

      if (isSelected) {
        buttonClass += " bg-blue-500 text-white";
      } else if (isToday) {
        buttonClass += " bg-blue-100";
      } else if (isDisabledInDateRange) {
        buttonClass += " bg-yellow-300 cursor-not-allowed border-yellow-300";
      } else if (isSpecialDateInDateRange) {
        buttonClass += " bg-green-500 text-white border-green-500";
      } else if (isDisabled && !isDisabledBefore && !isDisabledAfter) {
        buttonClass += " bg-yellow-300 cursor-not-allowed border-yellow-300";
      } else if (isDisabledBefore || isDisabledAfter) {
        buttonClass += " border border-solid border-gray bg-gray opacity-20";
      } else if (isSpecialDate) {
        buttonClass += " bg-green-500 text-white border-green-500";
      } else {
        buttonClass += " border border-solid border-gray bg-gray opacity-20";
      }

      if (isDisabled && (isDisabledBefore || isDisabledAfter)) {
        buttonClass += " disabled-before-after";
      }

      return (
        <button
          key={day.format("x")}
          onClick={() => handleDateClick(day)}
          className={buttonClass}
          disabled={isDisabled || isDisabledBefore || isDisabledAfter}
        >
          {day.format("D")}
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
        >{currentMonth.format("MMMM")}</button>
        <button
          type="button"
          onClick={() => setRenderComponent("year")}
        >{currentMonth.format("YYYY")}</button>
      </div>
    );
  };

  return (
    <div ref={calendarRef} className="relative w-96">
      <input
        type="text"
        id={id}
        name={name}
        value={selectedDate || ""}
        placeholder={placeholder || "Select Date"}
        onFocus={() => setCalendarVisible(true)}
        readOnly={readOnly}
        className="w-96 h-11 border border-solid border-gray-300 rounded px-2 py-1"
      />
      <button
        type="button"
        disabled={calendarVisible}
        className="absolute top-1 right-1 text-3xl"
      >
        {calendarVisible ? <BiReset /> : <FaRegCalendarAlt />}
      </button>

      {calendarVisible && (
        <div className="w-96 absolute bg-white p-5 rounded-md right-0 left-0 top-12">
          {renderComponent === "day" && (
            <div>
              <div className="flex justify-between">
                <button onClick={goToPreviousMonth}>Previous</button>
                {renderMonthAndYear()}
                <button onClick={goToNextMonth}>Next</button>
              </div>
              <div className="grid grid-cols-7 gap-y-2">
                {renderWeekDays()}
                {renderCalendarDays()}
              </div>
            </div>
          )}
          {renderComponent === "month" && (
            <div className="grid grid-cols-1 items-center justify-items-center gap-y-4">
              <h2 className="text-2xl font-semibold">Select Month</h2>
              <div className="grid grid-cols-3 gap-1">
                {renderCalenderMonth().map((month, index) => (
                  <button
                    key={`month-${index}`}
                    value={currentMonth.month()}
                    onClick={(e) => {
                      setCurrentMonth(moment([currentYear, index, 1]));
                      setRenderComponent("day");
                    }}
                    className="btn btn-outline btn-primary rounded-md"
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>
          )}
          {renderComponent === "year" && (
            <div className="grid grid-cols-1 items-center justify-items-center gap-y-4 w-full">
              <div className="flex flex-row items-center justify-evenly">
                <button onClick={goToPreviousYear}>Previous</button>
                <h2 className="text-2xl font-semibold">Select Year</h2>
                <button onClick={goToNextYear}>Next</button>
              </div>
              <div className="grid grid-cols-3 w-full gap-1">
                {renderCalenderYears().map((year, index) => (
                  <button
                    key={`year-${index}`}
                    type="button"
                    onClick={() => {
                      setCurrentYear(year);
                      setRenderComponent("day");
                    }}
                    className="btn btn-outline btn-primary"
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          )}
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
