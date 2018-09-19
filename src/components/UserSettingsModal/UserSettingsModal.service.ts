import { env } from '../../env';
import { Fetch } from '../../services/Fetch';
export function getUserData(id: number): Promise<any> {
  return Fetch.request(env.securedRoutes + '/user/' + id);
}
