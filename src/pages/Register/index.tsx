import React from 'react';
import { Button, DefaultLayout, Input, LoadingSpinner } from '../../components';
import { FormHandler } from '../../hooks/useForm';
import './styles.scss';

const Register = (): JSX.Element => {
  return (
    <DefaultLayout>
      <FormHandler className="register" onSubmit={data => console.log(data)}>
        <h1>Criar um Dragao</h1>
        <Input name="name" placeholder={'Nome'} />
        <Input name="type" placeholder={'Tipo'} />
        <Button type="submit" className="btn">
          Register
        </Button>
      </FormHandler>
    </DefaultLayout>
  );
};

export default Register;
