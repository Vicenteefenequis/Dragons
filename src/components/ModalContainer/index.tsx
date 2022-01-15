import React, { ReactPortal } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import { AiOutlineClose } from 'react-icons/ai';

type Props = {
  title: string;
  open: boolean;
  close: () => void;
  children: React.ReactNode;
  onSubmit: () => void;
};

const ModalContainer = ({
  open,
  close,
  children,
  title,
  onSubmit,
}: Props): ReactPortal | null => {
  const portalDiv =
    document.getElementById('root') ?? document.createElement('div');

  return open
    ? ReactDOM.createPortal(
        <>
          <div className="modal">
            <div className="modal__banner">
              <h1>{title}</h1>
              <button className="modal__close" onClick={close}>
                <AiOutlineClose color="#ffff" />
              </button>
            </div>
            <div className="moda__content">{children}</div>
            <div className="modal__footer">
              <button className="confirm__buton" onClick={onSubmit}>
                Submit{' '}
              </button>
            </div>
          </div>
        </>,
        portalDiv,
      )
    : null;
};

export default ModalContainer;
