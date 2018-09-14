import { env } from '../env/environment';
import { Fetch } from '../helpers/fetch';
import { IAsset } from '../interfaces/asset';

export function getAsset(userId: number, typeId: number): Promise<IAsset> {
  const fetch = new Fetch();
  const request = fetch.request(
    `${env.securedRoutes}/assets/${userId}/${typeId}`,
    {
      method: 'GET'
    }
  );

  return request;
}

export function uploadAsset(params: any): Promise<IAsset> {
  const { assetType, files } = params;
  console.log(params);
  const formData = new FormData();
  formData.append('file', files[0]);

  const fetch = new Fetch();
  const request = fetch.request(
    `https://react-academy.herokuapp.com/api/v1/secured/file_upload/2/${assetType}`,
    {
      method: 'POST',
      body: formData
    }
  );

  return request;
}
