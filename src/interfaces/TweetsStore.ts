import { ITweet } from "./Tweet";

export interface ITweetsStore {
  tweets: ITweet[];
  fetchTweets(): Promise<any>,
  addTweet(authorId: number, content: string): Promise<any>,
  removeTweet(tweetId: number): Promise<any>
}
