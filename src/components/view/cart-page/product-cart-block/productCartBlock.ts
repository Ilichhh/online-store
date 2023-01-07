import DomElement from '../../domElement';
import ProductCard from '../../product-card/productCard';
import type { CartItem, ProductsData } from '../../../../types/types';
// import gridIcon from '../../../../assets/svg/grid.svg';
// import listIcon from '../../../../assets/svg/list-ul.svg';

class ProductCartBlock extends DomElement {
  element: HTMLElement;

  constructor() {
    super();

    this.element = this.createElement('div', 'cart-block__product border rounded-4 w-75 p-2');
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

    const productInCartCount: number = cart.length;
    const productInPage = 3;
    const pageCount: number = Math.ceil(productInCartCount / productInPage);
    let currentPage = 1;

    const inputItemsCount: HTMLElement = this.createElement(
      'input',
      'cart-block__product-general__number fw-bold me-1 ms-1 text-center border rounded-2 d-flex align-items-center',
      {
        type: 'text',
        value: productInPage,
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
      'label',
      'cart-block__product-general__number fw-bold border rounded-2 me-1 ms-1 text-center',
      {
        type: 'text',
        value: currentPage,
      },
      `${currentPage}`
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

    cartPageArrowRight.addEventListener('click', () => {
      currentPage += 1;
      if (currentPage >= pageCount) {
        currentPage = pageCount;
      }
      inputPageCount.textContent = currentPage.toString();
    });

    cartPageArrowLeft.addEventListener('click', () => {
      currentPage -= 1;
      if (currentPage <= 1) {
        currentPage = 1;
      }
      inputPageCount.textContent = currentPage.toString();
    });

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

    // for (let i = currentPage; i < pageCount; i++) {
    //   console.log('currentPage', currentPage);
    //   console.log('pageCount', pageCount);
    //   data.products.forEach((itemData) => {
    //     if (cart[i].id === itemData.id && cart[i].count !== 0) {
    //       this.element.appendChild(new ProductCard(itemData, cart[i].count, i + 1).drawCartView());
    //     }
    //   });
    // }
    cart.forEach((item: CartItem, index: number) => {
      data.products.forEach((itemData) => {
        if (item.id === itemData.id && item.count !== 0) {
          this.element.appendChild(new ProductCard(itemData, item.count, index + 1).drawCartView());
        }
      });
    });
    return this.element;
  }
}

export default ProductCartBlock;
