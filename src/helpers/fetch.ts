/**
 * Reuseable function to menage fetching methods
 */
export abstract class Fetch {
  public static request(url: string, options?: RequestInit): Promise<any> {
    return fetch(url, options)
      .then(response => response.json())
      .catch(err => new Error(err));
  }
}
