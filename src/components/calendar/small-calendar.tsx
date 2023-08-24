import dayjs, { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';
import { getMonth } from '../../utils/getMonth.function';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useGlobalStore } from '../../store/auth';

function SmallCalendar() {
  // current month index for small calendar starts with today
  const [currenMonthIdx, setcurrenMonthIdx] = useState(dayjs().month());

  // current month is equal to getMonth function to get the month and its rows for weeks
  const [currenMonth, setcurrenMonth] = useState(getMonth());

  // global state controlling the month in the calendar itself
  const globalMonthIndex = useGlobalStore((state) => state.monthIndex);
  const setSmallCalendarMonth = useGlobalStore((state) => state.setSmallCalendarMonth);
  const selectedDay = useGlobalStore((state) => state.selectedDay);
  const setDaySelected = useGlobalStore((state) => state.setDaySelected);

  // useEffect to detect changes and set the current month when index changes
  useEffect(() => {
    setcurrenMonth(getMonth(currenMonthIdx));
  }, [currenMonthIdx]);

  function handlePrevMonth() {
    setcurrenMonthIdx(currenMonthIdx - 1);
  }

  function handleNextMonth() {
    setcurrenMonthIdx(currenMonthIdx + 1);
  }

  useEffect(() => {
    setcurrenMonthIdx(globalMonthIndex);
  }, [globalMonthIndex]);

  function getDayClass(day: Dayjs) {
    const format = 'DD-MM-YY';
    const nowDay = dayjs().format(format);
    const currentDay = day.format(format);
    const daySelected = selectedDay && selectedDay.format(format);
    if (nowDay === currentDay) {
      return 'bg-blue-500 rounded-full text-white';
    } else if (currentDay === daySelected) {
      return 'bg-blue-100 rounded-full text-blue-600 font-bold';
    } else {
      return '';
    }
  }

  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="font-bold text-gray-500">{dayjs(new Date(dayjs().year(), currenMonthIdx)).format('MMMM YYYY')}</p>
        <div>
          <button onClick={handlePrevMonth} className="mx-2 cursor-pointer text-gray-600">
            <ChevronLeft />
          </button>
          <button onClick={handleNextMonth} className="mx-2 cursor-pointer text-gray-600">
            <ChevronRight />
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currenMonth[0].map((day, index) => (
          <span className="py-1 text-center text-sm" key={index}>
            {day.format('dd').charAt(0)}
          </span> // first character of the day onleys
        ))}
        {currenMonth.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((day, index) => (
              <button
                onClick={() => {
                  // onclick updates the main calendar index and sets it with the little one
                  setSmallCalendarMonth(currenMonthIdx);
                  setDaySelected(day);
                }}
                key={index}
                className={`w-full py-1 ${getDayClass(day)}`}
              >
                <span className="text-sm">{day.format('D')}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default SmallCalendar;
