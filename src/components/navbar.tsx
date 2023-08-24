import { Link } from 'react-router-dom';

const pagesLinks = [
  {
    name: 'Inicio',
    path: '/home',
  },
  {
    name: 'Citas',
    path: '/appointments',
  },
  {
    name: 'Pacientes',
    path: '/patients',
  },
  {
    name: 'Perfil',
    path: '/profile',
  },
  {
    name: 'Ajustes',
    path: '/settings',
  },
];

const Navbar = () => {
  return (
    <nav className="flex h-screen w-80 flex-col items-center space-y-5 bg-maincolor-main py-10">
      <h3 className="text-lg text-white">Bienvenido</h3>
      <div className="h-32 w-4/5 rounded-xl bg-slate-800"></div>
      {pagesLinks.map((page, index) => {
        return (
          <Link key={index} className="w-3/4 rounded-2xl bg-third-main p-2" to={page.path}>
            {page.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
