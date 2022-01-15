import React from 'react';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { FaTrash, FaPen } from 'react-icons/fa';
import './styles.scss';

type Props = {
  position: string;
  name: string;
  canEdit: () => void;
  canDelete: () => void;
  onClick: () => void;
};

const Card = ({
  position,
  name,
  canDelete,
  canEdit,
  onClick,
}: Props): JSX.Element => {
  return (
    <div className="card">
      <div className="wrapper__icons">
        <button
          onClick={onClick}
          style={{
            display: 'flex',
            flex: 1,
          }}
        >
          <BsFillInfoCircleFill size={20} className="info" />
        </button>
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
