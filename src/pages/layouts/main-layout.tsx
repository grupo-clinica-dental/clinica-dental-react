import Footer from './../../components/footer';
import Navbar from './../../components/navbar';

const MainLayout = ({ children }: any) => {
  return (
    <>
      <div className="flex">
        <Navbar />
        <main className="grow">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
