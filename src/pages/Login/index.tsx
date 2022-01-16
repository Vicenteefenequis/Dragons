import React, { useCallback } from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Button, Input } from '../../components';
import { useAuth } from '../../hooks/useAuth';
import { FormHandler } from '../../hooks/useForm';
import { RootState } from '../../store/modules/rootTypes';
import './styles.scss';

type DataForm = {
  email: string;
  password: string;
};

const Login = (): JSX.Element => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const { app } = useSelector((state: RootState) => ({ app: state.app }));

  const handleLogin = useCallback((data: DataForm) => {
    const { email, password } = data;

    signIn({ email, password });
    navigate('/home');
  }, []);

  return (
    <div className="login">
      <div className="flex__cards">
        <div className="card">
          <div className="card__content">
            <h6>Acesse Sua Conta</h6>
            <FormHandler
              onSubmit={data => handleLogin(data as DataForm)}
              className="input__content"
            >
              <div>
                <Input name="email" placeholder={'E-mail'} icon={FiUser} />
                <Input
                  name="password"
                  placeholder={'Password'}
                  icon={FiLock}
                  type="password"
                />
                {app.requestStatus === 'REJECT' && (
                  <span>{app.requestMessage}</span>
                )}
              </div>

              <Button>
                <p>Entrar</p>
              </Button>
            </FormHandler>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
