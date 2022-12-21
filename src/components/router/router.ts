import drawPage404Images from '../page-404/page-404';
import type { Routes } from '../../types/types';

declare global {
  interface Window {
    route: (event: Event) => void;
  }
}

const routes: Routes = {
  404: {
    template: '404.html',
    component: '',
  },
  '/': {
    template: 'main-page.html',
    component: '',
  },
  '/cart': {
    template: 'cart-page.html',
    component: '',
  },
  '/product': {
    template: 'product-page.html',
    component: '',
  },
};

export const route = (event: Event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, '', (event.target as HTMLAnchorElement).href);
  handleLocation();
};

export function handleLocation() {
  const path = window.location.pathname.length === 0 ? '/' : window.location.pathname;

  const route = routes[path] || routes[404];
  console.log(route);
  fetch(route.template)
    .then((data: Response) => data.text())
    .then((html: string) => {
      (<HTMLElement>document.getElementById('main')).innerHTML = html;
      // drawPage404Images();
    });
}

window.addEventListener('popstate', handleLocation);

window.route = route;

handleLocation();
