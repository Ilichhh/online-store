import DomElement from '../domElement';
// import ratingIcon from '../../../assets/svg/star.svg';
import type { Product } from '../../../types/types';

class ProductCard extends DomElement {
  data: Product;
  inCart: number;
  element: HTMLElement;

  constructor(data: Product, inCart: number) {
    super();
    this.data = data;
    this.inCart = inCart;
    this.element = this.createElement('div', 'product-card card');
  }

  public drawGridView(): HTMLElement {
    const card = this.createElement('a', 'product-card__main', { href: `/product`, id: this.data.id });
    const thumbnail: HTMLElement = this.createElement('img', 'product-card__thumbnail card-img-top', {
      src: this.data.thumbnail,
      alt: 'card thumbnail',
      height: 220,
    });
    const body: HTMLElement = this.createElement('div', 'product-card__body card-body');
    const discount: HTMLElement = this.createElement(
      'span',
      'product-card__discount position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'
    );
    const price: HTMLElement = this.createElement('h4', 'product-card__price', undefined, `$${this.data.price}`);
    const title: HTMLElement = this.createElement('h5', 'product-card__title card-title mt-1');
    const category: HTMLElement = this.createElement('h6', 'product-card__category card-subtitle mb-2 text-muted');
    const description: HTMLElement = this.createElement('p', 'product-card__description card-text');
    const wrapper: HTMLElement = this.createElement('div', 'product-card__rating-stock-wrapper col mb-3');
    const rating: HTMLElement = this.createElement('span', 'product-card__rating', undefined, `${this.data.rating}`);
    const stock: HTMLElement = this.createElement('span', 'product-card__stock badge text-bg-light');
    const addToCartButton: HTMLElement = this.createElement(
      'button',
      `product-card__add-to-cart-button btn ${!this.inCart ? 'btn-warning' : 'btn-danger'}`,
      undefined,
      !this.inCart ? 'Add to Cart' : 'Remove from Cart'
    );

    wrapper.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
      </svg>
    `;

    discount.textContent = `-${Math.round(this.data.discountPercentage)}%`;
    title.textContent = this.data.title;
    category.textContent = this.data.category;
    description.textContent = this.data.description;
    stock.textContent = `${this.data.stock}pcs.`;

    this.element.appendChild(card);
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

    return this.element;
  }

  public drawListView() {
    const thumbnail: HTMLElement = this.createElement('img', 'product-card__thumbnail rounded-start', {
      src: this.data.thumbnail,
      alt: 'card thumbnail',
      height: 220,
      width: 220,
    });
    const discount: HTMLElement = this.createElement(
      'span',
      'product-card__discount position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'
    );
    const price: HTMLElement = this.createElement('h4', 'product-card__price', undefined, `$${this.data.price}`);
    const title: HTMLElement = this.createElement('h5', 'product-card__title card-title mt-1');
    const category: HTMLElement = this.createElement('h6', 'product-card__category card-subtitle mb-2 text-muted');
    const description: HTMLElement = this.createElement('p', 'product-card__description card-text');
    const ratingStockwrapper: HTMLElement = this.createElement('div', 'product-card__rating-stock-wrapper col mb-3');
    const rating: HTMLElement = this.createElement('span', 'product-card__rating', undefined, `${this.data.rating}`);
    const stock: HTMLElement = this.createElement('span', 'product-card__stock badge text-bg-light');
    const addToCartButton: HTMLElement = this.createElement(
      'button',
      `product-card__add-to-cart-button btn ${!this.inCart ? 'btn-warning' : 'btn-danger'}`,
      { id: this.data.id },
      !this.inCart ? 'Add to Cart' : 'Remove from Cart'
    );
    const wrapper = this.createElement('div', 'product-card card_list-view row g-0');
    const leftBlockWrapper = this.createElement('div', 'col-md-3');
    const centralBlockWrapper = this.createElement('div', 'col-md-6');
    const rightBlockWrapper = this.createElement('div', 'col-md-3');

    discount.textContent = `-${Math.round(this.data.discountPercentage)}%`;
    title.textContent = this.data.title;
    category.textContent = this.data.category;
    description.textContent = this.data.description;
    stock.textContent = `${this.data.stock}pcs.`;

    this.element.appendChild(discount);
    this.element.appendChild(wrapper);
    wrapper.appendChild(leftBlockWrapper);
    wrapper.appendChild(centralBlockWrapper);
    wrapper.appendChild(rightBlockWrapper);

    leftBlockWrapper.appendChild(thumbnail);
    centralBlockWrapper.appendChild(title);
    centralBlockWrapper.appendChild(category);
    centralBlockWrapper.appendChild(description);
    rightBlockWrapper.appendChild(price);
    rightBlockWrapper.appendChild(ratingStockwrapper);

    ratingStockwrapper.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
      </svg>
    `;

    ratingStockwrapper.appendChild(rating);
    ratingStockwrapper.appendChild(stock);
    rightBlockWrapper.appendChild(addToCartButton);

    return this.element;
  }

  public drawCartView() {
    // for cart page
  }
}

export default ProductCard;
