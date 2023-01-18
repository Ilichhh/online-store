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
  container: HTMLElement;

  constructor() {
    super();
    this.container = this.createElement(
      'div',
      'cart-block container d-flex flex-wrap w-100 pt-2 justify-content-between justify-content-lg-center'
    );
    this.modalBuyNow = new ModalBuyNow();
    this.productCartBlock = new ProductCartBlock();
    this.summaryCartBlock = new SummaryCartBlock();
    this.noProducts = new NoProducts();
  }

  public drawCartPageNone(): void {
    const main: HTMLElement = <HTMLElement>document.getElementById('main');
    main.innerHTML = '';
    this.container.innerHTML = '';

    main.appendChild(this.container);
    this.container.appendChild(this.noProducts.draw());
  }

  public drawCartPage(data: ProductsData, cart: CartItem[]): void {
    const main: HTMLElement = <HTMLElement>document.getElementById('main');
    main.innerHTML = '';
    this.container.innerHTML = '';

    main.appendChild(this.container);
    this.container.appendChild(this.productCartBlock.draw(data, cart));
    this.container.appendChild(this.summaryCartBlock.draw(data));
    this.container.appendChild(this.modalBuyNow.draw());
  }
}

export default CartPage;
