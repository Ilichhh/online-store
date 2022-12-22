import DomElement from '../domElement';
// import ratingIcon from '../../../assets/svg/star.svg';
import type { Product } from '../../../types/types';

class ProductCard extends DomElement {
  thumbnail: string;
  price: number;
  title: string;
  category: string;
  description: string;
  rating: number;
  stock: number;
  discountPercentage: number;

  constructor(data: Product) {
    super();
    this.thumbnail = data.thumbnail;
    this.price = data.price;
    this.title = data.title;
    this.category = data.category;
    this.description = data.description;
    this.rating = data.rating;
    this.stock = data.stock;
    this.discountPercentage = Math.round(data.discountPercentage);
  }

  public drawGrid(): HTMLElement {
    const card = this.createElement('div', 'product-card card');
    const thumbnail = this.createElement('img', 'product-card__thumbnail card-img-top', {
      src: this.thumbnail,
      alt: 'card thumbnail',
      height: 220,
    });
    const body = this.createElement('div', 'product-card__body card-body');
    const discount = this.createElement(
      'span',
      'product-card__discount position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger',
      undefined,
      `-${this.discountPercentage}%`
    );
    const price = this.createElement('h4', 'product-card__price', undefined, `$${this.price}`);
    const title = this.createElement('h5', 'product-card__title card-title mt-1', undefined, this.title);
    const category = this.createElement(
      'h6',
      'product-card__category card-subtitle mb-2 text-muted',
      undefined,
      this.category
    );
    const description = this.createElement('p', 'product-card__description card-text', undefined, this.description);
    const wrapper = this.createElement('div', 'product-card__rating-stock-wrapper col mb-3');
    const rating = this.createElement('span', 'product-card__rating', undefined, `${this.rating}`);
    const stock = this.createElement('span', 'product-card__stock badge text-bg-light', undefined, `${this.stock}pcs.`);
    const addToCartButton = this.createElement(
      'button',
      'product-card__add-to-cart-button btn btn-warning',
      undefined,
      'Add to Cart'
    );

    card.appendChild(thumbnail);
    card.appendChild(body);
    card.appendChild(discount);
    body.appendChild(price);
    body.appendChild(title);
    body.appendChild(category);
    body.appendChild(description);
    body.appendChild(wrapper);
    wrapper.appendChild(rating);
    wrapper.appendChild(stock);
    body.appendChild(addToCartButton);

    return card;
  }
}

export default ProductCard;
