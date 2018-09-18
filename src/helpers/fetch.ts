/**
 * Reuseable function to manage fetching methods
 */
export abstract class Fetch {
  public static request(url: string, options?: RequestInit): Promise<any> {
    // @ts-ignore
    const { token } = window.localStorage;

    const securedHeader: RequestInit = {
      ...options
    };

    return fetch(url, securedHeader)
      .then(status)
      .then(response => response.json())
      .catch(err => console.log(err));
  }
}

function status(response: any) {
  if (response.ok) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
}
