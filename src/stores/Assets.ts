import { IAsset } from './../interfaces/asset';
import { observable } from 'mobx';

export class Assets {
  @observable
  background: IAsset;

  @observable
  avatar: IAsset = {
    filePath: ''
  } as IAsset;
}

export const assets = new Assets();
