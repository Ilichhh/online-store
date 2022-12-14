import Footer from '../footer/footer';

class App {
  footer: Footer;

  constructor() {
    this.footer = new Footer();
  }

  start() {
    this.footer.drawFooterImages();
  }
}

export default App;
