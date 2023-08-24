import React from 'react';
import Day from './calendar-day';
import { Dayjs } from 'dayjs';

interface IMonthProps {
  month: Dayjs[][];
}

function Month({ month }: IMonthProps) {
  return (
    <div className="grid flex-1 grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, index) => (
            <Day day={day} key={index} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Month;
