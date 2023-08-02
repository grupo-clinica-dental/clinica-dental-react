import { useState } from 'react';
import './App.css';

import Pages from './routes/routes';
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Pages/>
      <Link to={'/'}>
        home
      </Link>
      <Link to={'/2'}>
        home 2
      </Link>
      <Link to={'/3'}>
        home 3
      </Link>
    </>
  );
}

export default App;
