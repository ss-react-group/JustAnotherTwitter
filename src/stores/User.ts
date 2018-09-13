import { IUser } from './../interfaces/user';
import { observable } from 'mobx';
export class User {
  @observable
  details: IUser = {} as IUser;
}

export const userStore = new User();
