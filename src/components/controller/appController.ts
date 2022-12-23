import AppLoader from './appLoader';
import type { CallbackFunc } from './../../types/types';
import type { CartItem } from '../../types/types';

class AppController extends AppLoader {
  public getAllProducts<T>(callback: CallbackFunc<T>): void {
    super.getResp('products?limit=100', callback);
  }

  public getAllCategories<T>(callback: CallbackFunc<T>): void {
    super.getResp('products/categories', callback);
  }

  private addToCart(button: Element, cart: CartItem[]): void {
    button.classList.remove('btn-warning');
    button.classList.add('btn-danger');
    button.textContent = 'Remove from Cart';
    cart.push({ id: +button.id, count: 1 });
  }

  private removeFromCart(button: Element, cart: CartItem[]): void {
    button.classList.remove('btn-danger');
    button.classList.add('btn-warning');
    button.textContent = 'Add to Cart';
    let index = 0;
    cart.forEach((product, i) => (product.id === +button.id ? (index = i) : null));
    cart.splice(index, 1);
  }

  public toggleAddToCartButton(e: Event, cart: CartItem[]): void {
    const target: Element = <Element>e.target;
    if (target.classList.contains('product-card__add-to-cart-button')) {
      target.classList.contains('btn-warning') ? this.addToCart(target, cart) : this.removeFromCart(target, cart);
      localStorage.setItem('cart', JSON.stringify(cart));
      console.log(cart);
    }
  }
}

export default AppController;
