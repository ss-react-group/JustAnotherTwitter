import { env } from '../env/environment';
import {Fetch} from "./fetch";

export function auth(userDetails: any) {
  return Fetch.request(
    env.publicRoutes + '/user_authenticate',
    {
      method: 'POST',
      body: JSON.stringify(userDetails)
    }
  );
}
