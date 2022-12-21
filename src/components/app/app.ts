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
    this.view.drawFooter();
    this.controller.getAllProducts((data: ProductsData) => this.view.drawMainPage(data));
    this.router.handleLocation();

    window.addEventListener('popstate', this.router.handleLocation);
    window.route = this.router.route;

    document.querySelectorAll('.nav-item').forEach((e) => {
      e.addEventListener('click', (e) => {
        this.router.route(e);
        this.controller.getAllProducts((data: ProductsData) => this.view.drawMainPage(data));
      });
    });
  }
}

export default App;
