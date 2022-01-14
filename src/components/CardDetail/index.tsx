import React from 'react';
import './styles.scss';

type Props = {
  name: string;
  createdAt: Date | number | string;
  type: string;
};

const CardDetail = ({ createdAt, name, type }: Props): JSX.Element => {
  return (
    <div className="card__detail">
      <div>
        <h1>Nome</h1>
        <h2>{name}</h2>
      </div>
      <div>
        <h1>Data de Criacao</h1>
        <h2>{createdAt}</h2>
      </div>
      <div>
        <h1>Type</h1>
        <h2>{type}</h2>
      </div>
    </div>
  );
};
export default CardDetail;
