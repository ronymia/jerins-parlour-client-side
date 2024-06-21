import moment from "moment";
import React, { useState } from "react";

export default function CustomDaySelect() {
    const [selectedDay, setSelectedDay] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(moment(new Date()));
    // console.log("current month", currentMonth);
    const renderWeekDays = () => {
        const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return weekDays.map((weekDay, index) => (
            <div key={`weekDay-${index}`} className="w-10 text-center py-2 font-bold">
                {weekDay}
            </div>
        ));
    };

    const renderCalendarDays = () => {
        const startOfMonth = currentMonth.startOf("month");
        // console.log("startOfMonth", startOfMonth);
        const endOfMonth = currentMonth.clone().endOf("month");
        // console.log("endOfMonth", endOfMonth);
        const daysInMonth = [];
        // console.log("daysInMonth", daysInMonth);
        let currentDay = currentMonth.clone();
        // console.log("currentDay", currentDay);

        while (currentDay.isSameOrBefore(endOfMonth, "day")) {
            daysInMonth.push(currentDay);
            currentDay = currentDay.clone().add(1, "day");
        };

        console.log(moment().locale("en").month);
        
        return daysInMonth.map((day) => {
            // console.log(day.format("D"));
            return (
                <button
                    key={day.format("x")}
                    onClick={() => handleDateClick(day)}
                    // className={buttonClass}
                    // disabled={isDisabled || isDisabledBefore || isDisabledAfter}
                >
                    {day.format("D")}
                </button>
            );
        })
    }

    return (
        <div>CustomDaySelect
            {renderCalendarDays()}
        </div>
    )
}
