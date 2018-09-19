import { IFollowers } from './../interfaces';
import { observable, action } from 'mobx';

import jsonData from '../assets/followers';

export class Followers {
  @observable
  list: IFollowers;

  @action
  get() {
    this.list = jsonData;
  }
}

export const followers = new Followers();
