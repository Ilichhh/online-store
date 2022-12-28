import type { Route, Routes, QueryParams } from '../../types/types';

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
    const element: HTMLAnchorElement = <HTMLAnchorElement>event.target;
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, '', element.closest('a')?.href);
    this.handleLocation();
  }

  public setQueryString(params: object): void {
    const newUrl: URL = new URL(window.location.href);
    for (const [key, value] of Object.entries(params)) {
      newUrl.searchParams.set(key, value);
    }
    window.history.pushState({}, '', newUrl.href);
  }

  public getQueryParams(): QueryParams {
    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);
    const paramsList: QueryParams = {};
    for (const [key, value] of searchParams.entries()) {
      paramsList[key] = value;
    }
    return paramsList;
  }
}

export default Router;
