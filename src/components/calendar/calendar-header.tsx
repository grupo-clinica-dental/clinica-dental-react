import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

function CalendarHeader() {
  return (
    <header className="flex items-center px-4 py-2">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/2048px-Google_Calendar_icon_%282020%29.svg.png"
        alt="calendar"
        className="mr-2 h-12 w-12"
      />
      <h1 className="mr-10 text-xl font-bold text-gray-500">Calendar</h1>
      <button className="mr-5 rounded border px-4 py-2">Today</button>
      <button className="mr-5 rounded border px-4 py-2">
        <span className="">
          {' '}
          <ChevronLeft />
        </span>
      </button>
      <button className="mr-5 rounded border px-4 py-2">
        <span className="">
          {' '}
          <ChevronRight />
        </span>
      </button>
    </header>
  );
}

export default CalendarHeader;
