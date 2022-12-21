declare global {
  interface Window {
    route: (event: Event) => void;
  }
}

import drawPage404Images from '../page-404/page-404';

export const route = (event: Event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, '', (event.target as HTMLAnchorElement).href);
  handleLocation();
};

type Routes = {
  [name: string | number]: {
    template: string;
    component: string;
  };
};

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

export const handleLocation = async () => {
  const path = window.location.pathname.length === 0 ? '/' : window.location.pathname;

  const route = routes[path] || routes[404];
  const html = await fetch(route.template)
    .then((data: Response) => data.text())
    .then((html) => {
      (<HTMLElement>document.getElementById('main-page')).innerHTML = html;
      drawPage404Images();
    });
};

window.addEventListener('popstate', function () {
  handleLocation();
});

window.route = route;

handleLocation();
