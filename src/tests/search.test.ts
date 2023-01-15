import Filter from '../components/controller/filter';
const data = require('./mocData');

const filter = new Filter();

describe('Take products data and query string, checks if there are matches in any field of product', () => {
  it('should return Samsung Universe 9', () => {
    expect(filter.searchData(data, { search: 'galaxy', category: 'smartphones' })).toEqual(data.slice(2));
  });
  it('should return all data', () => {
    expect(filter.searchData(data, { search: '', category: 'smartphones' })).toEqual(data);
  });
  it('should return empty array', () => {
    expect(filter.searchData(data, { search: 'asdfpashdfaopsdjfasdofinamsdf', category: 'smartphones' })).toEqual([]);
  });
});
