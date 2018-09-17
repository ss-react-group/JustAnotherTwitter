/**
 * Reuseable function to manage fetching methods
 */
export abstract class Fetch {
  public static request(url: string, options?: RequestInit): Promise<any> {
    // @ts-ignore
    const { token } = window.localStorage;
    const securedHeader: RequestInit = {
      ...options,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'token': token
      }
    };

    return fetch(url, securedHeader)
      .then(response => response.json())
      .catch(err => new Error(err));
  }
}
