import type { Route, Routes, QueryParams } from '../../types/types';

class Router {
  public async handleLocation(): Promise<void> {
    const routes: Routes = {
      404: {
        template: '404.html',
        component: '',
      },
      '/': {
        template: 'main.html',
        component: '',
      },
      '/cart': {
        template: 'cart.html',
        component: '',
      },
      '/product': {
        template: 'product.html',
        component: '',
      },
    };

    const path: string = window.location.pathname.length === 0 ? '/' : window.location.pathname;
    const route: Route = routes[path.split('-')[0]] || routes[404];

    await fetch(route.template)
      .then((data: Response) => data.text())
      .then((html: string) => {
        if (route === routes[404]) {
          (<HTMLElement>document.querySelector('body')).innerHTML = html;
        } else (<HTMLElement>document.getElementById('main')).innerHTML = '';
      });
  }

  public async route(event: Event): Promise<void> {
    const element: HTMLAnchorElement = <HTMLAnchorElement>event.target;
    event = event || window.event;
    event.preventDefault();
    const link = element.closest('a')?.href;
    window.history.pushState({}, '', link);
    await this.handleLocation();
  }

  public resetFilters(): void {
    const newUrl: URL = new URL(window.location.href);
    newUrl.search = '';
    window.history.pushState({}, '', newUrl.href);
  }

  public setQueryString(params: object): void {
    const newUrl: URL = new URL(window.location.href);

    for (const [key, value] of Object.entries(params)) {
      if (key === 'category' || key === 'brand') {
        const oldValues = this.getQueryParams()[key]?.split('%');
        if (!oldValues) newUrl.searchParams.set(key, value);
        else {
          if (oldValues.includes(value)) {
            const newValues = oldValues.filter((e) => e !== value);
            newUrl.searchParams.delete(key);
            newValues.forEach((e) => newUrl.searchParams.append(key, e));
          } else newUrl.searchParams.append(key, value);
        }
      } else if (key === 'search' && value === '') {
        newUrl.searchParams.delete(key);
      } else if (key === 'id' && isNaN(value)) {
        newUrl.searchParams.delete(key);
        // window.history.pushState({}, '', window.location.origin);
        // this.handleLocation();
      } else {
        newUrl.searchParams.set(key, value);
      }
    }

    window.history.pushState({}, '', newUrl.href);
  }

  public getQueryParams(): QueryParams {
    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);
    const paramsList: QueryParams = {};
    for (const [key, value] of searchParams.entries()) {
      paramsList[key] ? (paramsList[key] += `%${value}`) : (paramsList[key] = value);
    }
    return paramsList;
  }
}

export default Router;
