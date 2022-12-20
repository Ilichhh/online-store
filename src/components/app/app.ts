import AppView from '../view/appView';
import AppController from '../controller/appController';

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
  }
}

export default App;
