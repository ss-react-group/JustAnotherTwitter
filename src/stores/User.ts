import { observable } from 'mobx';
export class User {
  @observable
  details: any = {};
}

export const user = new User();
