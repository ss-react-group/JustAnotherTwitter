import { IAsset } from './../interfaces/asset';
import { observable, action } from 'mobx';

import { host } from '../env/environment';

export class Assets {
  @observable
  background: IAsset = {
    filePath: '/default-image.png'
  } as IAsset;

  @observable
  avatar: IAsset = {
    filePath: '/default-image-square.png'
  } as IAsset;

  @action
  set(type: string, url: string) {
    const parsedUrl = `${host}${url}`;

    if (type === 'avatar') {
      this.avatar.filePath = parsedUrl;
    } else if (type === 'background') {
      this.background.filePath = parsedUrl;
    }
  }
}

export const assets = new Assets();
