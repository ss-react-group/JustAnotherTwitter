import { IUser } from './user';
import { ITweet } from './tweet';
import { IAssets } from './assets';
import { ILoadingIndicators } from './loadingIndicators';
import { ITweetsStore } from './TweetsStore';
import { IComment } from './comment';

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
  TweetModalStore: {
    isOpen: boolean;
    selectedTweet: ITweet;
  };
  commentsStore: {
    comments?: IComment[],
    addComment(postId: number ,authorId: number, content: string): Promise<any>,
    fetchComments(postId: number): Promise<any>,
    removeComment(postId: number, commentId: number): any
  }
}
