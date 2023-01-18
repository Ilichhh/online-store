import AppLoader from './appLoader';
import type { CallbackFunc } from './../../types/types';

class AppController extends AppLoader {
  public getAllProducts<T>(callback: CallbackFunc<T>): void {
    super.getResp('products?limit=100', callback);
  }

  public getAllCategories<T>(callback: CallbackFunc<T>): void {
    super.getResp('products/categories', callback);
  }
}

export default AppController;
