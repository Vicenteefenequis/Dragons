import React from 'react';
import { Card, DefaultLayout } from '../../components';
import './styles.scss';

const Home = (): JSX.Element => {
  return (
    <DefaultLayout>
      <div className="home">
        <Card
          position={1}
          name="Cratos Dragon"
          canDelete={() => console.log('eerae')}
          canEdit={() => console.log('edit')}
        />
        <Card
          position={1}
          name="Cratos Dragon"
          canDelete={() => console.log('eerae')}
          canEdit={() => console.log('edit')}
        />
        <Card
          position={1}
          name="Cratos Dragon"
          canDelete={() => console.log('eerae')}
          canEdit={() => console.log('edit')}
        />
        <Card
          position={1}
          name="Cratos Dragon"
          canDelete={() => console.log('eerae')}
          canEdit={() => console.log('edit')}
        />
        <Card
          position={1}
          name="Cratos Dragon"
          canDelete={() => console.log('eerae')}
          canEdit={() => console.log('edit')}
        />
        <Card
          position={1}
          name="Cratos Dragon"
          canDelete={() => console.log('eerae')}
          canEdit={() => console.log('edit')}
        />
        <Card
          position={1}
          name="Cratos Dragon"
          canDelete={() => console.log('eerae')}
          canEdit={() => console.log('edit')}
        />
      </div>
    </DefaultLayout>
  );
};

export default Home;
