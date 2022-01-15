import { CreateDragonPayload, Dragon } from '../store/modules/dragons';
import DragonApi from '../utils/api';
import { RepositoryFunctionReturn } from './types';

export type GetDragonsResponse = RepositoryFunctionReturn<{
  dragons: Dragon[];
}>;

export async function getDragons(): Promise<GetDragonsResponse> {
  const { data: dragons } = await DragonApi.get<Dragon[]>('/');
  if (!dragons) {
    return {
      status: 'REJECT',
      dragons: [],
    };
  }

  const sorttedData = dragons.sort((a, b) => {
    const nameOrderA = a.name.toLowerCase();
    const nameOrderB = b.name.toLowerCase();
    return nameOrderA > nameOrderB ? 1 : nameOrderB > nameOrderA ? -1 : 0;
  });

  const dataMapping = sorttedData.map(data => ({
    ...data,
    createdAt: new Date(data.createdAt).toLocaleDateString(),
  }));

  return {
    status: 'RESOLVE',
    dragons: dataMapping,
  };
}

export type CreateDragonResponse = RepositoryFunctionReturn<{
  dragon: Dragon | null;
}>;
export async function createDragon(
  dragon: CreateDragonPayload,
): Promise<CreateDragonResponse> {
  const { data: dragons } = await DragonApi.post<Dragon>('/', {
    name: dragon.name,
    type: dragon.type,
  });
  if (!dragons) {
    return {
      status: 'REJECT',
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      dragon: {} as Dragon,
    };
  }

  return {
    status: 'RESOLVE',
    dragon: dragons,
  };
}

export async function deleteDragon(id: string): Promise<CreateDragonResponse> {
  const { data: dragon } = await DragonApi.delete<Dragon>(`/${id}`);

  return {
    status: 'RESOLVE',
    dragon,
  };
}

export async function updateDragon(
  dragon: Dragon,
): Promise<CreateDragonResponse> {
  const { data: dragonResponse } = await DragonApi.put<Dragon>(`/${dragon.id}`);

  if (!dragon) {
    return {
      status: 'REJECT',
      dragon: null,
    };
  }

  return {
    status: 'RESOLVE',
    dragon: dragonResponse,
  };
}
