declare global {
  interface Window {
    route: (event: Event) => void;
  }
}

export type Attributes = {
  [name: string]: string | number | boolean;
};

export type Image = {
  url: string;
  size: string;
};

export type Route = {
  template: string;
};

export type Routes = {
  [name: string | number]: Route;
};

export type QueryParams = {
  [name: string]: string;
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
