import MainPage from './main-page/mainPage';
import Header from './header/header';
import type { ProductsData, CartItem, QueryParams } from '../../types/types';
import CartPage from './cart-page/cartPage';

export class AppView {
  header: Header;
  mainPage: MainPage;
  cartPage: CartPage;

  constructor() {
    this.header = new Header();
    this.mainPage = new MainPage();
    this.cartPage = new CartPage();
  }

  public drawHeader(data: ProductsData, cart: CartItem[]): void {
    this.header.draw(data, cart);
  }

  public drawMainPage(data: ProductsData, cart: CartItem[], params: QueryParams): void {
    this.mainPage.drawMainPage(data, cart, params);
  }

  public drawAllProducts(data: ProductsData, cart: CartItem[], params: QueryParams): void {
    this.mainPage.productsBlock.draw(data, cart, params);

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
