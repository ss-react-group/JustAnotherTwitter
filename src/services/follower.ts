import { env } from './../env';
import { Fetch } from '../helpers/fetch';
import { IUser } from './../interfaces';

export class FollowersService {
  constructor() {}

  public getUser(userId: number) {
    return Fetch.request(`${env.securedRoutes}/followers/${userId}`, 'json', {
      method: 'GET'
    });
  }

  public updateUserDetails(id: number, userData: any): Promise<IUser> {
    return Fetch.request(env.securedRoutes + '/user/' + id, 'json', {
      method: 'PATCH',
      body: JSON.stringify(userData)
    });
  }
}
