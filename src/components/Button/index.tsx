import React from 'react';
import LoadingSpinner from '../LoadingSpinner';
import './styles.scss';

type Props = {
  color?: 'primary';
  variant?: 'contained';
  loading?: boolean;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  color = 'primary',
  variant = 'contained',
  className,
  children,
  loading,
  ...rest
}: Props): JSX.Element => {
  return (
    <button
      className={[`${variant}-${color}-button button`, className].join(' ')}
    >
      {loading && <LoadingSpinner size={20} />}
      {children}
    </button>
  );
};

export default Button;
