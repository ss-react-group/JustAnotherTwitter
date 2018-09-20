import { IUser } from './user';
import { ITweet } from './tweet';
import { IAssets } from './assets';
import { ILoadingIndicators } from './loadingIndicators';
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
  },
  TweetModalStore: {
    isOpen: boolean
    selectedTweet: ITweet
  },
  commentsStore: {
    comments?: any[],
    addComment(postId: number ,authorId: number, content: string): Promise<any>,
    fetchComments(postId: number): Promise<any>,
    removeComment(commentId: number): any
  }
}
