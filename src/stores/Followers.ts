import { IFollowers } from './../interfaces';
import { observable, action } from 'mobx';

import { followers as followersData } from '../assets/mocks';

export class Followers {
  @observable
  list: IFollowers;

  @action
  get() {
    this.list = followersData;
  }
}

export const followers = new Followers();
