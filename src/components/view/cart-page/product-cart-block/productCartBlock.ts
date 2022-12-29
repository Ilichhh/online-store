import DomElement from "../../domElement";
import ProductCard from "../../product-card/productCard";
import type { CartItem, ProductsData } from "../../../../types/types";
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

    // const cartBlockProductItem: HTMLElement = this.createElement(
    //   'div',
    //   'cart-block__product-item border-bottom d-flex justify-content-between align-items-center'
    // );

    // const cartBlockImgBlock: HTMLElement = this.createElement('div', 'me-2');
    //
    // const cartBlockImg: HTMLElement = this.createElement('img', 'cart-block__product-item__photo border rounded-4', {
    //   src: '',
    //   alt: 'product photo',
    //   width: '150',
    //   height: '150',
    // });
    //
    // const cartProductItemInfo: HTMLElement = this.createElement(
    //   'div',
    //   'd-flex flex-column justify-content-center align-items-center'
    // );
    //
    // const cartProductName: HTMLElement = this.createElement(
    //   'div',
    //   'cart-block__product-item__name mb-2 fs-4 fw-bold border-bottom',
    //   undefined,
    //   'iPhoneX'
    // );
    //
    // const cartProductDescription: HTMLElement = this.createElement(
    //   'div',
    //   'cart-block__product-item__description p-1 text-center',
    //   undefined,
    //   'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...'
    // );
    //
    // const cartProductInfoBlock: HTMLElement = this.createElement(
    //   'div',
    //   'd-flex justify-content-between mw-100 mb-2 w-75 text-muted'
    // );
    //
    // const cartProductRatingInfo: HTMLElement = this.createElement('div', 'cart-block__product-item__info me-2');
    //
    // const cartProductRatingText: HTMLElement = this.createElement('span', '', undefined, 'Rating');
    //
    // const cartProductRatingValue: HTMLElement = this.createElement(
    //   'span',
    //   'cart-block__product-item__rating',
    //   undefined,
    //   '4.44'
    // );
    //
    // const cartProductDiscountInfo: HTMLElement = this.createElement('div', '');
    //
    // const cartProductDiscountText: HTMLElement = this.createElement('span', '', undefined, 'Discount');
    //
    // const cartProductDiscountValue: HTMLElement = this.createElement(
    //   'span',
    //   'cart-block__product-item__discount',
    //   undefined,
    //   '17.94%'
    // );
    //
    // const cartProductStock: HTMLElement = this.createElement(
    //   'div',
    //   'd-flex flex-column align-items-center justify-content-around fw-bold'
    // );
    //
    // const cartProductStockCount: HTMLElement = this.createElement('div', 'mb-2');
    //
    // const cartProductStockCountText: HTMLElement = this.createElement(
    //   'span',
    //   'cart-block__product-general__item',
    //   undefined,
    //   'Stock:'
    // );
    //
    // const cartProductStockCountValue: HTMLElement = this.createElement(
    //   'span',
    //   'cart-block__product-item__stock',
    //   undefined,
    //   '34'
    // );
    //
    // const cartProductCount: HTMLElement = this.createElement('div', 'd-flex align-items-center mb-2');
    //
    // const cartProductCountPlus: HTMLElement = this.createElement(
    //   'div',
    //   'btn btn-warning me-1 d-flex justify-content-center align-items-center'
    // );
    //
    // cartProductCountPlus.innerHTML = `
    // <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus"
    //              viewBox="0 0 16 16">
    //           <path
    //               d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
    //         </svg>`;
    //
    // const cartProductCountInput: HTMLElement = this.createElement(
    //   'input',
    //   'cart-block__product-general__number fw-bold border rounded-2 me-1 ms-1 text-center',
    //   {
    //     type: 'text',
    //     value: '1',
    //   }
    // );
    //
    // const cartProductCountMinus: HTMLElement = this.createElement(
    //   'div',
    //   'btn btn-warning ms-1 d-flex justify-content-center align-items-center'
    // );
    //
    // cartProductCountMinus.innerHTML = `
    // <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash"
    //              viewBox="0 0 16 16">
    //           <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
    //         </svg>`;
    //
    // const cartProductPrice: HTMLElement = this.createElement(
    //   'div',
    //   'cart-block__product-item__price',
    //   undefined,
    //   '$1798.00'
    // );
    //
    this.element.appendChild(cartBlockGeneral);
    // this.element.appendChild(cartBlockProductItem);
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
    // cartBlockImgBlock.appendChild(cartBlockImg);
    // cartBlockProductItem.appendChild(cartBlockImgBlock);
    // cartBlockProductItem.appendChild(cartProductItemInfo);
    // cartProductItemInfo.appendChild(cartProductName);
    // cartProductItemInfo.appendChild(cartProductDescription);
    // cartProductItemInfo.appendChild(cartProductInfoBlock);
    // cartProductRatingInfo.appendChild(cartProductRatingText);
    // cartProductRatingInfo.appendChild(cartProductRatingValue);
    // cartProductDiscountInfo.appendChild(cartProductDiscountText);
    // cartProductDiscountInfo.appendChild(cartProductDiscountValue);
    // cartProductInfoBlock.appendChild(cartProductRatingInfo);
    // cartProductInfoBlock.appendChild(cartProductDiscountInfo);
    // cartProductStockCount.appendChild(cartProductStockCountText);
    // cartProductStockCount.appendChild(cartProductStockCountValue);
    // cartProductStock.appendChild(cartProductStockCount);
    // cartProductCount.appendChild(cartProductCountPlus);
    // cartProductCount.appendChild(cartProductCountInput);
    // cartProductCount.appendChild(cartProductCountMinus);
    // cartProductStock.appendChild(cartProductCount);
    // cartBlockProductItem.appendChild(cartProductStock);
    // cartProductStock.appendChild(cartProductCount);
    // cartProductStock.appendChild(cartProductPrice);
    //

    data.products.forEach((item) => {
      let inCart = 0;
      // cart.forEach((e) => {
      //   if (e.id === item.id) inCart = e.count;
      // });
      this.element.appendChild(new ProductCard(item, inCart).drawCartView());
    });

    return this.element;
  }
}

export default ProductCartBlock;
