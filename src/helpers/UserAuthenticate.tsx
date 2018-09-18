import { env } from '../env/environment';
import { Fetch } from './fetch';

export function UserAuthenticate(route: string, userDetails: any) {
  return Fetch.request(env.publicRoutes.concat(route), 'json', {
    method: 'POST',
    body: JSON.stringify(userDetails)
  });
}
