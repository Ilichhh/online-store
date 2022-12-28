import MainPage from './main-page/mainPage';
import type { ProductsData, CartItem } from '../../types/types';
import CartPage from './cart-page/cartPage';

export class AppView {
  mainPage: MainPage;
  cartPage: CartPage;

  constructor() {
    this.mainPage = new MainPage();
    this.cartPage = new CartPage();
  }

  public drawMainPage(data: ProductsData, cart: CartItem[]): void {
    this.mainPage.drawMainPage(data, cart);
  }

  public drawCartPage(data: ProductsData, cart: CartItem[]): void {
    this.cartPage.drawCartPage(data, cart);
  }

  public drawAllProducts(data: ProductsData, cart: CartItem[]): void {
    this.mainPage.productsBlock.draw(data, cart);
  }

  public drawCartElement(data: ProductsData, cart: CartItem[]): void {
    this.cartPage.productCartBlock.draw(data, cart);
  }

  public drawAllFilters(data: ProductsData): void {
    this.mainPage.filtersBlock.draw(data);
  }
}

export default AppView;
