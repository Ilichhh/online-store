import DomElement from '../../domElement';
import { CartItem, ProductsData } from '../../../../types/types';

class modalBuyNow extends DomElement {
  element: HTMLElement;

  constructor() {
    super();
    this.element = this.createElement('div', 'modal fade', {
      id: 'staticBackdrop',
      'data-bs-backdrop': 'static',
      'data-bs-keyboard': 'false',
      tabindex: '-1',
      'aria-labelledby': 'staticBackdropLabel',
      'aria-hidden': 'true',
    });
  }

  public draw(data: ProductsData, cart: CartItem[]): HTMLElement {
    this.element.innerHTML = '';

    const modal: HTMLElement = this.createElement('div', 'modal-dialog w-100');
    const modalContent: HTMLElement = this.createElement('div', 'modal-content');
    const modalHeader: HTMLElement = this.createElement('div', 'modal-header');
    const modalBody: HTMLElement = this.createElement(
      'div',
      'modal-body d-flex p-3 justify-content-center align-items-start'
    );
    const modalHeaderName: HTMLElement = this.createElement(
      'h5',
      'modal-title fs-4',
      { id: 'staticBackdropLabel' },
      'PERSONAL DETAILS'
    );
    const modalHeaderButtonClose: HTMLElement = this.createElement('button', 'btn-close', {
      'data-bs-dismiss': 'modal',
      'aria-label': 'Close',
    });
    const modalForm: HTMLElement = this.createElement(
      'form',
      'd-flex m-2 w-75 fs-5 flex-column align-items-start justify-content-start'
    );

    const modalFormName: HTMLElement = this.createElement('div', 'form-floating mb-3');
    const modalFormNameInput: HTMLElement = this.createElement('input', 'form-control', {
      type: 'text',
      pattern: '[a-z]{1,15}',
      required: '',
      id: 'name-input',
      placeholder: 'Name',
    });
    const modalFormNameLabel: HTMLElement = this.createElement('label', '', { for: 'name-input' }, 'Name');

    const modalFormPhone: HTMLElement = this.createElement('div', 'form-floating mb-3');
    const modalFormPhoneInput: HTMLElement = this.createElement('input', 'form-control', {
      type: 'tel',
      required: true,
      // pattern: `'\s{0,}\+{1,1}375\s{0,}\({0,1}(([2]{1}([5]{1}|[9]{1}))|([3]{1}[3]{1})|([4]{1}[4]{1}))\)\s{0,}[0-9]{3,3}\s{0,}[0-9]{4,4}'`,
      id: 'phone-number-input',
      placeholder: 'Phone number',
    });
    const modalFormPhoneLabel: HTMLElement = this.createElement(
      'label',
      '',
      { for: 'phone-number-input' },
      'Phone number'
    );

    const modalFormAddress: HTMLElement = this.createElement('div', 'form-floating mb-3');
    const modalFormAddressInput: HTMLElement = this.createElement('input', 'form-control', {
      type: 'text',
      required: true,
      id: 'address-input',
      placeholder: 'Delivery address',
    });
    const modalFormAddressLabel: HTMLElement = this.createElement(
      'label',
      '',
      { for: 'address-input' },
      'Delivery address'
    );

    const modalFormEmail: HTMLElement = this.createElement('div', 'form-floating mb-3');
    const modalFormEmailInput: HTMLElement = this.createElement('input', 'form-control', {
      type: 'email',
      required: true,
      id: 'email-input',
      placeholder: 'name@example.com',
    });

    const modalFormEmailLabel: HTMLElement = this.createElement('label', '', { for: 'email-input' }, 'Email address');

    const modalFormCreditCard: HTMLElement = this.createElement(
      'div',
      'card-bock p-3 border border-start p-2 rounded-4'
    );

    const modalFormCreditCardNumber: HTMLElement = this.createElement('div', 'form-floating mb-3 me-2');
    const modalFormCreditCardNumberInput: HTMLElement = this.createElement('input', 'form-control', {
      type: 'text',
      required: true,
      id: 'card-number-input',
      placeholder: 'Credit card number',
    });
    const modalFormCreditCardNumberLabel: HTMLElement = this.createElement(
      'label',
      '',
      { for: 'card-number-input' },
      'Credit card number'
    );

    const modalFormCreditCardDC: HTMLElement = this.createElement('div', 'd-flex');

    const modalFormCreditCardDate: HTMLElement = this.createElement('div', 'form-floating mb-3 me-2');
    const modalFormCreditCardDateInput: HTMLElement = this.createElement('input', 'form-control', {
      type: 'text',
      required: true,
      id: 'date-input',
      placeholder: 'Data',
    });
    const modalFormCreditCardDateLabel: HTMLElement = this.createElement('label', '', { for: 'date-input' }, 'Data');

    const modalFormCreditCardCVV: HTMLElement = this.createElement('div', 'form-floating mb-3');
    const modalFormCreditCardCVVInput: HTMLElement = this.createElement('input', 'form-control', {
      type: 'text',
      required: '',
      id: 'code-input',
      placeholder: 'Code',
    });
    const modalFormCreditCardCVVLabel: HTMLElement = this.createElement('label', '', { for: 'code-input' }, 'CVV');

    const modalFooter: HTMLElement = this.createElement('div', 'modal-footer');
    const modalFooterCloseButton: HTMLElement = this.createElement(
      'button',
      'btn btn-secondary',
      {
        type: 'button',
        'data-bs-dismiss': 'modal',
      },
      'Close'
    );

    const modalFooterBuyButton: HTMLElement = this.createElement(
      'button',
      'btn btn-warning',
      { type: 'button', 'data-bs-dismiss': 'modal' },
      'BUY NOW'
    );

    this.element.appendChild(modal);
    modal.appendChild(modalContent);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalHeader.appendChild(modalHeaderName);
    modalHeader.appendChild(modalHeaderButtonClose);
    modalBody.appendChild(modalForm);
    modalForm.appendChild(modalFormName);
    modalFormName.appendChild(modalFormNameInput);
    modalFormName.appendChild(modalFormNameLabel);
    modalForm.appendChild(modalFormPhone);
    modalFormPhone.appendChild(modalFormPhoneInput);
    modalFormPhone.appendChild(modalFormPhoneLabel);
    modalForm.appendChild(modalFormAddress);
    modalFormAddress.appendChild(modalFormAddressInput);
    modalFormAddress.appendChild(modalFormAddressLabel);
    modalForm.appendChild(modalFormEmail);
    modalFormEmail.appendChild(modalFormEmailInput);
    modalFormEmail.appendChild(modalFormEmailLabel);
    modalForm.appendChild(modalFormCreditCard);
    modalFormCreditCard.appendChild(modalFormCreditCardNumber);
    modalFormCreditCardNumber.appendChild(modalFormCreditCardNumberInput);
    modalFormCreditCardNumber.appendChild(modalFormCreditCardNumberLabel);
    modalFormCreditCard.appendChild(modalFormCreditCardDC);
    modalFormCreditCardDC.appendChild(modalFormCreditCardDate);
    modalFormCreditCardDate.appendChild(modalFormCreditCardDateInput);
    modalFormCreditCardDate.appendChild(modalFormCreditCardDateLabel);
    modalFormCreditCardDC.appendChild(modalFormCreditCardCVV);
    modalFormCreditCardCVV.appendChild(modalFormCreditCardCVVInput);
    modalFormCreditCardCVV.appendChild(modalFormCreditCardCVVLabel);
    modalForm.appendChild(modalFooter);
    modalFooter.appendChild(modalFooterCloseButton);
    modalFooter.appendChild(modalFooterBuyButton);

    // data.products.forEach((item) => {
    //   let inCart = 0;
    //   cart.forEach((e) => {
    //     if (e.id === item.id) inCart = e.count;
    //   });
    //   const wrapper: HTMLElement = this.createElement('div', 'products-block__item');
    //   // productsItems.appendChild(wrapper);
    //   wrapper.appendChild(new ProductCard(item, inCart).drawGridView());
    // });

    return this.element;
  }
}

export default modalBuyNow;
