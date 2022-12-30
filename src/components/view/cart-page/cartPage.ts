import ModalBuyNow from './modal-bay-now/modalBuyNow';
import ProductCartBlock from './product-cart-block/productCartBlock';
import SummaryCartBlock from './summary-cart-block/summaryCartBlock';
import DomElement from '../domElement';
import type { ProductsData, CartItem } from '../../../types/types';

class CartPage extends DomElement {
  modalBuyNow: ModalBuyNow;
  productCartBlock: ProductCartBlock;
  summaryCartBlock: SummaryCartBlock;

  constructor() {
    super();
    this.modalBuyNow = new ModalBuyNow();
    this.productCartBlock = new ProductCartBlock();
    this.summaryCartBlock = new SummaryCartBlock();
  }

  public drawCartPage(data: ProductsData, cart: CartItem[]): void {
    const main: HTMLElement = <HTMLElement>document.getElementById('main');
    const cartBlock: HTMLElement = <HTMLElement>document.querySelector('.cart-block');

    main.appendChild(cartBlock);
    cartBlock.appendChild(this.productCartBlock.draw(data, cart));
    cartBlock.appendChild(this.summaryCartBlock.draw(data, cart));
    cartBlock.appendChild(this.modalBuyNow.draw());
  }
}

export default CartPage;
