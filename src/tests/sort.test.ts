import ProductsBlock from '../components/view/main-page/products-block/productsBlock';
const data = require('./mocData');

const productsBlock = new ProductsBlock();

describe('Take products data and query string, return sorted data', () => {
  it('should return data in same order', () => {
    expect(productsBlock.sortData(data.products, {})).toEqual(data.products);
  });
  it('should return data in same order', () => {
    expect(productsBlock.sortData(data.products, { sort: 'price-asc' })).toEqual(data.products);
  });
  it('should return data in reverse order', () => {
    expect(productsBlock.sortData(data.products, { sort: 'price-desc' })).toEqual(data.products.reverse());
  });
});
