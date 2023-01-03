import DomElement from '../domElement';
// import ratingIcon from '../../../assets/svg/star.svg';
import type { Product } from '../../../types/types';

class ProductCard extends DomElement {
  data: Product;
  inCart: number;
  element: HTMLElement;
  index: number | undefined;

  constructor(data: Product, inCart: number, index?: number) {
    super();
    this.data = data;
    this.inCart = inCart;
    this.index = index;
    this.element = this.createElement('div', 'product-card card');
  }

  public drawGridView(): HTMLElement {
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
      { id: this.data.id },
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
    const cartBlockProductItem: HTMLElement = this.createElement(
      'div',
      'p-2 cart-block__product-item border-bottom d-flex justify-content-between align-items-center'
    );

    const cartNumberImageBlock: HTMLElement = this.createElement('div', 'd-flex align-items-center w-25');

    const cartBlockNumber: HTMLElement = this.createElement('div', 'me-2 fw-bold fs-6', undefined, `${this.index}`);

    const cartBlockImgBlock: HTMLElement = this.createElement('div', 'me-2 w-100');

    const cartBlockImg: HTMLElement = this.createElement(
      'img',
      'w-100 cart-block__product-item__photo border rounded-4',
      {
        src: this.data.thumbnail,
        alt: 'card thumbnail',
      }
    );

    const cartProductItemInfo: HTMLElement = this.createElement(
      'div',
      'd-flex flex-column justify-content-center align-items-center'
    );

    const cartProductName: HTMLElement = this.createElement(
      'div',
      'cart-block__product-item__name mb-2 fs-4 fw-bold border-bottom',
      undefined,
      `${this.data.title}`
    );

    const cartProductCategoryBlock: HTMLElement = this.createElement('div', 'd-flex fw-bolder');

    const cartProductCategoryText: HTMLElement = this.createElement('span', 'me-2', undefined, 'Category:');

    const cartProductCategory: HTMLElement = this.createElement('span', '', undefined, `${this.data.category}`);

    const cartProductDescription: HTMLElement = this.createElement(
      'div',
      'cart-block__product-item__description p-1 text-center',
      undefined,
      `${this.data.description}`
    );

    const cartProductInfoBlock: HTMLElement = this.createElement(
      'div',
      'd-flex justify-content-between mw-100 mb-2 w-75 text-muted'
    );

    const cartProductRatingInfo: HTMLElement = this.createElement('div', 'cart-block__product-item__info me-2');

    const cartProductRatingText: HTMLElement = this.createElement('span', 'me-2', undefined, 'Rating: ');

    const cartProductRatingValue: HTMLElement = this.createElement(
      'span',
      'cart-block__product-item__rating',
      undefined,
      `${this.data.rating}`
    );

    const cartProductDiscountInfo: HTMLElement = this.createElement('div', '');

    const cartProductDiscountText: HTMLElement = this.createElement('span', 'me-2', undefined, 'Discount: ');

    const cartProductDiscountValue: HTMLElement = this.createElement(
      'span',
      'cart-block__product-item__discount',
      undefined,
      `${this.data.discountPercentage}`
    );

    const cartProductStock: HTMLElement = this.createElement(
      'div',
      'd-flex flex-column align-items-center justify-content-around fw-bold'
    );

    const cartProductStockCount: HTMLElement = this.createElement('div', 'mb-2');

    const cartProductStockCountText: HTMLElement = this.createElement(
      'span',
      'cart-block__product-general__item me-2',
      undefined,
      'Stock:'
    );

    const cartProductStockCountValue: HTMLElement = this.createElement(
      'span',
      'cart-block__product-item__stock',
      undefined,
      `${this.data.stock}`
    );

    const cartProductCount: HTMLElement = this.createElement('div', 'd-flex align-items-center mb-2');

    const cartProductCountPlus: HTMLElement = this.createElement(
      'div',
      'btn btn-warning me-1 d-flex justify-content-center align-items-center'
    );

    cartProductCountPlus.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus"
                 viewBox="0 0 16 16">
              <path
                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>`;

    const cartProductCountInput: HTMLElement = this.createElement(
      'input',
      'cart-block__product-general__number fw-bold border rounded-2 me-1 ms-1 text-center',
      {
        type: 'text',
        value: `${this.inCart}`,
      }
    );

    cartProductCountPlus.addEventListener('click', (e) => {
      const cart = JSON.parse(localStorage.getItem('cart') || '');
      this.inCart += 1;
      localStorage.setItem(
        'cart',
        JSON.stringify(
          cart.map((item: { id: number }) => item.id === this.data.id ? { ...item, count: this.inCart } : item)))
      e.target?.dispatchEvent(new CustomEvent('recalculatePrice', { bubbles: true }));

      cartProductCountInput.setAttribute('value', this.inCart.toString());
    });

    const cartProductCountMinus: HTMLElement = this.createElement(
      'div',
      'btn btn-warning ms-1 d-flex justify-content-center align-items-center'
    );

    cartProductCountMinus.addEventListener('click', (e) => {
      const cart = JSON.parse(localStorage.getItem('cart') || '');

      this.inCart = this.inCart ? this.inCart - 1 : 0;

      localStorage.setItem(
        'cart',
        JSON.stringify(
          cart.map((item: { id: number }) => item.id === this.data.id ? { ...item, count: this.inCart } : item)));

      e.target?.dispatchEvent(new CustomEvent('recalculatePrice', { bubbles: true }));

      cartProductCountInput.setAttribute('value', this.inCart.toString());
    });

    cartProductCountMinus.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash"
                 viewBox="0 0 16 16">
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
            </svg>`;

    const cartProductPrice: HTMLElement = this.createElement(
      'div',
      'cart-block__product-item__price',
      undefined,
      `$${this.data.price}`
    );

    this.element.appendChild(cartBlockProductItem);
    cartNumberImageBlock.appendChild(cartBlockNumber);
    cartNumberImageBlock.appendChild(cartBlockImgBlock);
    cartBlockImgBlock.appendChild(cartBlockImg);
    cartBlockProductItem.appendChild(cartNumberImageBlock);
    cartBlockProductItem.appendChild(cartProductItemInfo);
    cartProductItemInfo.appendChild(cartProductName);
    cartProductCategoryBlock.appendChild(cartProductCategoryText);
    cartProductCategoryBlock.appendChild(cartProductCategory);
    cartProductItemInfo.appendChild(cartProductCategoryBlock);
    cartProductItemInfo.appendChild(cartProductDescription);
    cartProductItemInfo.appendChild(cartProductInfoBlock);
    cartProductRatingInfo.appendChild(cartProductRatingText);
    cartProductRatingInfo.appendChild(cartProductRatingValue);
    cartProductDiscountInfo.appendChild(cartProductDiscountText);
    cartProductDiscountInfo.appendChild(cartProductDiscountValue);
    cartProductInfoBlock.appendChild(cartProductRatingInfo);
    cartProductInfoBlock.appendChild(cartProductDiscountInfo);
    cartProductStockCount.appendChild(cartProductStockCountText);
    cartProductStockCount.appendChild(cartProductStockCountValue);
    cartProductStock.appendChild(cartProductStockCount);
    cartProductCount.appendChild(cartProductCountPlus);
    cartProductCount.appendChild(cartProductCountInput);
    cartProductCount.appendChild(cartProductCountMinus);
    cartProductStock.appendChild(cartProductCount);
    cartBlockProductItem.appendChild(cartProductStock);
    cartProductStock.appendChild(cartProductCount);
    cartProductStock.appendChild(cartProductPrice);

    return this.element;
  }
}

export default ProductCard;
