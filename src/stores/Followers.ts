import { FollowersService } from './../services/follower';
import { IFollowers } from './../interfaces';
import { observable, action } from 'mobx';

export class Followers {
  @observable
  list: IFollowers = [];

  @action
  get(userId: number) {
    const followersApi = new FollowersService();
    followersApi.getUser(userId).then((response: any) => {
      this.list = [...response];
    });
  }
}

export const followers = new Followers();
