import React from 'react';
import { Header } from '..';
import './styles.scss';

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props): JSX.Element => {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};

export default DefaultLayout;
