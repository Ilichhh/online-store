import MainPage from './main-page/mainPage';
import Header from './header/header';
import type { ProductsData, CartItem, QueryParams } from '../../types/types';

export class AppView {
  header: Header;
  mainPage: MainPage;

  constructor() {
    this.header = new Header();
    this.mainPage = new MainPage();
  }

  public drawHeader(data: ProductsData, cart: CartItem[]): void {
    this.header.draw(data, cart);
  }

  public drawMainPage(data: ProductsData, cart: CartItem[], params: QueryParams): void {
    this.mainPage.drawMainPage(data, cart, params);
  }

  public drawAllProducts(data: ProductsData, cart: CartItem[], params: QueryParams): void {
    this.mainPage.productsBlock.draw(data, cart, params);
  }

  public drawAllFilters(data: ProductsData): void {
    this.mainPage.filtersBlock.draw(data);
  }
}

export default AppView;
