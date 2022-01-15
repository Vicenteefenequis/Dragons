import React from 'react';
import './styles.scss';

type Props = {
  title: string;
  description: string;
  onClose: () => void;
  clickApprove: () => void;
  cancelText: string;
  approveText: string;
};

const InfoModal = ({
  approveText,
  cancelText,
  description,
  onClose,
  title,
  clickApprove,
}: Props): JSX.Element => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={onClose}>X</button>
        </div>
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="body">
          <p>{description}</p>
        </div>
        <div className="footer">
          <button onClick={onClose} id="cancelBtn">
            {cancelText}
          </button>
          <button onClick={clickApprove}>{approveText}</button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
