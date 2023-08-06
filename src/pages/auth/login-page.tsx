import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginRequest, profileRequest } from '../../services/auth/login.service';
import { useAuthStore } from '../../store/auth';

const LoginPage = () => {
  const [loading, setloading] = useState(false);

  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);

  // useQuery hacer consulta sin meterla en en un useEffect y controla el loading

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = e.target.elements;

    const resLogin = await loginRequest(email.value, password.value);

    setToken(resLogin.data.token);

    const resProfile = await profileRequest();

    setProfile(resProfile.data.profile);

    navigate('/dashboard');
    // setloading(true);
  };

  return (
    <section onSubmit={handleSubmit} className="flex h-screen items-center justify-center">
      <div className="rounded-[2rem] bg-secondary-main px-16 py-10">
        <form className="flex w-full flex-col items-center space-y-16 rounded-[2rem] bg-third-main p-24">
          <h1 className="text-4xl font-bold">Inicio De Sesion</h1>
          <div className="flex w-full flex-col space-y-3 text-2xl">
            <label htmlFor="username">Username</label>
            <input className="border border-black p-3" placeholder="Ingrese su correo electronico" name="email" type="email" />
          </div>

          <div className="flex w-full flex-col space-y-3 text-2xl">
            <label htmlFor="password">Password</label>
            <input className="border border-black p-3" name="password" type="password" />
          </div>
          <button className="w-full rounded-lg bg-secondary-500 p-5">Iniciar Sesion</button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
