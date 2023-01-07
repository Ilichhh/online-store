import DomElement from '../../domElement';

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

  public draw(): HTMLElement {
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
      {
        id: 'staticBackdropLabel',
        pattern: '^\\S+ \\S+$',
      },
      'PERSONAL DETAILS'
    );
    const modalHeaderButtonClose: HTMLElement = this.createElement('button', 'btn-close', {
      'data-bs-dismiss': 'modal',
      'aria-label': 'Close',
    });

    const modalForm: HTMLElement = this.createElement(
      'form',
      'd-flex m-1 w-100 fs-5 flex-column align-items-start justify-content-start needs-validation'
    );

    const modalFormName: HTMLElement = this.createElement('div', 'form-floating mb-3 w-100');
    const modalFormNameInput: HTMLElement = this.createElement('input', 'field form-control', {
      type: 'text',
      id: 'name-input',
      placeholder: 'Name',
    });
    const modalNameValid: HTMLElement = this.createElement('div', 'd-none', undefined, 'Ok');
    const modalNameInValid: HTMLElement = this.createElement('div', '', undefined, '');
    const modalFormNameLabel: HTMLElement = this.createElement('label', '', { for: 'name-input' }, 'Name');

    const modalFormPhone: HTMLElement = this.createElement('div', 'form-floating mb-3 w-100');
    const modalFormPhoneInput: HTMLElement = this.createElement('input', 'field form-control', {
      type: 'tel',
      minlength: '10',
      // required: 'required',
      id: 'phone-number-input',
      placeholder: 'Phone number',
    });
    const modalPhoneInValid: HTMLElement = this.createElement('div', '', undefined, '');
    const modalFormPhoneLabel: HTMLElement = this.createElement(
      'label',
      '',
      { for: 'phone-number-input' },
      'Phone number'
    );

    const modalFormAddress: HTMLElement = this.createElement('div', 'form-floating mb-3 w-100');
    const modalFormAddressInput: HTMLElement = this.createElement('input', 'field form-control', {
      type: 'text',
      // required: 'required',
      id: 'address-input',
      placeholder: 'Delivery address',
    });
    const modalAddressInValid: HTMLElement = this.createElement('div', '', undefined, '');
    const modalFormAddressLabel: HTMLElement = this.createElement(
      'label',
      '',
      { for: 'address-input' },
      'Delivery address'
    );

    const modalFormEmail: HTMLElement = this.createElement('div', 'form-floating mb-3 w-100');
    const modalFormEmailInput: HTMLElement = this.createElement('input', 'field form-control', {
      type: 'email',
      // required: 'required',
      id: 'email-input',
      placeholder: 'name@example.com',
    });
    const modalEmailInValid: HTMLElement = this.createElement('div', '', undefined, '');
    const modalFormEmailLabel: HTMLElement = this.createElement('label', '', { for: 'email-input' }, 'Email address');

    const modalFormCreditCard: HTMLElement = this.createElement(
      'div',
      'card-bock p-3 border border-start p-2 rounded-4 mb-2'
    );

    const modalFormCreditCardNumber: HTMLElement = this.createElement('div', 'form-floating mb-3 me-2');
    const modalFormCreditCardNumberInput: HTMLElement = this.createElement('input', 'field form-control', {
      type: 'text',
      // required: 'required',
      id: 'card-number-input',
      placeholder: 'Credit card number',
    });
    const modalCardNumberInValid: HTMLElement = this.createElement('div', '', undefined, '');
    const modalFormCreditCardNumberLabel: HTMLElement = this.createElement(
      'label',
      '',
      { for: 'card-number-input' },
      'Credit card number'
    );

    const modalFormCreditCardDC: HTMLElement = this.createElement('div', 'd-flex');

    const modalFormCreditCardDate: HTMLElement = this.createElement('div', 'form-floating mb-3 me-2');
    const modalFormCreditCardDateInput: HTMLElement = this.createElement('input', 'field form-control', {
      type: 'text',
      // required: 'required',
      id: 'date-input',
      placeholder: 'Data',
    });
    const modalCardDateInValid: HTMLElement = this.createElement('div', '', undefined, '');
    const modalFormCreditCardDateLabel: HTMLElement = this.createElement('label', '', { for: 'date-input' }, 'Data');

    const modalFormCreditCardCVV: HTMLElement = this.createElement('div', 'form-floating mb-3');
    const modalFormCreditCardCVVInput: HTMLElement = this.createElement('input', 'field form-control', {
      type: 'text',
      // required: 'required',
      id: 'code-input',
      placeholder: 'Code',
    });
    const modalCardCVVInValid: HTMLElement = this.createElement('div', '', undefined, '');
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
      { type: 'submit' },
      'BUY NOW'
    );

    // modalFormNameInput.addEventListener('input', (e: Event) => {
    //   const currentText = (<HTMLInputElement>e.target).value;
    //   console.log(currentText);
    // });

    modalForm.addEventListener('submit', function (event: Event) {
      validateForm();
      event.preventDefault();
    });

    function printError(elemId: HTMLElement, hintMsg: string) {
      elemId.textContent = hintMsg;
    }

    function validateForm() {
      let nameErr = true;
      let phoneErr = true;
      let addressErr = true;
      let emailErr = true;
      const cardNumErr = true;
      const cardDatErr = true;
      const cardCvvErr = true;

      if ((<HTMLInputElement>modalFormNameInput).value == '') {
        printError(modalNameInValid, 'Please, enter your name');
      } else {
        const regex = /^([A-Z]{1}[a-z]{4,}\s[A-Z]{1}[a-z]{4,}([A-Z]{1}[a-z]{4,})?)/;
        if (regex.test((<HTMLInputElement>modalFormNameInput).value) === false) {
          printError(modalNameInValid, '2 words name, space, capital letters');
        } else {
          printError(modalNameInValid, '');
          nameErr = false;
        }
      }

      if ((<HTMLInputElement>modalFormPhoneInput).value === '') {
        printError(modalPhoneInValid, 'Please, enter your phone number');
      } else {
        const regex = /^\+[1-9]\d{9}$/;
        if (regex.test((<HTMLInputElement>modalFormPhoneInput).value) === false) {
          printError(modalPhoneInValid, 'Please, enter a valid 9-digit phone number starting with the + sign');
        } else {
          printError(modalPhoneInValid, '');
          phoneErr = false;
        }
      }

      if ((<HTMLInputElement>modalFormAddressInput).value == '') {
        printError(modalAddressInValid, 'Please, enter your address');
      } else {
        const regex = /^([a-zA-Z]{5,}\s[a-zA-Z]{5,}\s[a-zA-Z]{5,}\s([a-zA-Z]{5,})?)/;
        if (regex.test((<HTMLInputElement>modalFormAddressInput).value) === false) {
          printError(modalAddressInValid, '3 words name, space');
        } else {
          printError(modalAddressInValid, '');
          addressErr = false;
        }
      }

      if ((<HTMLInputElement>modalFormEmailInput).value === '') {
        printError(modalEmailInValid, 'Please, enter your email address');
      } else {
        const regex = /^\S+@\S+\.\S+$/;
        if (regex.test((<HTMLInputElement>modalFormEmailInput).value) === false) {
          printError(modalEmailInValid, 'Please, enter a valid email address');
        } else {
          printError(modalEmailInValid, '');
          emailErr = false;
        }
      }

      if ((nameErr || phoneErr || addressErr || emailErr || cardNumErr || cardDatErr || cardCvvErr) === true) {
        return false;
      } else {
        alert("It's ok");
      }
    }

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
    modalFormName.appendChild(modalNameValid);
    modalFormName.appendChild(modalNameInValid);
    modalForm.appendChild(modalFormPhone);
    modalFormPhone.appendChild(modalFormPhoneInput);
    modalFormPhone.appendChild(modalFormPhoneLabel);
    modalFormPhone.appendChild(modalPhoneInValid);
    modalForm.appendChild(modalFormAddress);
    modalFormAddress.appendChild(modalFormAddressInput);
    modalFormAddress.appendChild(modalFormAddressLabel);
    modalFormAddress.appendChild(modalAddressInValid);
    modalForm.appendChild(modalFormEmail);
    modalFormEmail.appendChild(modalFormEmailInput);
    modalFormEmail.appendChild(modalFormEmailLabel);
    modalFormEmail.appendChild(modalEmailInValid);
    modalForm.appendChild(modalFormCreditCard);
    modalFormCreditCard.appendChild(modalFormCreditCardNumber);
    modalFormCreditCardNumber.appendChild(modalFormCreditCardNumberInput);
    modalFormCreditCardNumber.appendChild(modalFormCreditCardNumberLabel);
    modalFormCreditCardNumber.appendChild(modalCardNumberInValid);
    modalFormCreditCard.appendChild(modalFormCreditCardDC);
    modalFormCreditCardDC.appendChild(modalFormCreditCardDate);
    modalFormCreditCardDate.appendChild(modalFormCreditCardDateInput);
    modalFormCreditCardDate.appendChild(modalFormCreditCardDateLabel);
    modalFormCreditCardDate.appendChild(modalCardDateInValid);
    modalFormCreditCardDC.appendChild(modalFormCreditCardCVV);
    modalFormCreditCardCVV.appendChild(modalFormCreditCardCVVInput);
    modalFormCreditCardCVV.appendChild(modalFormCreditCardCVVLabel);
    modalFormCreditCardCVV.appendChild(modalCardCVVInValid);
    modalForm.appendChild(modalFooter);
    modalFooter.appendChild(modalFooterCloseButton);
    modalFooter.appendChild(modalFooterBuyButton);

    return this.element;
  }
}

export default modalBuyNow;
