import React from 'react';
import './styles.scss';

type Props = {
  size: number;
};

const LoadingSpinner = ({ size }: Props): JSX.Element => {
  return <div className="spin" style={{ width: size, height: size }}></div>;
};

export default LoadingSpinner;
