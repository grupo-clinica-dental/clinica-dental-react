import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home/home-page';
import LoginPage from '../pages/auth/login-page';
import RegisterUser from '../pages/auth/register-page';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="3" element={<h1>This is home 3</h1>} />
      <Route path="/" element={<h1>This is home</h1>} />
      <Route path="/" element={<h1>This is home</h1>} />
      <Route path="/" element={<h1>This is home</h1>} />
    </Routes>
  );
}

export default Pages;
