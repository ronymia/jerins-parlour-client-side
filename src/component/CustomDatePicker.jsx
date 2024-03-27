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

  const calendarRef = useRef(null);

  useEffect(() => {
    // Update currentMonth when currentYear changes
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

  // RENDER WEEK DAYS
  const renderWeekDays = () => {
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekDays.map((weekDay, index) => (
      <div key={`weekDay-${index}`} className="w-10 text-center py-2 font-bold">
        {weekDay}
      </div>
    ));
  };

  // RENDER CALENDAR DAYS
  const renderCalendarDays = () => {
    const daysInMonth = eachDayOfInterval({
      start: startOfMonth(currentMonth),
      end: endOfMonth(currentMonth),
    });

    return daysInMonth.map((day) => {
      const isSelected = selectedDate && isSameDay(day, new Date(selectedDate));
      const isDisabled = disabledDates.some((disabledDate) => isSameDay(day, disabledDate)) || (disableBeforeDate && day < disableBeforeDate) || (disableAfterDate && day > disableAfterDate);;

      return (
        <button
          type="button"
          key={day.getTime()}
          onClick={() => handleDateClick(day)}
          className={`${isSelected ? "bg-[#007bff] text-[#fff]" : ""} w-10 border border-red-600 ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={isDisabled}
        >
          {formatDate(day, "d")}
        </button>
      );
    });
  };

  // RENDER MONTH AND YEAR SEPARATELY
  const renderMonthAndYear = () => {
    return (
      <div className="inline-flex items-center justify-center w-full font-semibold text-xl">
        <div>{formatDate(currentMonth, "MMMM")}</div>
        <div>{formatDate(currentMonth, "yyyy")}</div>
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
        className={"w-96 border border-solid border-[#ccc] rounded"}
      />

      {calendarVisible && (
        <div className="max-w-xs ">
          {/* Render month and Year selector component */}
          <div className="flex justify-between">
            <button onClick={goToPreviousYear}>Previous</button>
            <div className="flex items-center">
              <select
                value={currentMonth.getMonth()}
                onChange={(e) => setCurrentMonth(new Date(currentYear, e.target.value))}
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={i}>{formatDate(new Date(0, i), "MMMM")}</option>
                ))}
              </select>
              <select
                value={currentYear}
                onChange={(e) => setCurrentYear(parseInt(e.target.value))}
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i} value={currentYear - 5 + i}>{currentYear - 5 + i}</option>
                ))}
              </select>
            </div>
            <button onClick={goToNextYear}>Next</button>
          </div>
          <div className="flex justify-between">
            <button onClick={goToPreviousMonth}>Previous</button>
            {renderMonthAndYear()}
            <button onClick={goToNextMonth}>Next</button>
          </div>
          <div className="grid grid-cols-7 ">
            {renderWeekDays()}
            {renderCalendarDays()}
          </div>
        </div>
      )}
    </div>
  );
}

CustomDatePicker.propTypes = {
  defaultDate: PropTypes.instanceOf(Date),
  disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  disableBeforeDate: PropTypes.instanceOf(Date),
};
