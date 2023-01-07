import AppView from '../view/appView';
import AppController from '../controller/appController';
import Router from '../router/router';
import * as noUiSlider from 'nouislider';
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
    this.controller.getAllProducts((data: ProductsData) => {
      this.view.drawHeader(data, this.cart);
    });
    this.renderPage();

    // Route
    window.addEventListener('popstate', () => {
      this.router.handleLocation();
      this.renderPage();
    });

    // Header
    document.querySelector('.header__logo')?.addEventListener('click', (e) => {
      this.router.route(e);
      localStorage.setItem('promo', '0');
      this.controller.getAllProducts((data: ProductsData) => {
        this.cart = JSON.parse(<string>localStorage.getItem('cart')) || [];
        this.view.drawMainPage(data, this.cart, this.router.getQueryParams());
      });
    });

    this.view.header.cart.addEventListener('click', (e) => {
      this.router.route(e);
      this.renderCart();
    });

    document.addEventListener('click', (e: Event) => {
      if (
        (<HTMLElement>e.target).id === 'plus-button-product-cart' ||
        (<HTMLElement>e.target).id === 'minus-button-product-cart' ||
        (<HTMLElement>e.target).id === 'add-promo-input' ||
        (<HTMLElement>e.target).id === 'add-promo-code' ||
        (<HTMLElement>e.target).id === 'drop-promo0' ||
        (<HTMLElement>e.target).id === 'drop-promo1'
      ) {
        this.cart = JSON.parse(<string>localStorage.getItem('cart')) || [];
        this.controller.getAllProducts((data: ProductsData) => {
          this.view.header.updateData(data, this.cart);
        });
      }
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
      this.checkboxFilterProducts(e, 'category');
    });

    this.view.mainPage.filtersBlock.brandFilter.addEventListener('change', (e) => {
      this.checkboxFilterProducts(e, 'brand');
    });

    this.view.mainPage.filtersBlock.priceFilter.addEventListener('click', () => {
      const priceSlider: noUiSlider.API = <noUiSlider.API>this.view.mainPage.filtersBlock.priceFilter.noUiSlider;
      const range = <string[]>priceSlider.get(true);
      this.sliderFilterProducts(range, 'price');
    });

    this.view.mainPage.filtersBlock.stockFilter.addEventListener('click', () => {
      const stockSlider: noUiSlider.API = <noUiSlider.API>this.view.mainPage.filtersBlock.stockFilter.noUiSlider;
      const range = <string[]>stockSlider.get(true);
      this.sliderFilterProducts(range, 'stock');
    });

    this.view.mainPage.searchBar.searchButton.addEventListener('click', () => {
      const inputValue = this.view.mainPage.searchBar.input.value;
      this.router.setQueryString({ search: inputValue.toLowerCase() });
      this.controller.getAllProducts((data: ProductsData) =>
        this.view.drawAllProducts(data, this.cart, this.router.getQueryParams())
      );
    });
  }

  private renderPage(): void {
    const path = window.location.pathname.slice(1);
    if (path === '') this.renderMain();
    if (path === 'cart') this.renderCart();
    if (path.split('-')[0] === 'product') this.renderProductPage(+path.split('-')[1], this.cart);
  }

  private renderMain(): void {
    this.controller.getAllProducts((data: ProductsData) => {
      this.view.drawMainPage(data, this.cart, this.router.getQueryParams());
    });
  }

  private renderCart(): void {
    localStorage.setItem('promo', '0');
    this.controller.getAllProducts((data: ProductsData) => {
      this.view.cartPage.summaryCartBlock.recalculatePrice(data);
      this.view.drawCartPage(data, this.cart);
      this.view.header.updateData(data, this.cart);
    });
  }

  private sliderFilterProducts(range: string[], filter: string): void {
    const min: number = Math.round(+range[0]);
    const max: number = Math.round(+range[1]);
    this.router.setQueryString({ [filter]: `${min}%${max}` });
    this.controller.getAllProducts((data: ProductsData) => {
      this.view.mainPage.productsBlock.draw(data, this.cart, this.router.getQueryParams());
    });
  }

  private checkboxFilterProducts(e: Event, filter: string): void {
    const target: HTMLElement = <HTMLElement>e.target;
    if (target.closest('input')) {
      const item: HTMLInputElement = <HTMLInputElement>target.closest('input');
      this.router.setQueryString({ [filter]: item.value });
      this.controller.getAllProducts((data: ProductsData) => {
        this.view.mainPage.productsBlock.draw(data, this.cart, this.router.getQueryParams());
      });
    }
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
      const card: HTMLElement = <HTMLElement>target.closest('.product-card__main');
      const id = +card.id;
      this.router.route(e, id);
      this.renderProductPage(id, cart);
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

  private renderProductPage(id: number, cart: CartItem[]) {
    this.controller.getAllProducts((data: ProductsData) =>
      this.view.productPage.drawProductPage(data.products[id - 1], cart)
    );
  }
}

export default App;
