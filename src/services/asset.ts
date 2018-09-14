import { env } from '../env/environment';
import { Fetch } from '../helpers/fetch';
import { IAsset } from '../interfaces/asset';

export function getAsset(userId: number, typeId: number): Promise<IAsset> {
  return Fetch.request(`${env.securedRoutes}/assets/${userId}/${typeId}`, {
    method: 'GET'
  });
}
