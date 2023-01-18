import summaryCartBlock from '../components/view/cart-page/summary-cart-block/summaryCartBlock';

const summary = new summaryCartBlock();

describe('in the function of recalculation of the total cost', () => {
  it('there is a total price', () => {
    expect(summary.countPrice).toBeDefined();
  });
  it('there is a total number of goods', () => {
    expect(summary.countProduct).toBeDefined();
  });
  it('there is a promo', () => {
    expect(summary.promo).toBeDefined();
  });
});
