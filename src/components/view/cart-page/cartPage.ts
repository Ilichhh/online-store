import ModalBuyNow from './modal-bay-now/modalBuyNow';
import ProductCartBlock from './product-cart-block/productCartBlock';
import SummaryCartBlock from './summary-cart-block/summaryCartBlock';
import DomElement from '../domElement';
import type { ProductsData, CartItem } from '../../../types/types';

class CartPage extends DomElement {
  modalBuyNow: ModalBuyNow;
  productCartBlock: ProductCartBlock;

  constructor() {
    super();
    this.modalBuyNow = new ModalBuyNow();
    this.productCartBlock = new ProductCartBlock();
  }

  public drawCartPage(data: ProductsData, cart: CartItem[]): void {
    const main: HTMLElement = <HTMLElement>document.getElementById('main');
    const cartBlock: HTMLElement = <HTMLElement>document.querySelector('.cart-block');

    const summaryCartBlock = new SummaryCartBlock(data);

    main.appendChild(cartBlock);
    cartBlock.appendChild(this.productCartBlock.draw(data, cart));
    cartBlock.appendChild(summaryCartBlock.draw(cart));
    cartBlock.appendChild(this.modalBuyNow.draw());
  }
}

export default CartPage;
