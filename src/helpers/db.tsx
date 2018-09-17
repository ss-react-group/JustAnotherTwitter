import { env } from '../env/environment';
import {Fetch} from "./fetch";

export function auth(route:string, userDetails: any) {
  console.log(env.publicRoutes.concat(route));
  return Fetch.request(
    env.publicRoutes.concat(route),
    {
      method: 'POST',
      body: JSON.stringify(userDetails)
    }
  );
}
