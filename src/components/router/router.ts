import type { Route, Routes } from '../../types/types';

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

    const path: string = window.location.pathname.length === 0 ? '/' : window.location.pathname;
    const route: Route = routes[path] || routes[404];
    fetch(route.template)
      .then((data: Response) => data.text())
      .then((html: string) => {
        (<HTMLElement>document.getElementById('main')).innerHTML = html;
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
