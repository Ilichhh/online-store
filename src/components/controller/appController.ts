import AppLoader from './appLoader';
import type { CallbackFunc } from './../../types/types';
import type { CartItem } from '../../types/types';

class AppController extends AppLoader {
  public getAllProducts<T>(callback: CallbackFunc<T>): void {
    super.getResp('products?limit=30', callback);
  }

  public getAllCategories<T>(callback: CallbackFunc<T>): void {
    super.getResp('products/categories', callback);
  }

  private addToCart(button: Element, cart: CartItem[]): void {
    button.textContent = 'Remove from Cart';
    cart.push({ id: +button.id, count: 1 });
  }

  private removeFromCart(button: Element, cart: CartItem[]): void {
    button.textContent = 'Add to Cart';
    cart.forEach((product, index) => (product.id === +button.id ? cart.splice(index, 1) : null));
  }

  public toggleAddToCartButton(e: Event, cart: CartItem[]): void {
    const button: Element = <Element>e.target;
    if (button.classList.contains('product-card__add-to-cart-button')) {
      button.classList.contains('btn-warning') ? this.addToCart(button, cart) : this.removeFromCart(button, cart);
      button.classList.toggle('btn-danger');
      button.classList.toggle('btn-warning');
      localStorage.setItem('cart', JSON.stringify(cart));
      console.log(cart);
    }
  }

  public changeCardView(e: Event): void {
    const button: HTMLButtonElement = <HTMLButtonElement>e.target;
    if (button.name === 'view-style') {
      console.log(button.closest('.btn-check')?.id);
      // block.(data: ProductsData, cart, button.closest('.btn-check')?.id);
    }
  }
}

export default AppController;
