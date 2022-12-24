import MainPage from './main-page/mainPage';
import type { ProductsData, CartItem } from '../../types/types';

export class AppView {
  mainPage: MainPage;

  constructor() {
    this.mainPage = new MainPage();
  }

  public drawMainPage(data: ProductsData, cart: CartItem[]): void {
    this.mainPage.drawMainPage(data, cart);
  }

  public drawAllProducts(data: ProductsData, cart: CartItem[]): void {
    this.mainPage.productsBlock.draw(data, cart);
  }

  public drawAllFilters(data: ProductsData): void {
    this.mainPage.filtersBlock.draw(data);
  }
}

export default AppView;
