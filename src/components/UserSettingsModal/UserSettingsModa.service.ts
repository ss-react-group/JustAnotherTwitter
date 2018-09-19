import { env } from './../../env/environment';
import { Fetch } from './../../helpers/fetch';
export function getUserData(id: number): Promise<any> {
  return Fetch.request(env.securedRoutes + '/user/' + id, 'json');
}
