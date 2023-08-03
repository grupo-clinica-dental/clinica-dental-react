import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar';

const DashBoardLayout = () => {
  return (
    <>
      <main className="flex">
        <Navbar></Navbar>
        <Outlet />
      </main>
    </>
  );
};

export default DashBoardLayout;
