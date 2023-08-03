import { Link } from 'react-router-dom';

const pagesLinks = [
  {
    name: 'Inicio',
    path: '/dashboard/inicio',
  },
  {
    name: 'Usuarios',
    path: '/dashboard/usuarios',
  },
  {
    name: 'Citas',
    path: '/dashboard/citas',
  },
  {
    name: 'Pacientes',
    path: '/dashboard/pacientes',
  },
  {
    name: 'Ajustes',
    path: '/dashboard/ajustes',
  },
];

const Navbar = () => {
  return (
    <nav className="flex h-screen w-80 flex-col items-center space-y-5 bg-bondiblue-950 py-10">
      <h3 className="text-lg text-white">Bienvenido</h3>
      <div className="h-32 w-4/5 rounded-xl bg-slate-800"></div>
      {pagesLinks.map((page) => {
        return (
          <Link className="w-3/4 rounded-2xl bg-shalimar-main p-2" to={page.path}>
            {page.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
