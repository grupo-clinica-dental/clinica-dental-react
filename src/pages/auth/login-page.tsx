import { EventHandler, FormEvent, useEffect, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

const initialUserCredentials = {
  email: '',
  password: '',
};

interface UserCredentials {
  email: string;
  password: string;
}

const getSessionToken = async (credentials: UserCredentials) => {
  const userExists = await getUser(credentials);

  console.log(userExists);

  if (!userExists) return false;

  const r = await fetch('http://localhost:4000/getToken');
  const data = await r.json();
  return data;
};

const getUser = async (credentials: UserCredentials) => {
  const response = await fetch('http://localhost:4000/users');
  const users = await response.json();

  const usersFound = users.filter(({ password, email }) => password === credentials.password && email === credentials.email);

  // el doble signo de exclamacion lo que niega el primero lo invierte seria una doble negacion

  return usersFound.length > 0 ? true : false;
};

const LoginPage = () => {
  const [credentials, setcredentials] = useState(initialUserCredentials);
  const [loading, setloading] = useState(false);

  // useQuery hacer consulta sin meterla en en un useEffect y controla el loading

  const navigate = useNavigate();

  const trySignIn = async () => {
    const token = await getSessionToken(credentials);
    if (token) {
      navigate('/dashboard');
    }
  };

  useEffect(() => {
    setcredentials(initialUserCredentials);
  }, []);

  useEffect(() => {
    trySignIn();
  }, [loading]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const { email, password } = e.target.elements;

    console.log(email, password);

    setloading(true);
    e.preventDefault();
  };

  return (
    <section onSubmit={handleSubmit} className="flex h-screen items-center justify-center">
      <div className="rounded-[2rem] bg-secondary-main px-16 py-10">
        <form className="flex w-full flex-col items-center space-y-16 rounded-[2rem] bg-third-main p-24">
          <h1 className="text-4xl font-bold">Inicio De Sesion</h1>
          <div className="flex w-full flex-col space-y-3 text-2xl">
            <label htmlFor="username">Username</label>
            <input
              className="border border-black p-3"
              value={credentials.email}
              onChange={(evento) => {
                setcredentials((estadoAnterior) => ({ ...estadoAnterior, email: evento.target.value }));
              }}
              placeholder="Ingrese su correo electronico"
              name="email"
              type="email"
            />
          </div>

          <div className="flex w-full flex-col space-y-3 text-2xl">
            <label htmlFor="password">Password</label>
            <input
              className="border border-black p-3"
              value={credentials.password}
              onChange={(evento) => {
                setcredentials((estadoAnterior) => ({ ...estadoAnterior, password: evento.target.value }));
              }}
              name="password"
              type="password"
            />
          </div>
          <button className="w-full rounded-lg bg-secondary-500 p-5">Iniciar Sesion</button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
