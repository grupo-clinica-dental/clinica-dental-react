import CreateEvenButton from './calendar-create-event-button';
import SmallCalendar from './small-calendar';

function CalendarSideBar() {
  return (
    <aside className="w-64 border p-5">
      <CreateEvenButton />
      <SmallCalendar />
    </aside>
  );
}

export default CalendarSideBar;
