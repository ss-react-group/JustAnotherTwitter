import { env } from '../../../env/environment';
import { Fetch } from '../../../helpers/fetch';
import { IPost } from '../post.interface';

export function getAllPosts(): Promise<IPost[]> {
  const fetch = Fetch.request(env.api_secured + '/posts', {
    method: 'GET'
  });

  return fetch;
}
