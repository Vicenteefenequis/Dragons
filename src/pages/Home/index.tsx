import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Card, DefaultLayout, LoadingSpinner } from '../../components';
import { GetDragons } from '../../store/modules/dragons';
import { RootState } from '../../store/modules/rootTypes';
import './styles.scss';

const Home = (): JSX.Element => {
  const navigate = useNavigate();
  const { dragons, status } = useSelector((state: RootState) => ({
    dragons: state.dragon.dragons,
    status: state.app.requestStatus,
  }));

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
              canDelete={() => console.log('eerae')}
              canEdit={() => console.log('edit')}
              onClick={() => navigate(`/home/${dragon.id}`)}
            />
          ))
        ) : (
          <div className="container__spinner">
            <LoadingSpinner size={200} />
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Home;
