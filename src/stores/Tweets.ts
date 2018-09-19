import { observable, action } from 'mobx';
import { ITweet } from '../interfaces/tweet';
import { Fetch } from '../helpers/fetch';
import { env } from '../env';

export class Tweets {
  @observable
  tweets: ITweet[] = [];

  @action
  fetchTweets() {
    return Fetch.request(env.securedRoutes + '/posts', 'json', {
      method: 'GET'
    }).then((response: ITweet[]) => {
      this.tweets = response;
      return response;
    });
  }

  @action
  addTweet(authorId: number, content: string) {
    return Fetch.request(env.securedRoutes + '/add_new_post', 'json', {
      method: 'POST',
      body: JSON.stringify({
        authorId: authorId,
        content: content
      })
    }).then(() => {
      this.fetchTweets();
    });
  }

  @action
  removeTweet(tweetId: number) {
    return Fetch.request(
      env.securedRoutes + '/delete_post/' + tweetId,
      'json',
      {
        method: 'DELETE'
      }
    ).then(() => {
      this.fetchTweets();
    });
  }
}

export const tweetsStore = new Tweets();
