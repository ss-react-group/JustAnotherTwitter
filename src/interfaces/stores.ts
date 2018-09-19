import { IUser } from './User';
import { IAssets } from './Assets';
import { ILoadingIndicators } from './LoadingIndicators';
import { ITweetsStore } from './TweetsStore';

export interface IStores {
  assets: IAssets;
  tweetsStore: ITweetsStore;
  userDetails: {
    user: IUser;
  };
  loadingIndicators: ILoadingIndicators;
  textareaStore: {
    content: string;
    setInitValue(): void;
  }
}
