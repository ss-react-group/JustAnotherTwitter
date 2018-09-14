import { IAssets } from './assets';
import { ILoadingIndicators } from './loadingIndicators';
import { ITweet } from './tweet';

export interface IStores {
  assets: IAssets;
  tweetsStore: {
    tweets: ITweet[];
  };
  loadingIndicators: ILoadingIndicators;
}
