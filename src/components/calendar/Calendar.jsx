import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { BsCalendarEvent } from "react-icons/bs";
import dayjs from "dayjs";
import { useState } from "react";

// Utility functions
const weekOfMonth = () => {
  const d = new Date();
  const date = d.getDate();
  const day = d.getDay();
  return Math.ceil((date - 1 - day) / 7);
};

const capFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const dayName = (d) =>
  [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][d];

const monthName = (m) => {
  const date = new Date();
  date.setMonth(m);
  return date.toLocaleString("en-US", { month: "long" });
};

const months = (month = dayjs().month()) => {
  const year = dayjs().year();
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfMonth;

  return new Array(5).fill(null).map(() =>
    new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    }),
  );
};

const now = {
  date: dayjs().date(),
  day: dayjs().day(),
  month: dayjs().month(),
  year: dayjs().year(),
  weekOfMonth: weekOfMonth(),
};

let index = weekOfMonth();
let month = dayjs().month();

const Calendar = ({ selected, updateSelected }) => {
  const [days, setDays] = useState(months()[now.weekOfMonth]);

  const selectDay = (d, m, y) => {
    if (d === selected.date && m === selected.month && y === selected.year) {
      return;
    }

    updateSelected({ date: d, month: m + 1, year: y });
  };

  const navigate = (nav) => {
    if (nav) {
      index++;
      if (index > 4) {
        index = 0;
        month++;
        if (days[0].date() === months(month)[index][0].date()) index++;
      }
    } else {
      index--;
      if (index < 0) {
        index = 4;
        month--;
        if (days[0].date() === months(month)[index][0].date()) index--;
      }
    }
    setDays(months(month)[index]);
  };

  const reset = () => {
    setDays(months()[now.weekOfMonth]);
    index = weekOfMonth();
    month = dayjs().month();
  };

  return (
    <div className="flex-col rounded-2xl bg-gray-300 p-4 shadow-md">
      <div className="ml-8 flex items-center gap-4 select-none">
        <button
          onClick={() => navigate(false)}
          className="rounded p-2 text-3xl text-gray-700 transition hover:bg-blue-500 hover:text-white"
        >
          <FiArrowLeft />
        </button>

        <button
          onClick={() => navigate(true)}
          className="rounded p-2 text-3xl text-gray-700 transition hover:bg-blue-500 hover:text-white"
        >
          <FiArrowRight />
        </button>

        <h1 className="ml-4 text-lg font-semibold text-gray-700">
          {capFirstLetter(monthName(days[0].month()))} {days[0].year()}
        </h1>

        <button
          onClick={reset}
          className="ml-4 flex items-center gap-2 rounded bg-blue-500 px-3 py-2 text-sm text-white transition hover:bg-blue-400"
        >
          <BsCalendarEvent />
          Today
        </button>
      </div>

      <div className="mt-4 flex justify-evenly">
        {days.map((day) => {
          const isToday =
            day.date() === now.date &&
            day.month() === now.month &&
            day.year() === now.year;
          const isSelected =
            day.date() === selected.date &&
            day.month() + 1 === selected.month &&
            day.year() === selected.year;

          return (
            <div
              key={day.day()}
              className="flex h-24 w-20 cursor-pointer flex-col items-center select-none"
              onClick={() => selectDay(day.date(), day.month(), day.year())}
            >
              <span
                className={`text-sm ${
                  isToday ? "border-b-2 border-blue-500" : ""
                }`}
              >
                {dayName(day.day())}
              </span>

              <span
                className={`mt-3 flex h-16 w-16 items-center justify-center rounded-full text-2xl transition ${
                  isSelected ? "bg-stone-400" : "hover:bg-gray-100"
                } ${isToday ? "-mt-[2px] font-semibold text-blue-500" : ""} `}
              >
                {day.date()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
