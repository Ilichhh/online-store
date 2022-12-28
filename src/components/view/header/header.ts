import DomElement from '../domElement';
import type { ProductsData, CartItem, QueryParams } from '../../../types/types';

class Header extends DomElement {
  cartItemsCount: HTMLElement;
  cartTotal: HTMLElement;

  constructor() {
    super();
    this.cartItemsCount = this.createElement(
      'span',
      'header__cart-items-count position-absolute top-0 start-100 translate-middle badge rounded-pill'
    );
    this.cartTotal = this.createElement('div', 'header__cart-tital-price');
  }

  public draw(data: ProductsData, cart: CartItem[]): void {
    const container: HTMLElement = <HTMLElement>document.querySelector('.container_header');
    const cartImage: HTMLElement = this.createElement('a', 'header__cart position-relative');

    cartImage.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
      </svg>
    `;

    container.appendChild(this.cartTotal);
    container.appendChild(cartImage);
    cartImage.appendChild(this.cartItemsCount);
    this.updateData(data, cart);
  }

  public updateData(data: ProductsData, cart: CartItem[]): void {
    let totalItems = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalItems += item.count;
      totalPrice += data.products[item.id - 1].price * item.count;
    });

    this.cartTotal.textContent = `Cart total: $${totalPrice}`;
    this.cartItemsCount.textContent = totalItems.toString();

    if (totalItems) {
      this.cartItemsCount.classList.add('bg-danger');
      this.cartItemsCount.classList.remove('bg-secondary');
    } else {
      this.cartItemsCount.classList.remove('bg-danger');
      this.cartItemsCount.classList.add('bg-secondary');
    }
  }
}

export default Header;
