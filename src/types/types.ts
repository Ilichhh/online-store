declare global {
  interface Window {
    route: (event: Event) => void;
  }
}

export type Route = {
  template: string;
  component: string;
};

export type Routes = {
  [name: string | number]: Route;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ProductsData = {
  products: Product[];
};

export type CallbackFunc<T> = (data: T) => void;

export type CartItem = {
  id: number;
  count: number;
};
