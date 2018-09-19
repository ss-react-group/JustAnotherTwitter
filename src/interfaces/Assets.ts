import { IAsset } from './Asset';

export interface IAssets {
  background: IAsset;
  avatar: IAsset;
  set(type: string, url: string): void;
}
