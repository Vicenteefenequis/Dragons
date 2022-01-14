import React from 'react';
import { FaTrash, FaPen } from 'react-icons/fa';
import './styles.scss';

type Props = {
  position: string;
  name: string;
  canEdit: () => void;
  canDelete: () => void;
};

const Card = ({ position, name, canDelete, canEdit }: Props): JSX.Element => {
  return (
    <div className="card">
      <div className="wrapper__icons">
        <button onClick={canDelete}>
          <FaTrash size={20} className="trash" />
        </button>
        <button onClick={canEdit}>
          <FaPen size={20} className="pen" />
        </button>
      </div>
      <div className="main__content">
        <h2>Nº {position}</h2>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Card;
