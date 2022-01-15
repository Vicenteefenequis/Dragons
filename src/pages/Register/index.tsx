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
      <FormHandler
        className="register"
        onSubmit={data => handleSubmit(data as DataForm)}
      >
        <h1>Criar um Dragao</h1>
        <Input name="name" placeholder={'Nome'} />
        <Input name="type" placeholder={'Tipo'} />
        <Button loading={status === 'PENDING'} type="submit" className="btn">
          Register
        </Button>
      </FormHandler>
    </DefaultLayout>
  );
};

export default Register;
