import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const DashBoardLayout = () => {
  return (
    <>
      <main className="flex">
        <Navbar></Navbar>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default DashBoardLayout;
