import { observable, action } from 'mobx';
import { followers as followersData } from '../assets/mocks';
import { IFollowers } from '../interfaces';

export class Followers {
  @observable
  list: IFollowers;

  @action
  get() {
    this.list = followersData;
  }
}

export const followers = new Followers();
