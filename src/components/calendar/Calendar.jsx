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

    updateSelected({
      date: dayjs().date(),
      month: dayjs().month() + 1,
      year: dayjs().year(),
    });
  };

  return (
    <div className="flex-col rounded-2xl bg-gray-300 px-1 py-4 shadow-md md:px-4 dark:bg-neutral-800">
      <div className="ml-0 flex items-center gap-4 select-none md:ml-8">
        <button
          onClick={() => navigate(false)}
          className="cursor-pointer rounded p-2 text-3xl text-gray-700 transition hover:bg-blue-500 hover:text-white dark:text-stone-200"
        >
          <FiArrowLeft />
        </button>

        <button
          onClick={() => navigate(true)}
          className="cursor-pointer rounded p-2 text-3xl text-gray-700 transition hover:bg-blue-500 hover:text-white dark:text-stone-200"
        >
          <FiArrowRight />
        </button>

        <h1 className="ml-4 text-lg font-semibold text-gray-700 dark:text-stone-200">
          {capFirstLetter(monthName(days[0].month()))} {days[0].year()}
        </h1>

        <button
          onClick={reset}
          className="ml-4 flex cursor-pointer items-center gap-2 rounded bg-blue-500 px-3 py-2 text-sm text-white transition hover:bg-blue-400"
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
              className="flex cursor-pointer flex-col items-center select-none"
              onClick={() => selectDay(day.date(), day.month(), day.year())}
            >
              <span
                className={`max-w-[4ch] truncate text-sm md:max-w-none dark:text-stone-200 ${
                  isToday ? "border-b-2 border-blue-500" : ""
                }`}
              >
                {dayName(day.day())}
              </span>

              <span
                className={`mt-4 flex w-10 items-center justify-center rounded-full px-2 py-1 text-2xl transition md:w-14 md:px-5 md:py-3 dark:text-stone-200 ${
                  isSelected
                    ? "bg-stone-400 dark:!text-stone-700"
                    : "hover:bg-stone-300 dark:hover:text-stone-700"
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
