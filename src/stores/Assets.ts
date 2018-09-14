import { IAsset } from './../interfaces/asset';
import { observable } from 'mobx';

export class Assets {
  @observable
  background: IAsset = {
    filePath: '/default-image.png'
  } as IAsset;

  @observable
  avatar: IAsset = {
    filePath: '/default-image-square.png'
  } as IAsset;
}

export const assets = new Assets();
