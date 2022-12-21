import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://dummyjson.com/products');
  }
}

export default AppLoader;
