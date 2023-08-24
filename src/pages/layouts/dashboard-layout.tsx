import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar';

const MainLayout = () => {
  return (
    <>
      <main className="flex">
        <Navbar></Navbar>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
