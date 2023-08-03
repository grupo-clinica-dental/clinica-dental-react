import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainLayout from './pages/layouts/main-layout';

import Router from './routes/routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
