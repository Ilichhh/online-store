import DomElement from '../domElement';
import type { Product, CartItem } from '../../../types/types';

class ProdactPage extends DomElement {
  constructor() {
    super();
  }

  public drawProductPage(data: Product, cart: CartItem[]): void {
    console.log(data.id);
    console.log(cart);
  }
}

export default ProdactPage;
