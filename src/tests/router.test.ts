import Router from '../components/router/router';

const router = new Router();

describe('Take query string and retern array with params', () => {
  const params0 = '';
  const result0 = {};

  const params1 = 'category=laptops&price=1564%251749';
  const result1 = {
    category: 'laptops',
    price: '1564%1749',
  };

  const params2 = 'search=wat&brand=Strap+Skeleton&brand=Stainless';
  const result2 = {
    search: 'wat',
    brand: 'Strap Skeleton%Stainless',
  };

  it('should return empty object', () => {
    expect(router.getQueryParams(params0)).toEqual(result0);
  });
  it('should return correct object', () => {
    expect(router.getQueryParams(params1)).toEqual(result1);
  });
  it('should split words in one parameter ande join same parameters in one value', () => {
    expect(router.getQueryParams(params2)).toEqual(result2);
  });
});
