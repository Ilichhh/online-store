import ProductCartBlock from "../components/view/cart-page/product-cart-block/productCartBlock";

const productCart = new ProductCartBlock();

describe('the productCartBlock class defines', () => {
  it('count of pages', () => {
    expect(productCart.pageCount).toBeDefined();
  });
  it('current page', () => {
    expect(productCart.currentPage).toBeDefined();
  });
  it('count of products per page', () => {
    expect(productCart.productInPage).toBeDefined();
  });
  it('products in cart count', () => {
    expect(productCart.productInCartCount).toBeDefined();
  });
  it('input page count', () => {
    expect(productCart.inputPageCount.textContent === productCart.pageCount.toString()).toEqual(true);
  });
  it('input arrow right', () => {
    expect(productCart.cartPageArrowRight).toBeDefined();
  });
});
