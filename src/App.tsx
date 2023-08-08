import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Router from './routes/routes';
import { getMonth } from './utils/getMonth.function';
import CalendarHeader from './components/calendar/calendar-header';
import CalendarSideBar from './components/calendar/calendar-sidebar';
import Month from './components/calendar/month';
import { useState } from 'react';

function App() {
  const [currentMonth, setcurrentMonth] = useState(getMonth());
  // const [indexChangeOfMonth, setindexChangeOfMonth] = useState(null);

  return (
    <>
      <div className="flex h-screen flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <CalendarSideBar />
          <Month month={currentMonth} />
        </div>
      </div>

      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
