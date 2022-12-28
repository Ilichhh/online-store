import AppView from '../view/appView';
import AppController from '../controller/appController';
import Router from '../router/router';
import type { ProductsData, CartItem } from '../../types/types';

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
    this.controller.getAllProducts((data: ProductsData) => {
      this.view.drawHeader(data, this.cart);
      this.view.drawMainPage(data, this.cart, this.router.getQueryParams());
    });

    window.addEventListener('popstate', this.router.handleLocation);
    window.route = this.router.route;

    document.querySelector('.header__logo')?.addEventListener('click', (e) => {
      this.router.route(e);
      this.controller.getAllProducts((data: ProductsData) =>
        this.view.drawMainPage(data, this.cart, this.router.getQueryParams())
      );
    });
    document.querySelector('.header__cart')?.addEventListener('click', (e) => this.router.route(e));

    this.view.mainPage.productsBlock.sortingFilter.addEventListener('change', (e) => this.sortProducts(e));
    this.view.mainPage.productsBlock.viewSwitcher.addEventListener('change', (e) => this.changeProductsView(e));
    this.view.mainPage.productsBlock.productsItemsBlock.addEventListener('click', (e) =>
      this.addRemoveFromCart(e, this.cart)
    );
  }

  private sortProducts(e: Event): void {
    const element: HTMLSelectElement = <HTMLSelectElement>e.target;
    this.router.setQueryString({ sort: element.value });
    this.controller.getAllProducts((data: ProductsData) =>
      this.view.drawAllProducts(data, this.cart, this.router.getQueryParams())
    );
  }

  private changeProductsView(e: Event): void {
    const element: HTMLButtonElement = <HTMLButtonElement>e.target;
    this.router.setQueryString({ 'view-style': element.closest('.btn-check')?.id });
    this.controller.getAllProducts((data: ProductsData) =>
      this.view.drawAllProducts(data, this.cart, this.router.getQueryParams())
    );
  }

  private addRemoveFromCart(e: Event, cart: CartItem[]): void {
    const button: Element = <Element>e.target;
    if (button.classList.contains('product-card__add-to-cart-button')) {
      button.classList.contains('btn-warning')
        ? this.cart.push({ id: +button.id, count: 1 })
        : this.cart.forEach((product, index) => (product.id === +button.id ? this.cart.splice(index, 1) : null));

      this.controller.getAllProducts((data: ProductsData) => this.view.header.updateData(data, cart));

      this.view.mainPage.productsBlock.toggleAddToCartButton(button);
      localStorage.setItem('cart', JSON.stringify(this.cart));
      console.log(this.cart);
    }
  }
}

export default App;
