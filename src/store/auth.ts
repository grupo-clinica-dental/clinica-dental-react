import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProfileInterface {
  email: string;
  password: string;
}

type State = {
  token: string;
  profile: ProfileInterface | null;
  isAuth: boolean;
};

type Actions = {
  setToken: (token: string) => void;
  setProfile: (profile: ProfileInterface) => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: '',
      profile: null,
      isAuth: false,
      setToken: (token: string) => set(() => ({ token, isAuth: true })),
      setProfile: (profile: ProfileInterface) => set(() => ({ profile })),
      logout: () => set(() => ({ token: '', isAuth: false, profile: null })),

      ///SOLO USAR STATE COMO PARAM DE FUNCION CUANDO NECESITO EL ANTERIOR
    }),
    {
      name: 'auth',
    }
  )
);
