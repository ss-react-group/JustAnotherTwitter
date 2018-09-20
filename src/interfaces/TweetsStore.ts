import { ITweet } from './tweet';

export interface ITweetsStore {
  tweets: ITweet[];
  fetchTweets(userId?: any): Promise<any>;
  addTweet(authorId: number, content: string): Promise<any>;
  removeTweet(tweetId: number): Promise<any>;
}
