import { IAssets } from './assets';
import { ITweet } from './tweet';

export interface IStores {
  assets: IAssets;
  tweetsStore: {
    tweets: ITweet[];
  };
}
