import { IAsset } from './asset';

export interface IAssets {
  background: IAsset;
  avatar: IAsset;
  set(type: string, url: string): void;
}
