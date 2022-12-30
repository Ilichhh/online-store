import DomElement from '../../domElement';
import ProductCard from '../../product-card/productCard';
import type { CartItem, ProductsData } from '../../../../types/types';
// import gridIcon from '../../../../assets/svg/grid.svg';
// import listIcon from '../../../../assets/svg/list-ul.svg';

class ProductCartBlock extends DomElement {
  element: HTMLElement;

  constructor() {
    super();
    this.element = this.createElement('div', 'cart-block__product bg-light border rounded-4 w-75 p-2');
  }

  public draw(data: ProductsData, cart: CartItem[]): HTMLElement {
    this.element.innerHTML = '';

    const cartBlockGeneral: HTMLElement = this.createElement(
      'div',
      'cart-block__product-general border-bottom fs-3 fw-bold pb-1 mb-2 d-flex flex-column justify-content-around align-items-center'
    );

    const cartBlockGeneralName: HTMLElement = this.createElement(
      'div',
      'cart-block__product-general__name',
      undefined,
      'Product in Cart'
    );

    const cartPageSetting: HTMLElement = this.createElement('div', 'd-flex fs-6 justify-content-around w-100');

    const cartSettingItems: HTMLElement = this.createElement('div', 'd-flex align-items-center');

    const pageItemsCount: HTMLElement = this.createElement('span', 'me-2', undefined, 'ITEMS');

    const inputItemsCount: HTMLElement = this.createElement(
      'input',
      'cart-block__product-general__number fw-bold me-1 ms-1 text-center border rounded-2 d-flex align-items-center',
      {
        type: 'text',
        value: '1',
      },
      ''
    );

    const cartSettingCount: HTMLElement = this.createElement('div', 'd-flex align-items-center');

    const cartPageCount: HTMLElement = this.createElement('span', 'me-2', undefined, 'PAGE');

    const cartPageArrowLeft: HTMLElement = this.createElement(
      'span',
      'btn btn-warning d-flex justify-content-center align-items-center'
    );

    cartPageArrowLeft.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
  <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>`;

    const inputPageCount: HTMLElement = this.createElement(
      'input',
      'cart-block__product-general__number fw-bold border rounded-2 me-1 ms-1 text-center',
      {
        type: 'text',
        value: '6',
      },
      ''
    );

    const cartPageArrowRight: HTMLElement = this.createElement(
      'span',
      'btn btn-warning d-flex justify-content-center align-items-center'
    );

    cartPageArrowRight.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>`;

    this.element.appendChild(cartBlockGeneral);
    cartBlockGeneral.appendChild(cartBlockGeneralName);
    cartSettingItems.appendChild(pageItemsCount);
    cartSettingItems.appendChild(inputItemsCount);
    cartSettingCount.appendChild(cartPageCount);
    cartSettingCount.appendChild(cartPageArrowLeft);
    cartSettingCount.appendChild(inputPageCount);
    cartSettingCount.appendChild(cartPageArrowRight);
    cartPageSetting.appendChild(cartSettingItems);
    cartPageSetting.appendChild(cartSettingCount);
    cartBlockGeneral.appendChild(cartPageSetting);

    cart.forEach((itemId: CartItem) => {
      data.products.forEach((itemData) => {
        let inCart = 0;
        cart.forEach((e) => {
          if (e.id === itemData.id) inCart = e.count;
        });

        if (itemId.id === itemData.id) {
          console.log(123);
          this.element.appendChild(new ProductCard(itemData, inCart).drawCartView());
        }
      });
    });

    return this.element;
  }
}

export default ProductCartBlock;
