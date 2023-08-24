import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { useGlobalStore } from '../../store/auth';
import dayjs from 'dayjs';
import { useEffect } from 'react';

function CalendarHeader() {
  const monthIndex = useGlobalStore((state) => state.monthIndex);
  const setMonthIndex = useGlobalStore((state) => state.setMonthIndex);

  function increaseMonthIndex() {
    setMonthIndex((monthIndex as number) + 1);
  }

  function decreaseMonthIndex() {
    setMonthIndex((monthIndex as number) - 1);
  }

  function resetMonthIndex() {
    setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month());
  }

  return (
    <header className="flex items-center px-4 py-2 font-bold">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/2048px-Google_Calendar_icon_%282020%29.svg.png"
        alt="calendar"
        className="mr-2 h-12 w-12"
      />
      <h1 className="mr-10 text-xl font-bold text-gray-500">Calendar</h1>
      <button className="mr-5 rounded border px-4 py-2" onClick={() => resetMonthIndex()}>
        Today
      </button>
      <button onClick={() => decreaseMonthIndex()} className="mr-5 rounded border px-4 py-2">
        <span className="">
          {' '}
          <ChevronLeft />
        </span>
      </button>
      <button onClick={() => increaseMonthIndex()} className="mr-5 rounded border px-4 py-2">
        <span className="">
          {' '}
          <ChevronRight />
        </span>
      </button>
      <h2>{dayjs(new Date(dayjs().year(), monthIndex as number)).format('MMMM YYYY')}</h2>
    </header>
  );
}

export default CalendarHeader;
