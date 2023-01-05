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
    // Init
    this.router.handleLocation();
    this.controller.getAllProducts((data: ProductsData) => {
      this.view.drawHeader(data, this.cart);
      this.view.drawMainPage(data, this.cart, this.router.getQueryParams());
    });

    window.addEventListener('popstate', this.router.handleLocation);
    window.route = this.router.route;

    // Header
    document.querySelector('.header__logo')?.addEventListener('click', (e) => {
      this.router.route(e);
      this.controller.getAllProducts((data: ProductsData) => {
        this.view.drawMainPage(data, this.cart, this.router.getQueryParams());
      });
    });

    this.view.header.cart.addEventListener('click', (e) => {
      this.router.route(e);
      this.controller.getAllProducts((data: ProductsData) => this.view.drawCartPage(data, this.cart));
    });

    // Product page
    this.view.productPage.addToCart.addEventListener('click', (e) => {
      const target: HTMLSelectElement = <HTMLSelectElement>e.target;
      this.addRemoveFromCart(target, target, this.cart);
    });

    // Main page
    this.view.mainPage.productsBlock.sortingFilter.addEventListener('change', (e) => this.sortProducts(e));
    this.view.mainPage.productsBlock.viewSwitcher.addEventListener('change', (e) => this.changeProductsView(e));
    this.view.mainPage.productsBlock.productsItemsBlock.addEventListener('click', (e) => {
      this.productCardEventListener(e, this.cart);
    });

    this.view.mainPage.filtersBlock.copyLInkBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href);
      this.view.mainPage.filtersBlock.copyLInkBtn.textContent = 'Copied!';
      setTimeout(() => (this.view.mainPage.filtersBlock.copyLInkBtn.textContent = 'Copy link'), 2000);
    });

    this.view.mainPage.filtersBlock.resetBtn.addEventListener('click', () => {
      this.router.resetFilters();
      this.controller.getAllProducts((data: ProductsData) => {
        this.view.drawMainPage(data, this.cart, this.router.getQueryParams());
      });
    });

    this.view.mainPage.filtersBlock.categoryFilter.addEventListener('change', (e) => {
      const target: HTMLElement = <HTMLElement>e.target;
      if (target.closest('input')) {
        const categoryItem: HTMLInputElement = <HTMLInputElement>target.closest('input');
        this.router.setQueryString({ category: categoryItem.value });
        this.controller.getAllProducts((data: ProductsData) => {
          this.view.mainPage.productsBlock.draw(data, this.cart, this.router.getQueryParams());
          // this.view.drawAllFilters(data, this.router.getQueryParams());
        });
      }
    });
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

  private productCardEventListener(e: Event, cart: CartItem[]): void {
    const target: Element = <Element>e.target;
    e.preventDefault();
    if (target.classList.contains('product-card__add-to-cart-button')) {
      const card: HTMLElement = <HTMLElement>target.closest('.product-card__main');
      this.addRemoveFromCart(card, target, cart);
    } else if (target.closest('.product-card__main')) {
      this.routeToProductPage(e, target, cart);
    }
  }

  private addRemoveFromCart(card: HTMLElement, target: Element, cart: CartItem[]): void {
    target.classList.contains('btn-warning')
      ? this.cart.push({ id: +card.id, count: 1 })
      : this.cart.forEach((product, index) => (product.id === +card.id ? this.cart.splice(index, 1) : null));
    this.controller.getAllProducts((data: ProductsData) => this.view.header.updateData(data, cart));
    this.view.mainPage.productsBlock.toggleAddToCartButton(target);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  private routeToProductPage(e: Event, target: Element, cart: CartItem[]) {
    const card: HTMLElement = <HTMLElement>target.closest('.product-card__main');
    this.router.route(e);
    this.controller.getAllProducts((data: ProductsData) =>
      this.view.productPage.drawProductPage(data.products[+card.id - 1], cart)
    );
  }
}

export default App;
