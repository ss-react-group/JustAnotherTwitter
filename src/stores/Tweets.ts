import { observable, action } from 'mobx';
import { ITweet } from '../interfaces/tweet';
import { Fetch } from '../helpers/fetch';
import { env } from '../env';

export class Tweets {
  @observable
  tweets: ITweet[] = [];

  @action
  async fetchTweets(userId?: any) {
    let path = `${env.securedRoutes}/posts`;
    if (userId) {
      path = `${env.securedRoutes}/posts/${userId}`;
    }

    const response = await Fetch.request(path, 'json', {
      method: 'GET'
    });
    this.tweets = response;
    return response;
  }

  @action
  async addTweet(authorId: number, content: string) {
    await Fetch.request(env.securedRoutes + '/add_new_post', 'json', {
      method: 'POST',
      body: JSON.stringify({
        authorId,
        content
      })
    });
    this.fetchTweets();
  }

  @action
  async removeTweet(tweetId: number) {
    await Fetch.request(
      env.securedRoutes + '/delete_post/' + tweetId,
      'json',
      {
        method: 'DELETE'
      });
      this.fetchTweets();
  }
}

export const tweetsStore = new Tweets();
