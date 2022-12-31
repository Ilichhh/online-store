import Header from './header/header';
import MainPage from './main-page/mainPage';
import ProductPage from './product-page/productPage';
import type { ProductsData, Product, CartItem, QueryParams } from '../../types/types';

export class AppView {
  header: Header;
  mainPage: MainPage;
  productPage: ProductPage;

  constructor() {
    this.header = new Header();
    this.mainPage = new MainPage();
    this.productPage = new ProductPage();
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

  public drawProductPage(data: Product, cart: CartItem[]): void {
    this.productPage.drawProductPage(data, cart);
  }
}

export default AppView;
