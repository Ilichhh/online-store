import DomElement from '../domElement';
import type { Product, CartItem, Image } from '../../../types/types';

class ProductPage extends DomElement {
  addToCart: HTMLElement;
  buy: HTMLElement;

  constructor() {
    super();
    this.addToCart = this.createElement('button', 'product-page__add-to-cart-btn btn', { type: 'button' });
    this.buy = this.createElement('a', 'product-page__buy-now-btn btn btn-outline-danger', {
      type: 'button',
      href: 'cart',
    });
  }

  public async drawProductPage(data: Product, cart: CartItem[]): Promise<void> {
    const main: HTMLElement = <HTMLElement>document.getElementById('main');
    const container = this.createElement('div', 'container');
    const breadcrumbs = this.createElement('div', 'product-page__breadcrumbs pt-4 mb-3');
    const wrapper = this.createElement('div', 'product-page__wrapper row');
    const title = this.createElement('h2', 'product-page__title', undefined, data.title);
    const col9 = this.createElement('div', 'col-9');
    const card = this.createElement('div', 'product-page__card card');
    const cardWrapper = this.createElement('div', 'row');
    const slider = this.createElement('div', 'carousel slide col-8', { id: 'productSlider', 'data-bs-ride': false });
    const sliderImgBlock = this.createElement('div', 'carousel-inner');

    const prevButton = this.createElement('button', 'carousel-control-prev', {
      type: 'button',
      'data-bs-target': '#productSlider',
      'data-bs-slide': 'prev',
    });
    const prevBtnIcon = this.createElement('span', 'carousel-control-prev-icon', { 'aria-hidden': 'true' });
    const nextButton = this.createElement('button', 'carousel-control-next', {
      type: 'button',
      'data-bs-target': '#productSlider',
      'data-bs-slide': 'next',
    });
    const nextBtnIcon = this.createElement('span', 'carousel-control-next-icon', { 'aria-hidden': 'true' });
    const sliderPreviews = this.createElement('div', 'product-page__previews carousel-indicators');

    const productInfo = this.createElement('ul', 'list-group list-group-flush col-4');
    const brand = this.createElement('li', 'list-group-item');
    const category = this.createElement('li', 'list-group-item');
    const description = this.createElement('li', 'list-group-item');
    const rating = this.createElement('li', 'list-group-item');
    const discount = this.createElement('li', 'list-group-item');
    const stock = this.createElement('li', 'list-group-item');
    const orderingBlock = this.createElement('div', 'product-page__ordering col-3 d-grid gap-3 h-50');
    const priceWrapper = this.createElement('div', 'd-flex justify-content-start align-items-end');
    const priceFinal = this.createElement('h3', 'product-page__price_final');
    const price = this.createElement('h5', 'product-page__price text-muted');

    const images: Image[] = [];
    let skip = 0;

    const drrr = async () => {
      data.images.forEach((link, index) => {
        const myRequest = new Request(link);
        fetch(myRequest).then((response) => {
          const headers = [...response.headers];
          const sizes = images.map((i) => i.size);
          if (!sizes.includes(headers[1][1])) {
            images.push({ url: link, size: headers[1][1] });
            const item = this.createElement(
              'div',
              `product-page__carousel carousel-item ${index === 0 ? 'active' : ''}`
            );
            const image = this.createElement('img', 'product-page__carousel-img d-block w-100', {
              src: link,
              alt: 'product image',
            });
            const previewButton = this.createElement('button', `product-page__preview ${index === 0 ? 'active' : ''}`, {
              type: 'button',
              'data-bs-target': '#productSlider',
              'data-bs-slide-to': index - skip,
              'aria-label': `Slide ${index - skip + 1}`,
            });
            const previewImage = this.createElement('img', 'product-page__preview-img d-block w-100 img-fluid', {
              alt: 'preview',
              src: link,
            });

            sliderImgBlock.appendChild(item);
            item.appendChild(image);
            sliderPreviews.appendChild(previewButton);
            previewButton.appendChild(previewImage);
          } else {
            skip++;
          }
        });
      });
    };

    await drrr();

    if (cart.filter((e) => e.id === data.id).length) {
      this.addToCart.textContent = 'Remove from Cart';
      this.addToCart.classList.add('btn-danger');
      this.addToCart.classList.remove('btn-warning');
    } else {
      this.addToCart.textContent = 'Add to Cart';
      this.addToCart.classList.add('btn-warning');
      this.addToCart.classList.remove('btn-danger');
    }

    breadcrumbs.textContent = `Store > ${data.category} > ${data.brand} > ${data.title}`;
    brand.textContent = `Brand: ${data.brand}`;
    category.textContent = `Category: ${data.category}`;
    description.textContent = `${data.description}.`;
    rating.textContent = `Rating: ${data.rating}`;
    discount.textContent = `Discount: ${Math.round(data.discountPercentage)}%`;
    stock.textContent = `Stock: ${data.stock}`;
    priceFinal.textContent = `$${data.price}`;
    this.buy.textContent = 'Buy Now';
    this.addToCart.id = data.id.toString();

    main.appendChild(container);
    container.appendChild(breadcrumbs);
    container.appendChild(wrapper);
    wrapper.appendChild(title);
    wrapper.appendChild(col9);
    col9.appendChild(card);
    card.appendChild(cardWrapper);
    cardWrapper.appendChild(slider);
    slider.appendChild(sliderImgBlock);
    slider.appendChild(prevButton);
    prevButton.appendChild(prevBtnIcon);
    slider.appendChild(nextButton);
    nextButton.appendChild(nextBtnIcon);
    slider.appendChild(sliderPreviews);
    cardWrapper.appendChild(productInfo);
    productInfo.appendChild(brand);
    productInfo.appendChild(category);
    productInfo.appendChild(description);
    productInfo.appendChild(rating);
    productInfo.appendChild(discount);
    productInfo.appendChild(stock);
    wrapper.appendChild(orderingBlock);
    orderingBlock.appendChild(priceWrapper);
    priceWrapper.appendChild(priceFinal);
    priceWrapper.appendChild(price);
    orderingBlock.appendChild(this.addToCart);
    orderingBlock.appendChild(this.buy);
  }

  // private async getUniqueImg(data: Product) {

  // }
}

export default ProductPage;
