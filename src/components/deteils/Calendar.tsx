"use client";
import { useState, useEffect, useRef } from "react";

interface Seance {
  date: string;
}

interface Option {
  day: number;
  inActive: boolean;
  value: string;
}

interface CalendarProps {
  seances?: Seance[];
}

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const Calendar = ({ seances = [] }: CalendarProps): JSX.Element => {
  const calendarRef = useRef<HTMLDivElement>(null);
  const [currentDate, setCurrentDate] = useState<{
    year: number;
    month: number;
  }>({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });
  const [days, setDays] = useState<Option[]>([]);

  useEffect(() => {
    const generateDays = () => {
      const lastDateOfMonth = new Date(
        currentDate.year,
        currentDate.month + 1,
        0
      ).getDate();
      const arr: Option[] = [];
      for (let i = 1; i <= lastDateOfMonth; i++) {
        const value = new Date(currentDate.year, currentDate.month, i + 1)
          .toISOString()
          .split("T")[0];
        arr.push({
          day: i,
          inActive: seances.some((seance) => seance.date === value),
          value: value,
        });
      }
      setDays(arr);
    };
    generateDays();
  }, [currentDate, seances]);

  const increaseMonth = () => {
    setCurrentDate((prev) =>
      prev.month === 11
        ? { month: 0, year: prev.year + 1 }
        : { ...prev, month: prev.month + 1 }
    );
  };

  const decreaseMonth = () => {
    setCurrentDate((prev) =>
      prev.month === 0
        ? { month: 11, year: prev.year - 1 }
        : { ...prev, month: prev.month - 1 }
    );
  };

  return (
    <div ref={calendarRef} className="calendar w-[70%] max-1000:w-full pr-24 max-1000:pr-0 max-1600:pr-8">
      <div className="flex items-center justify-between">
        <svg
          onClick={decreaseMonth}
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.125 9.375L16.875 22.5L28.125 35.625"
            stroke="#1C274C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="current-date max-1000: text-[45px] max-1000:text-[18px] font-medium text-[#515151]">
          {months[currentDate.month]} {currentDate.year}
        </p>
        <svg  
          onClick={increaseMonth}
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.875 9.375L28.125 22.5L16.875 35.625"
            stroke="#1C274C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="calendar_days">
        <ul className="grid grid-cols-7 gap-[38px] max-1600:gap-3 py-[26px]">
          {["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"].map((day) => (
            <li
              key={day}
              className="items-center flex max-700:aspect-[1/1] justify-center aspect-[2/1] text-3xl max-1600:text-2xl text-[#a7a7a7]"
            >
              {day}
            </li>
          ))}
        </ul>
        <ul className="days grid grid-cols-7 max-1600:gap-3 gap-[38px]">
          {days.map((item) => (
            <li
              key={item.value}
              className={`${
                item.inActive ? "text-[#515151] bg-[#ffcd00]" : "text-[#a7a7a7]"
              } border aspect-[2/1] border-[#515151] max-700:aspect-[1/1] font-[16px] items-center flex justify-center rounded-[5px]`}
            >
              {item.day}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
