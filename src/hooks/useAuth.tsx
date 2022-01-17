/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, {
  ReactNode,
  useCallback,
  createContext,
  useContext,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { UpdateRequestStatus } from '../store/modules/app';

interface AuthContextProps {
  children?: ReactNode;
}

interface AuthContextProviderValue {
  signIn: (data: { email: string; password: string }) => void;
  user: User;
}

type User = {
  id: string;
  name: string;
  email: string;
};

const Auth = createContext<AuthContextProviderValue>(
  {} as AuthContextProviderValue,
);

const AuthContext = ({ children }: AuthContextProps): JSX.Element => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<User>({} as User);

  const signIn = useCallback(
    data => {
      const { email, password } = data;

      dispatch(UpdateRequestStatus('PENDING'));

      if (email === 'teste@sicredi.com' && password === 'teste123') {
        dispatch(UpdateRequestStatus('RESOLVE'));
        setUser({
          email: 'teste@sicredi.com',
          name: 'Sicredi',
          id: '74973016-76d5-11ec-90d6-0242ac120003',
        });
        return;
      }

      dispatch(
        UpdateRequestStatus(
          'REJECT',
          'Nao foi possivel acessar sua conta. Verifique suas credenciais e tente novamente',
        ),
      );
    },
    [dispatch],
  );

  return <Auth.Provider value={{ signIn, user }}>{children}</Auth.Provider>;
};

function useAuth(): AuthContextProviderValue {
  const context = useContext(Auth);
  return context;
}

export { AuthContext, useAuth };
