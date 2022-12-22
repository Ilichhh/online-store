import type { CallbackFunc } from '../../types/types';

class Loader {
  private baseLink: string;

  constructor(baselink: string) {
    this.baseLink = baselink;
  }

  public getResp<T>(endpoint: string, callback: CallbackFunc<T>): void {
    this.load('GET', endpoint, callback);
  }

  private errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }
    return res;
  }

  private makeUrl(endpoint: string): string {
    const url = `${this.baseLink}${endpoint}`;
    return url;
  }

  private load<T>(method: string, endpoint: string, callback: CallbackFunc<T>): void {
    fetch(this.makeUrl(endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data: T) => callback(data))
      .catch((err: Error) => console.error(err));
  }
}

export default Loader;
