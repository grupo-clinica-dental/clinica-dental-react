import Footer from './../../components/footer';
import Navbar from './../../components/navbar';

const MainLayout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <main className="grid h-screen place-content-center">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
