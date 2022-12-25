import AppView from '../view/appView';
import AppController from '../controller/appController';
import Router from '../router/router';
import type { ProductsData } from '../../types/types';
import type { CartItem } from '../../types/types';

class App {
  private view: AppView;
  private controller: AppController;
  private router: Router;
  private cart: CartItem[];

  constructor() {
    this.view = new AppView();
    this.controller = new AppController();
    this.router = new Router();
    this.cart = JSON.parse(<string>localStorage.getItem('cart')) || [];
  }

  public start(): void {
    this.router.handleLocation();
    this.controller.getAllProducts((data: ProductsData) => this.view.drawMainPage(data, this.cart));

    window.addEventListener('popstate', this.router.handleLocation);
    window.route = this.router.route;

    document.querySelector('.header__logo')?.addEventListener('click', (e) => {
      this.router.route(e);
      this.controller.getAllProducts((data: ProductsData) => this.view.drawMainPage(data, this.cart));
    });

    document.querySelector('.header__cart')?.addEventListener('click', (e) => {
      this.router.route(e);
    });

    this.view.mainPage.productsBlock.productsItemsBlock.addEventListener('click', (e: Event) => {
      this.controller.toggleAddToCartButton(e, this.cart);
    });

    this.view.mainPage.productsBlock.element.addEventListener('change', (e: Event) => {
      const button: HTMLButtonElement = <HTMLButtonElement>e.target;
      if (button.name === 'view-style') {
        this.router.setQueryString({ 'view-style': button.closest('.btn-check')?.id });
        this.controller.getAllProducts((data: ProductsData) =>
          this.view.mainPage.productsBlock.drawProducts(data, this.cart, button.closest('.btn-check')?.id)
        );
      }
    });
  }
}

export default App;
