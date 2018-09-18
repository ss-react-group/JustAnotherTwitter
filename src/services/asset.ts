import { env } from '../env/environment';
import { Fetch } from '../helpers/fetch';
import { IAsset } from '../interfaces/asset';

export function getAsset(userId: number, typeId: number): Promise<IAsset> {
  return Fetch.request(`${env.securedRoutes}/assets/${userId}/${typeId}`, {
    method: 'GET'
  });
}

export function uploadAsset(params: any): Promise<IAsset> {
  const { assetType, files } = params;
  // @ts-ignore
  const { token } = window.localStorage;

  const formData = new FormData();
  formData.append('file', files[0]);

  return Fetch.request(`${env.securedRoutes}/file_upload/1/${assetType}`, {
    method: 'POST',
    body: formData,
    headers: {
      token,
      'Content-Type':
        'multipart/form-data; boundary=react-application-file-upload'
    }
  });
}
