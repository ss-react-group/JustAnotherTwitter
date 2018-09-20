import { env } from './../env/environment';
import { Fetch } from '../helpers/fetch';

export function UserDetailsService(id: string) {
  return Fetch.request(env.securedRoutes + '/user/' + id, 'json');
}
