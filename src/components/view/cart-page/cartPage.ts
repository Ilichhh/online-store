import ModalBuyNow from './modal-buy-now/modalBuyNow';
import ProductCartBlock from './product-cart-block/productCartBlock';
import SummaryCartBlock from './summary-cart-block/summaryCartBlock';
import DomElement from '../domElement';
import type { ProductsData, CartItem } from '../../../types/types';
import NoProducts from './no-products/noProducts';

class CartPage extends DomElement {
  modalBuyNow: ModalBuyNow;
  productCartBlock: ProductCartBlock;
  summaryCartBlock: SummaryCartBlock;
  noProducts: NoProducts;

  constructor() {
    super();
    this.modalBuyNow = new ModalBuyNow();
    this.productCartBlock = new ProductCartBlock();
    this.summaryCartBlock = new SummaryCartBlock();
    this.noProducts = new NoProducts();
  }

  public drawCartPageNone(): void {
    const main: HTMLElement = <HTMLElement>document.getElementById('main');
    const cartBlock: HTMLElement = this.createElement(
      'div',
      'cart-block container d-flex flex-wrap w-100 mt-2 justify-content-between justify-content-lg-center'
    );
    main.appendChild(cartBlock);
    cartBlock.appendChild(this.noProducts.draw());
  }

  public drawCartPage(data: ProductsData, cart: CartItem[]): void {
    const main: HTMLElement = <HTMLElement>document.getElementById('main');

    const container: HTMLElement = this.createElement(
      'div',
      'cart-block container d-flex flex-wrap w-100 mt-2 justify-content-between justify-content-lg-center'
    );

    main.appendChild(container);
    container.appendChild(this.productCartBlock.draw(data, cart));
    container.appendChild(this.summaryCartBlock.draw(data));
    container.appendChild(this.modalBuyNow.draw());
  }
}

export default CartPage;
