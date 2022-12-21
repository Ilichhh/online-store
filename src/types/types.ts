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

export type Routes = {
  [name: string | number]: {
    template: string;
    component: string;
  };
};
