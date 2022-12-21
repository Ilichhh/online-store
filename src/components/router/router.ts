import drawPage404Images from '../view/page-404/page404';
import type { Routes } from '../../types/types';

declare global {
  interface Window {
    route: (event: Event) => void;
  }
}

class Router {
  public handleLocation(): void {
    const routes: Routes = {
      404: {
        template: '404.html',
        component: '',
      },
      '/': {
        template: 'mainPage.html',
        component: '',
      },
      '/cart': {
        template: 'cartPage.html',
        component: '',
      },
      '/product': {
        template: 'productPage.html',
        component: '',
      },
    };

    const path = window.location.pathname.length === 0 ? '/' : window.location.pathname;
    const route = routes[path] || routes[404];
    fetch(route.template)
      .then((data: Response) => data.text())
      .then((html: string) => {
        (<HTMLElement>document.getElementById('main')).innerHTML = html;
        // drawPage404Images();
      });
  }

  public route(event: Event): void {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, '', (event.target as HTMLAnchorElement).href);
    this.handleLocation();
  }
}

export default Router;
