import dayjs, { Dayjs } from 'dayjs';
import { useGlobalStore } from '../../store/auth';

interface DayProps {
  day: Dayjs;
  rowIdx: number;
}

function Day({ day, rowIdx }: DayProps) {
  const setSelectedDay = useGlobalStore((state) => state.setDaySelected);
  const showOrHideEventModal = useGlobalStore((state) => state.showOrHideEventModal);

  function getCurrentDayClass() {
    return day.format(`DD-MM-YY`) === dayjs().format('DD-MM-YY') ? 'bg-blue-600 text-white rounded-full w-7' : '';
  }

  return (
    <div className="flex flex-col border border-gray-200">
      <header className="flex flex-col items-center">
        {rowIdx == 0 && <p className="mt-1 text-sm">{day.format('ddd').toUpperCase()}</p>}
        <p className={`my-1 p-1 text-center text-sm ${getCurrentDayClass()}`}>{day.format('DD')}</p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setSelectedDay(day);
          showOrHideEventModal(true);
        }}
      >
        {''}
      </div>
    </div>
  );
}

export default Day;
