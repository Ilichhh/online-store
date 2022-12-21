import Footer from './footer/footer';
import MainPage from './main-page/mainPage';
import type { ProductsData } from '../../types/types';

export class AppView {
  footer: Footer;
  mainPage: MainPage;

  constructor() {
    this.footer = new Footer();
    this.mainPage = new MainPage();
  }

  public drawFooter(): void {
    this.footer.drawFooterImages();
  }

  public drawMainPage(data: ProductsData): void {
    this.mainPage.drawMainPage(data);
  }

  public drawAllProducts(data: ProductsData): void {
    this.mainPage.productsBlock.draw(data);
  }
}

export default AppView;
