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
    // const container: HTMLElement = this.createElement(
    //   'div',
    //   'cart-block container d-flex flex-wrap w-100 mt-2 justify-content-between justify-content-lg-center'
    // );

    main.appendChild(cartBlock);
    cartBlock.appendChild(this.productCartBlock.draw(data, cart));
    cartBlock.appendChild(this.summaryCartBlock.draw(data, cart));
    cartBlock.appendChild(this.modalBuyNow.draw(data, cart));
  }
}

export default CartPage;
