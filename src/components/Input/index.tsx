import React, { InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import { useFormHandler } from '../../hooks/useForm';
import './styles.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: IconType;
}

const Input = ({ name, icon: Icon, ...rest }: InputProps): JSX.Element => {
  const { handleChangeField } = useFormHandler();
  return (
    <div className="container__input">
      {Icon && (
        <div className="container__icon">
          <Icon />
        </div>
      )}
      <input
        type="input"
        className="input"
        name={name}
        required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleChangeField(e);
        }}
        {...rest}
      />
    </div>
  );
};

export default Input;
