/**
 * Reuseable function to manage fetching methods
 */
export abstract class Fetch {
  public static async request(
    url: string,
    type: string,
    options?: RequestInit
  ): Promise<any> {
    // @ts-ignore
    const token = localStorage.getItem('token');
    const securedHeader: RequestInit = {
      ...options,
      headers: {
        Accept: 'application/json',
        token
      }
    };

    if (type === 'json') {
      securedHeader.headers['Content-Type'] = 'application/json';
    }

    const response = await fetch(url, securedHeader).then(status);
    return await response.json();
  }
}

function status(response: any) {
  if (response.ok) {
    return Promise.resolve(response);
  }
  return new Error(response.statusText);
}

