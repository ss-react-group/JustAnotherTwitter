import { observable, action } from 'mobx';
import { env } from '../env';
import { Fetch } from '../services/Fetch';
import { ITweet } from '../interfaces';

export class Tweets {
  @observable
  tweets: ITweet[] = [];

  @action
  fetchTweets() {
    return Fetch.request(env.securedRoutes + '/posts', { method: 'GET' })
      .then((response: ITweet[]) => {
        this.tweets = response;
        return response;
      });
  }

  @action
  addTweet(authorId: number, content: string) {
    return Fetch.request(
      env.securedRoutes + '/add_new_post', 
      { 
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'authorId': authorId,
          'content': content
        })
      }
    )
    .then(() => {
      this.fetchTweets();
    });
  }

  @action
  removeTweet(tweetId: number) {
    return Fetch.request(
      env.securedRoutes + '/delete_post/' + tweetId, 
      { 
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )
    .then(() => {
      this.fetchTweets();
    });
  }

}

export const tweetsStore = new Tweets();
