import { IUser } from './user';
import { IAssets } from './assets';
import { ITweet } from './tweet';

export interface IStores {
  assets: IAssets;
  user: IUser;
  tweetsStore: {
    tweets: ITweet[];
  };
}
