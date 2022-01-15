import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { CardDetail, DefaultLayout } from '../../components';
import { RootState } from '../../store/modules/rootTypes';
import './styles.scss';

const Detail = (): JSX.Element => {
  const { dragonId } = useParams();

  const { dragon } = useSelector((state: RootState) => ({
    dragon: state.dragon.dragons.find(dragon => dragon.id === dragonId),
  }));

  return (
    <DefaultLayout>
      <div className="detail">
        <CardDetail
          name={dragon?.name || ''}
          type={dragon?.type || ''}
          createdAt={dragon?.createdAt || ''}
        />
      </div>
    </DefaultLayout>
  );
};

export default Detail;
