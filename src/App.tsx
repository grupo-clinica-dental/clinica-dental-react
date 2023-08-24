import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Router from './routes/routes';
import { getMonth } from './utils/getMonth.function';
import CalendarHeader from './components/calendar/calendar-header';
import CalendarSideBar from './components/calendar/calendar-sidebar';
import Month from './components/calendar/month';
import { useEffect, useState } from 'react';
import { useGlobalStore } from './store/auth';
import EventModal from './components/calendar/event-modal';

function App() {
  const [currentMonth, setcurrentMonth] = useState(getMonth());
  const globlaMonthIndex = useGlobalStore((state) => state.monthIndex);

  useEffect(() => {
    setcurrentMonth(getMonth(globlaMonthIndex));
  }, [globlaMonthIndex]);
  // const [indexChangeOfMonth, setindexChangeOfMonth] = useState(null);
  const isEventModalActive = useGlobalStore((state) => state.isEventModalActive);

  return (
    <>
      {/* {isEventModalActive && <EventModal />}
      <div className="flex h-screen flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <CalendarSideBar />
          <Month month={currentMonth} />
        </div>
      </div> */}

      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
