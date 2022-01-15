/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  Card,
  DefaultLayout,
  ModalContainer,
  LoadingSpinner,
  Input,
} from '../../components';
import { FormHandler } from '../../hooks/useForm';
import {
  DeleteDragon,
  Dragon,
  GetDragons,
  PutDragon,
} from '../../store/modules/dragons';
import { RootState } from '../../store/modules/rootTypes';
import useModal from '../../utils/useModal';
import './styles.scss';

type FormData = {
  name: string;
  type: string;
};

const Home = (): JSX.Element => {
  const {
    isOpen: isOpenDelete,
    onClose: onCloseDelete,
    onOpen: onOpenDelete,
  } = useModal();
  const {
    isOpen: isOpenEdit,
    onClose: onCloseEdit,
    onOpen: onOpenEdit,
  } = useModal();
  const navigate = useNavigate();
  const { dragons, status } = useSelector((state: RootState) => ({
    dragons: state.dragon.dragons,
    status: state.app.requestStatus,
  }));
  const [idDeleted, setIdDeleted] = useState('');
  const [dragonEdit, setDragonEdit] = useState<Dragon>({} as Dragon);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!dragons.length) dispatch(GetDragons());
  }, [dragons]);

  const handleEdit = useCallback(
    (data: FormData) => {
      let { name, type } = data;

      if (!type) {
        type = dragonEdit.type;
      }

      if (!name) {
        name = dragonEdit.name;
      }

      dispatch(PutDragon({ ...dragonEdit, name, type }));
      onCloseEdit();
    },
    [dragonEdit],
  );

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
                onOpenDelete();
                setIdDeleted(dragon.id);
              }}
              canEdit={() => {
                onOpenEdit();
                setDragonEdit(dragon);
              }}
              onClick={() => navigate(`/home/${dragon.id}`)}
            />
          ))
        ) : (
          <div className="container__spinner">
            <LoadingSpinner size={200} />
          </div>
        )}
        <ModalContainer
          title={'Excluir Dragon'}
          open={isOpenDelete}
          close={onCloseDelete}
        >
          <p>Tem certeza que deseja excluir esse Dragon?</p>
          <button
            className="confirm__buton"
            onClick={() => {
              dispatch(DeleteDragon({ id: idDeleted }));
              onCloseDelete();
            }}
            type="submit"
          >
            Remover
          </button>
        </ModalContainer>
        <ModalContainer
          title={'Edit Dragon'}
          open={isOpenEdit}
          close={onCloseEdit}
        >
          <FormHandler onSubmit={data => handleEdit(data as FormData)}>
            <Input
              name="name"
              defaultValue={dragonEdit.name}
              placeholder={'Name'}
              style={{ width: 200 }}
            />
            <Input
              name="type"
              defaultValue={dragonEdit.type}
              placeholder={'Type'}
              style={{ width: 200 }}
            />
            <button className="confirm__buton" type="submit">
              Editar
            </button>
          </FormHandler>
        </ModalContainer>
      </div>
    </DefaultLayout>
  );
};

export default Home;
