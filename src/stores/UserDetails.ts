import { observable } from 'mobx';
import { IUser } from '../interfaces';

export class UserDetails {
  @observable
  user: IUser;
  @observable
  userPage: IUser;
}

export const userDetails = new UserDetails();
