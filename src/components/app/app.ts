import AppView from '../view/appView';
import AppController from '../controller/appController';
import Router from '../router/router';
import * as noUiSlider from 'nouislider';
import { Modal } from 'bootstrap';
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

  public async start(): Promise<void> {
    // Init
    await this.router.handleLocation();
    this.controller.getAllProducts((data: ProductsData) => {
      this.view.drawHeader(data, this.cart);
    });
    this.renderPage();

    // Route
    window.addEventListener('popstate', async () => {
      await this.router.handleLocation();
      this.renderPage();
    });

    // Header
    document.querySelector('.header__logo')?.addEventListener('click', (e) => {
      this.redirectToMainPage(e);
    });

    this.view.header.cart.addEventListener('click', async (e) => {
      await this.router.route(e);
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

    this.controller.getAllProducts((data: ProductsData) => {
      this.view.cartPage.productCartBlock.addCartListeners(data);
    });

    // Product page
    this.view.productPage.addToCart.addEventListener('click', (e) => {
      const target: HTMLSelectElement = <HTMLSelectElement>e.target;
      this.addRemoveFromCart(target, target, this.cart);
    });

    this.view.productPage.buy.addEventListener('click', (e) => {
      this.buyNowFromProductPage(e);
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

    this.view.mainPage.filtersBlock.resetBtn.addEventListener('click', async () => {
      this.router.resetFilters();
      this.controller.getAllProducts((data: ProductsData) => {
        this.view.drawMainPage(data, this.cart, this.router.getQueryParams());
      });
    });

    this.view.mainPage.filtersBlock.categoryFilter.addEventListener('change', (e) => {
      this.checkboxFilterProducts(e, 'category');
      this.controller.getAllProducts((data: ProductsData) => {
        this.view.mainPage.filtersBlock.draw(data, this.router.getQueryParams());
      });
    });

    this.view.mainPage.filtersBlock.brandFilter.addEventListener('change', (e) => {
      this.checkboxFilterProducts(e, 'brand');
      this.controller.getAllProducts((data: ProductsData) => {
        this.view.mainPage.filtersBlock.draw(data, this.router.getQueryParams());
      });
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
      this.controller.getAllProducts((data: ProductsData) => {
        this.view.drawAllProducts(data, this.cart, this.router.getQueryParams());
        this.view.drawAllFilters(data, this.router.getQueryParams());
      });
    });

    this.view.cartPage.container.addEventListener('click', (e) => {
      const target: HTMLElement = <HTMLElement>e.target;
      setTimeout(() => {
        if (target.id === 'minus-button-product-cart' && !this.cart.length) {
          this.view.drawCartPageNone();
        } else if (target.id === 'minus-button-product-cart') {
          // e.target?.dispatchEvent(new CustomEvent('changeCurrentPage', { bubbles: true }));
        }
      });
    });

    this.view.cartPage.modalBuyNow.submitButton.addEventListener('click', () => {
      console.log(this.view.cartPage.modalBuyNow.isValid);
      if (this.view.cartPage.modalBuyNow.isValid) {
        this.view.cartPage.modalBuyNow.closeButton.click();
        this.cart.length = 0;
        this.view.drawCartPageNone();
        const alert: HTMLElement = document.createElement('h2');
        alert.setAttribute('style', 'position:absolute;top:40%;left:35%;background-color:white');
        alert.innerHTML = 'The order has been placed';
        document.body.appendChild(alert);
        this.controller.getAllProducts((data: ProductsData) => {
          this.view.header.updateData(data, this.cart);
          setTimeout(() => {
            const headerLogo: HTMLLinkElement = <HTMLLinkElement>document.querySelector('.header__logo');
            alert.parentNode?.removeChild(alert);
            headerLogo.click();
          }, 3000);
        });
      }
    });
  }

  private async redirectToMainPage(e: Event): Promise<void> {
    await this.router.route(e);
    localStorage.setItem('promo', '0');
    this.controller.getAllProducts((data: ProductsData) => {
      this.cart = JSON.parse(<string>localStorage.getItem('cart')) || [];
      this.view.drawMainPage(data, this.cart, this.router.getQueryParams());
      this.view.header.updateData(data, this.cart);
    });
  }

  private async buyNowFromProductPage(e: Event): Promise<void> {
    const buyNowBtn: HTMLElement = <HTMLElement>e.target;
    const AddToCartBtn: HTMLElement = <HTMLElement>buyNowBtn?.parentNode?.childNodes[1];
    const id: number = +AddToCartBtn.id;

    if (!this.cart.filter((e) => e.id === id).length) {
      this.cart.push({ id: +AddToCartBtn.id, count: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));

    await this.router.route(e);
    this.controller.getAllProducts((data: ProductsData) => this.view.header.updateData(data, this.cart));
    this.renderCart();
    const myModal = new Modal(this.view.cartPage.modalBuyNow.element);
    setTimeout(() => myModal.show(), 1000);
  }

  private renderPage(): void {
    const path = window.location.pathname.slice(1);
    if (path === '') this.renderMain();
    if (path === 'cart') this.renderCart();
    if (path === 'product') {
      if (+this.router.getQueryParams().id) {
        this.renderProductPage(+this.router.getQueryParams().id, this.cart);
      } else {
        this.renderMain();
      }
    }
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
      this.cart.length ? this.view.drawCartPage(data, this.cart) : this.view.drawCartPageNone();
      this.view.header.updateData(data, this.cart);
    });
  }

  private sliderFilterProducts(range: string[], filter: 'price' | 'stock'): void {
    const min: number = Math.round(+range[0]);
    const max: number = Math.round(+range[1]);
    this.router.setQueryString({ [filter]: `${min}%${max}` });
    this.controller.getAllProducts((data: ProductsData) => {
      this.view.mainPage.productsBlock.draw(data, this.cart, this.router.getQueryParams());
      this.view.mainPage.filtersBlock.drawRangeFilter(
        data,
        filter === 'stock' ? this.view.mainPage.filtersBlock.priceFilter : this.view.mainPage.filtersBlock.stockFilter,
        filter === 'stock' ? 'price' : 'stock',
        this.router.getQueryParams()
      );
      this.view.mainPage.filtersBlock.drawCheckboxFilter(
        data,
        this.view.mainPage.filtersBlock.brandFilter,
        'brand',
        this.router.getQueryParams()
      );
      this.view.mainPage.filtersBlock.drawCheckboxFilter(
        data,
        this.view.mainPage.filtersBlock.categoryFilter,
        'category',
        this.router.getQueryParams()
      );
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

  private async productCardEventListener(e: Event, cart: CartItem[]): Promise<void> {
    const target: Element = <Element>e.target;
    e.preventDefault();
    if (target.classList.contains('product-card__add-to-cart-button')) {
      const card: HTMLElement = <HTMLElement>target.closest('.product-card__main');
      this.addRemoveFromCart(card, target, cart);
    } else if (target.closest('.product-card__main')) {
      const card: HTMLElement = <HTMLElement>target.closest('.product-card__main');
      const id: number = +card.id;
      await this.router.route(e);
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
    this.router.setQueryString({ id: id });
    this.controller.getAllProducts((data: ProductsData) => {
      const i: number = +this.router.getQueryParams().id - 1;
      this.view.productPage.drawProductPage(data.products[i], cart);
    });
  }
}

export default App;
