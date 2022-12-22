import AppView from '../view/appView';
import AppController from '../controller/appController';
import Router from '../router/router';
import type { ProductsData } from '../../types/types';

class App {
  private view: AppView;
  private controller: AppController;
  private router: Router;

  constructor() {
    this.view = new AppView();
    this.controller = new AppController();
    this.router = new Router();
  }

  public start(): void {
    this.router.handleLocation();
    this.controller.getAllProducts((data: ProductsData) => this.view.drawMainPage(data));

    window.addEventListener('popstate', this.router.handleLocation);
    window.route = this.router.route;

    document.querySelector('.header__logo')?.addEventListener('click', (e) => {
      this.router.route(e);
      this.controller.getAllProducts((data: ProductsData) => this.view.drawMainPage(data));
    });

    document.querySelector('.header__cart')?.addEventListener('click', (e) => {
      this.router.route(e);
    });
  }
}

export default App;
