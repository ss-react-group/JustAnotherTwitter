import { env } from '../env';
import { Fetch } from './Fetch';
import { IAsset } from '../interfaces';

export function getAsset(userId: number, typeId: number): Promise<IAsset> {
  return Fetch.request(`${env.securedRoutes}/assets/${userId}/${typeId}`, {
    method: 'GET'
  });
}

export function uploadAsset(params: any): Promise<IAsset> {
  const { assetType, files } = params;

  const formData = new FormData();
  formData.append('file', files[0]);

  return Fetch.request(`${env.securedRoutes}/file_upload/2/${assetType}`, {
    method: 'POST',
    body: formData
  });
}
