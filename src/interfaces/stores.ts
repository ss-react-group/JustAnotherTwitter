import { IUser } from './user';
import { IAssets } from './assets';
import { ILoadingIndicators } from './loadingIndicators';
import { ITweetsStore } from './TweetsStore';

export interface IStores {
  assets: IAssets;
  tweetsStore: ITweetsStore;
  userDetails: {
    user: IUser;
    userPage: IUser;
    avatar: any;
    background: any;
    get(userId?: number): void;
    canUpload: any;
  };
  loadingIndicators: ILoadingIndicators;
  textareaStore: {
    content: string;
    setInitValue(): void;
  };
}
