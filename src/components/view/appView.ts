import Footer from './footer/footer';
import MainPage from './main-page/mainPage';

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

  public drawMainPage(): void {
    this.mainPage.drawMainPage();
  }
}

export default AppView;
