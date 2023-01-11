import DomElement from '../../domElement';

class modalBuyNow extends DomElement {
  element: HTMLElement;
  cardSource: string;
  submitButton: HTMLElement;
  closeButton: HTMLElement;
  isValid: boolean;

  constructor() {
    super();
    this.cardSource = 'https://toplogos.ru/images/thumbs/preview-logo-visa.png';
    this.element = this.createElement('div', 'modal fade', {
      id: 'staticBackdrop',
      'data-bs-backdrop': 'static',
      'data-bs-keyboard': 'false',
      tabindex: '-1',
      'aria-labelledby': 'staticBackdropLabel',
      'aria-hidden': 'true',
    });
    this.submitButton = this.createElement('button', 'btn btn-warning', { type: 'submit' }, 'BUY NOW');
    this.closeButton = this.createElement(
      'button',
      'btn btn-secondary',
      {
        type: 'button',
        'data-bs-dismiss': 'modal',
      },
      'Close'
    );
    this.isValid = false;
  }

  public changeCardImage(cardSource: string): void {
    this.cardSource = cardSource;
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
    const modalNameInValid: HTMLElement = this.createElement('div', 'text-danger', undefined, '');
    const modalFormNameLabel: HTMLElement = this.createElement('label', '', { for: 'name-input' }, 'Name');

    const modalFormPhone: HTMLElement = this.createElement('div', 'form-floating mb-3 w-100');
    const modalFormPhoneInput: HTMLElement = this.createElement('input', 'field form-control', {
      type: 'tel',
      minlength: '10',
      id: 'phone-number-input',
      placeholder: 'Phone number',
    });
    const modalPhoneInValid: HTMLElement = this.createElement('div', 'text-danger', undefined, '');
    const modalFormPhoneLabel: HTMLElement = this.createElement(
      'label',
      '',
      { for: 'phone-number-input' },
      'Phone number'
    );

    const modalFormAddress: HTMLElement = this.createElement('div', 'form-floating mb-3 w-100');
    const modalFormAddressInput: HTMLElement = this.createElement('input', 'field form-control', {
      type: 'text',
      id: 'address-input',
      placeholder: 'Delivery address',
    });
    const modalAddressInValid: HTMLElement = this.createElement('div', 'text-danger', undefined, '');
    const modalFormAddressLabel: HTMLElement = this.createElement(
      'label',
      '',
      { for: 'address-input' },
      'Delivery address'
    );

    const modalFormEmail: HTMLElement = this.createElement('div', 'form-floating mb-3 w-100');
    const modalFormEmailInput: HTMLElement = this.createElement('input', 'field form-control', {
      type: 'text',
      id: 'email-input',
      placeholder: 'name@example.com',
    });
    const modalEmailInValid: HTMLElement = this.createElement('div', 'text-danger', undefined, '');
    const modalFormEmailLabel: HTMLElement = this.createElement('label', '', { for: 'email-input' }, 'Email address');

    const modalFormCreditCard: HTMLElement = this.createElement(
      'div',
      'card-bock p-3 border border-start p-2 rounded-4 mb-2'
    );

    const modalFormCreditCardNumber: HTMLElement = this.createElement('div', 'form-floating mb-3 me-2');
    const modalFormCreditCardNumberInput: HTMLElement = this.createElement('input', 'field form-control', {
      type: 'number',
      id: 'card-number-input',
      placeholder: 'Credit card number',
    });

    const modalCardNumberInValid: HTMLElement = this.createElement('div', 'text-danger', undefined, '');
    const modalFormCreditCardNumberLabel: HTMLElement = this.createElement(
      'label',
      '',
      { for: 'card-number-input' },
      'Credit card number'
    );
    const modalCardNumberImg: HTMLElement = this.createElement('img', 'w-25 d-none', {
      alt: 'card image',
      width: '50',
      src: `${this.cardSource}`,
    });

    const modalFormCreditCardDC: HTMLElement = this.createElement('div', 'd-flex');

    const modalFormCreditCardDate: HTMLElement = this.createElement('div', 'form-floating mb-3 me-2');
    const modalFormCreditCardDateInput: HTMLElement = this.createElement('input', 'field form-control', {
      type: 'text',
      id: 'date-input',
      placeholder: 'Data',
    });
    const modalCardDateInValid: HTMLElement = this.createElement('div', 'text-danger', undefined, '');
    const modalFormCreditCardDateLabel: HTMLElement = this.createElement('label', '', { for: 'date-input' }, 'Data');

    const modalFormCreditCardCVV: HTMLElement = this.createElement('div', 'form-floating mb-3');
    const modalFormCreditCardCVVInput: HTMLElement = this.createElement('input', 'field form-control', {
      type: 'number',
      min: '0',
      maxlength: '999',
      id: 'code-input',
      placeholder: 'Code',
    });
    const modalCardCVVInValid: HTMLElement = this.createElement('div', 'text-danger', undefined, '');
    const modalFormCreditCardCVVLabel: HTMLElement = this.createElement('label', '', { for: 'code-input' }, 'CVV');

    document.addEventListener('changeCardImage', () => {
      this.changeCardImage(this.cardSource);
      modalCardNumberImg.setAttribute('src', `${this.cardSource}`);
    });

    const modalFooter: HTMLElement = this.createElement('div', 'modal-footer');

    modalFormCreditCardNumberInput.addEventListener('input', (e: Event) => {
      const currentText = (<HTMLInputElement>e.target).value;
      if (currentText[0] === '5') {
        this.cardSource = 'https://toplogos.ru/images/thumbs/preview-logo-mastercard.png';
        modalCardNumberImg.classList.remove('d-none');
        e.target?.dispatchEvent(new CustomEvent('changeCardImage', { bubbles: true }));
      } else if (currentText[0] === '4') {
        this.cardSource = 'https://toplogos.ru/images/thumbs/preview-logo-visa.png';
        modalCardNumberImg.classList.remove('d-none');
        e.target?.dispatchEvent(new CustomEvent('changeCardImage', { bubbles: true }));
      } else if (currentText[0] === '3') {
        this.cardSource = 'https://toplogos.ru/images/thumbs/preview-logo-maestro.png';
        modalCardNumberImg.classList.remove('d-none');
        e.target?.dispatchEvent(new CustomEvent('changeCardImage', { bubbles: true }));
      } else if (currentText[0] === '2') {
        this.cardSource = 'https://toplogos.ru/images/thumbs/preview-logo-mir.png';
        modalCardNumberImg.classList.remove('d-none');
        e.target?.dispatchEvent(new CustomEvent('changeCardImage', { bubbles: true }));
      } else {
        modalCardNumberImg.classList.add('d-none');
      }
      if (currentText.length <= 16) {
        return true;
      } else {
        let str = currentText;
        str = str.substring(0, str.length - 1);
        (<HTMLInputElement>e.target).value = str;
      }
    });

    modalFormCreditCardDateInput.addEventListener('input', () => {
      const validDate = <HTMLInputElement>modalFormCreditCardDateInput;
      if (validDate.value.length === 2 && Number(validDate.value) <= 12) {
        validDate.value += '/';
      } else if (validDate.value.length >= 2 && Number(validDate.value.slice(0, 2)) > 12) {
        validDate.value = validDate.value.slice(0, 2);
      } else if (validDate.value.length > 5) {
        validDate.value = validDate.value.slice(0, 5);
      }
    });

    modalForm.addEventListener('submit', function (e: Event) {
      validateForm(e);
      e.preventDefault();
    });

    modalFormCreditCardCVVInput.addEventListener('input', function (e: Event) {
      const currentNum = (<HTMLInputElement>e.target).value;
      if (currentNum.length <= 3) {
        return true;
      } else {
        let str = currentNum;
        str = str.substring(0, str.length - 1);
        (<HTMLInputElement>e.target).value = str;
      }
    });

    function printError(elemId: HTMLElement, hintMsg: string) {
      elemId.textContent = hintMsg;
    }

    const validateForm = (e: Event) => {
      let nameErr = true;
      let phoneErr = true;
      let addressErr = true;
      let emailErr = true;
      let cardNumErr = true;
      let cardDatErr = true;
      let cardCvvErr = true;

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
        const regex = /^\+[1-9]\d{9,}$/;
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
        const regex = /^([a-zA-Z]{5,}\s[a-zA-Z]{5,}\s[a-zA-Z]{5,}([a-zA-Z]{5,})?)/;
        if (regex.test((<HTMLInputElement>modalFormAddressInput).value) === false) {
          printError(modalAddressInValid, '3 words, space');
        } else {
          printError(modalAddressInValid, '');
          addressErr = false;
        }
      }

      if ((<HTMLInputElement>modalFormEmailInput).value === '') {
        printError(modalEmailInValid, 'Please, enter email address');
      } else {
        const regex = /^\S+@\S+\.\S+$/;
        if (regex.test((<HTMLInputElement>modalFormEmailInput).value) === false) {
          printError(modalEmailInValid, 'Please, enter a valid email address');
        } else {
          printError(modalEmailInValid, '');
          emailErr = false;
        }
      }

      if ((<HTMLInputElement>modalFormCreditCardNumberInput).value === '') {
        printError(modalCardNumberInValid, 'Please, enter card number');
      } else {
        const regex = /^[0-9]{16}$/;
        if (regex.test((<HTMLInputElement>modalFormCreditCardNumberInput).value) === false) {
          printError(modalCardNumberInValid, 'Please, enter a valid 16-digit card number');
        } else {
          printError(modalCardNumberInValid, '');
          cardNumErr = false;
        }
      }

      if ((<HTMLInputElement>modalFormCreditCardDateInput).value == '') {
        printError(modalCardDateInValid, 'Please, enter card date');
      } else {
        const regex = /^([0-9]{2}\/[0-9]{2})/;
        if (regex.test((<HTMLInputElement>modalFormCreditCardDateInput).value) === false) {
          printError(modalCardDateInValid, 'Enter valid date: MM/YY');
        } else {
          printError(modalCardDateInValid, '');
          cardDatErr = false;
        }
      }

      if ((<HTMLInputElement>modalFormCreditCardCVVInput).value == '') {
        printError(modalCardCVVInValid, 'Please, enter CVV');
      } else {
        printError(modalCardCVVInValid, '');
        cardCvvErr = false;
      }

      if ((nameErr || phoneErr || addressErr || emailErr || cardNumErr || cardDatErr || cardCvvErr) === true) {
        return false;
      } else {
        localStorage.setItem('cart', JSON.stringify([]));
        e.target?.dispatchEvent(new CustomEvent('recalculatePrice', { bubbles: true }));
        this.isValid = true;
      }
    };

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
    modalFormCreditCardNumber.appendChild(modalCardNumberImg);
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
    modalFooter.appendChild(this.closeButton);
    modalFooter.appendChild(this.submitButton);

    return this.element;
  }
}

export default modalBuyNow;
