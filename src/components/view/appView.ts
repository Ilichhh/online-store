import MainPage from './main-page/mainPage';
import type { ProductsData } from '../../types/types';

export class AppView {
  mainPage: MainPage;

  constructor() {
    this.mainPage = new MainPage();
  }

  public drawMainPage(data: ProductsData): void {
    this.mainPage.drawMainPage(data);
  }

  public drawAllProducts(data: ProductsData): void {
    this.mainPage.productsBlock.draw(data);
  }

  public drawAllFilters(data: ProductsData): void {
    this.mainPage.filtersBlock.draw(data);
  }
}

export default AppView;
