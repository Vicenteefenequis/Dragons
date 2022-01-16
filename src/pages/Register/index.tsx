import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Button, DefaultLayout, Input } from '../../components';
import { FormHandler } from '../../hooks/useForm';
import { CreateDragon } from '../../store/modules/dragons';
import { RootState } from '../../store/modules/rootTypes';
import './styles.scss';

type DataForm = {
  name: string;
  type: string;
};

const Register = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state: RootState) => ({
    status: state.app.requestStatus,
  }));

  const handleSubmit = useCallback(
    (data: DataForm) => {
      const { name, type } = data;

      dispatch(
        CreateDragon({
          name,
          type,
        }),
      );

      if (status === 'RESOLVE') {
        navigate('/home');
      }
    },
    [status],
  );

  return (
    <DefaultLayout>
      <div className="register">
        <div className="card">
          <div className="card__content">
            <h6>Cadastre seu Dragao</h6>
            <FormHandler
              onSubmit={data => handleSubmit(data as DataForm)}
              className="input__content"
            >
              <div>
                <Input name="name" placeholder={'Name'} />
                <Input name="type" placeholder={'Type'} />
              </div>

              <Button loading={status === 'PENDING'}>
                <p>Cadastrar</p>
              </Button>
            </FormHandler>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Register;
