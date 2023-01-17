import Filter from '../components/controller/filter';
const data = require('./mocData');

const filter = new Filter();

describe('Take products data and query string, find relevant products', () => {
  it('should return two Iphones', () => {
    expect(filter.filterData(data, { brand: 'Apple' })).toEqual(data.products.slice(0, 2));
  });
  it('should return Samsung Universe 9', () => {
    expect(filter.filterData(data, { price: '1249%1500' })).toEqual(data.products.slice(2));
  });
  it('should return empty array', () => {
    expect(filter.filterData(data, { stock: '99999%9999999999' })).toEqual([]);
  });
});
