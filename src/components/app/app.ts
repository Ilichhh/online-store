import AppView from '../view/appView';
import AppController from '../controller/appController';
import type { ProductsData } from '../../types/types';

class App {
  private view: AppView;
  private controller: AppController;

  constructor() {
    this.view = new AppView();
    this.controller = new AppController();
  }

  public start(): void {
    this.view.drawFooter();
    this.view.drawMainPage();
    this.controller.getAllProducts((data: ProductsData) => this.view.drawAllProducts(data));
  }
}

export default App;
