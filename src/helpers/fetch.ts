/**
 * Reuseable function to manage fetching methods
 */
export abstract class Fetch {
  public static request(
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

    return fetch(url, securedHeader)
      .then(status)
      .then(response => response.json())
  }
}

function status(response: any) {
  if (response.ok) {
    return Promise.resolve(response);
  }
  return new Error(response.statusText);
}
