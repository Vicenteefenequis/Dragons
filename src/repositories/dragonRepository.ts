import { Dragon } from '../store/modules/dragons';
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
