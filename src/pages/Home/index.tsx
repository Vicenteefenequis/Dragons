import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  Card,
  DefaultLayout,
  InfoModal,
  LoadingSpinner,
} from '../../components';
import { DeleteDragon, GetDragons } from '../../store/modules/dragons';
import { RootState } from '../../store/modules/rootTypes';
import useModal from '../../utils/useModal';
import './styles.scss';

const Home = (): JSX.Element => {
  const { isOpen, onClose, onOpen } = useModal();
  const navigate = useNavigate();
  const { dragons, status } = useSelector((state: RootState) => ({
    dragons: state.dragon.dragons,
    status: state.app.requestStatus,
  }));
  const [idDeleted, setIdDeleted] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!dragons.length) dispatch(GetDragons());
  }, [dragons]);

  return (
    <DefaultLayout>
      <div className="home">
        {status === 'RESOLVE' ? (
          dragons?.map((dragon, key) => (
            <Card
              key={key}
              position={dragon.id}
              name={dragon.name}
              canDelete={() => {
                onOpen();
                setIdDeleted(dragon.id);
              }}
              canEdit={() => console.log('edit')}
              onClick={() => navigate(`/home/${dragon.id}`)}
            />
          ))
        ) : (
          <div className="container__spinner">
            <LoadingSpinner size={200} />
          </div>
        )}
        {isOpen && (
          <InfoModal
            title="Tem certeza que deseja excluir?"
            description="Se voce excluir ira desaparecer um dragao!"
            cancelText={'Cancel'}
            approveText={'Continue'}
            onClose={onClose}
            clickApprove={() => {
              onClose();
              dispatch(DeleteDragon({ id: idDeleted }));
            }}
          />
        )}
      </div>
    </DefaultLayout>
  );
};

export default Home;
