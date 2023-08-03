import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-evenly bg-black p-3">
      <Link className="bg-red-300 p-2" to={'/'}>
        home
      </Link>
      <Link className="bg-red-300 p-2" to={'/login'}>
        Login
      </Link>
      <Link className="bg-red-300 p-2" to={'/register'}>
        Register
      </Link>
    </nav>
  );
};

export default Navbar;
