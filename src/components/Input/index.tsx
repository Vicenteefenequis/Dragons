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
    <div className="form__group field">
      <input
        type="input"
        className="form__field"
        placeholder={rest.placeholder}
        name={name}
        required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleChangeField(e);
        }}
        {...rest}
      />
      <label htmlFor={name} className="form__label">
        {rest.placeholder}
      </label>
    </div>
  );
};

export default Input;
