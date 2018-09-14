import { observable } from 'mobx';
import { ITweet } from '../interfaces/tweet';

export class Tweets {
  @observable
  tweets: ITweet[] = [];
}

export const tweetsStore = new Tweets();
