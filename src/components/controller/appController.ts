import AppLoader from './appLoader';
import type { CallbackFunc } from './../../types/types';

class AppController extends AppLoader {
  public getAllProducts<T>(callback: CallbackFunc<T>): void {
    super.getResp(callback);
  }
}

export default AppController;
