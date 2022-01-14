import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, DefaultLayout } from '../../components';
import { GetDragons } from '../../store/modules/dragons';
import { RootState } from '../../store/modules/rootTypes';
import './styles.scss';

const Home = (): JSX.Element => {
  const { dragons } = useSelector((state: RootState) => ({
    dragons: state.dragon.dragons,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetDragons());
  }, []);

  return (
    <DefaultLayout>
      <div className="home">
        {dragons.map((dragon, key) => (
          <button key={key}>
            <Card
              position={dragon.id}
              name={dragon.name}
              canDelete={() => console.log('eerae')}
              canEdit={() => console.log('edit')}
            />
          </button>
        ))}
      </div>
    </DefaultLayout>
  );
};

export default Home;
