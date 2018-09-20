import { env } from '../env';
import { Fetch } from '../helpers/fetch';
import { IUser } from '../interfaces';

export class UserDetailsService {
  constructor() {}

  public async getUserDetails(id: string) {
    return Fetch.request(env.securedRoutes + '/user/' + id, 'json', {
      method: 'GET'
    });
  }

  public async updateUserDetails(id: number, userData: any): Promise<IUser> {
    return Fetch.request(env.securedRoutes + '/user/' + id, 'json', {
      method: 'PATCH',
      body: JSON.stringify(userData)
    });
  }
}
