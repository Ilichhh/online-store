import DomElement from '../domElement';
// import ratingIcon from '../../../assets/svg/star.svg';
import type { Product } from '../../../types/types';

class ProductCard extends DomElement {
  data: Product;
  addToCartButton: HTMLElement;
  element: HTMLElement;

  constructor(data: Product) {
    super();
    this.data = data;
    this.element = this.createElement('div', 'product-card card', { 'data-card-id': this.data.id });
    this.addToCartButton = this.createElement(
      'button',
      'product-card__add-to-cart-button btn btn-warning',
      { id: this.data.id },
      'Add to Cart'
    );
  }

  public drawGridView(): HTMLElement {
    const thumbnail = this.createElement('img', 'product-card__thumbnail card-img-top', {
      src: this.data.thumbnail,
      alt: 'card thumbnail',
      height: 220,
    });
    const body = this.createElement('div', 'product-card__body card-body');
    const discount = this.createElement(
      'span',
      'product-card__discount position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger',
      undefined,
      `-${Math.round(this.data.discountPercentage)}%`
    );
    const price = this.createElement('h4', 'product-card__price', undefined, `$${this.data.price}`);
    const title = this.createElement('h5', 'product-card__title card-title mt-1', undefined, this.data.title);
    const category = this.createElement(
      'h6',
      'product-card__category card-subtitle mb-2 text-muted',
      undefined,
      this.data.category
    );
    const description = this.createElement(
      'p',
      'product-card__description card-text',
      undefined,
      this.data.description
    );
    const wrapper = this.createElement('div', 'product-card__rating-stock-wrapper col mb-3');
    const rating = this.createElement('span', 'product-card__rating', undefined, `${this.data.rating}`);
    const stock = this.createElement(
      'span',
      'product-card__stock badge text-bg-light',
      undefined,
      `${this.data.stock}pcs.`
    );

    this.element.appendChild(thumbnail);
    this.element.appendChild(body);
    this.element.appendChild(discount);
    body.appendChild(price);
    body.appendChild(title);
    body.appendChild(category);
    body.appendChild(description);
    body.appendChild(wrapper);
    wrapper.appendChild(rating);
    wrapper.appendChild(stock);
    body.appendChild(this.addToCartButton);

    return this.element;
  }

  public drawLineView() {
    // for main page
  }

  public drawCartView() {
    // for cart page
  }
}

export default ProductCard;
