import { env } from '../env/environment';
import { Fetch } from './fetch';

export function auth(route: string, userDetails: any) {
  // @ts-ignore
  const { token } = window.localStorage;
  return Fetch.request(env.publicRoutes.concat(route), {
    method: 'POST',
    body: JSON.stringify(userDetails),
    headers: {
      'Content-type': 'application/json',
      token
    }
  });
}
