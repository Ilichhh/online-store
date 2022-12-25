import MainPage from './main-page/mainPage';
import type { ProductsData, CartItem, QueryParams } from '../../types/types';

export class AppView {
  mainPage: MainPage;

  constructor() {
    this.mainPage = new MainPage();
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
