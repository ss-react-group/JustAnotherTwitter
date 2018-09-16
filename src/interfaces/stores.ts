import { IUser } from './user';
import { IAssets } from './assets';
import { ILoadingIndicators } from './loadingIndicators';
import { ITweet } from './tweet';

export interface IStores {
  assets: IAssets;
  userDetails: {
    user: IUser;
  };
  tweetsStore: {
    tweets: ITweet[];
    fetchTweets?: any,
    addTweet?: (authorId: number, content: string) => Promise<any>
  };
  loadingIndicators: ILoadingIndicators;
  textareaStore: {
    content: string;
    setInitValue: () => void;
  }
}
