import type { ProductsData, Product, QueryParams } from '../../types/types';

class Filter {
  public filterData(data: ProductsData, params: QueryParams): Product[] {
    const lowestPrice: number = data.products.reduce((p, c) => (c.price < p.price ? c : p), data.products[0]).price;
    const highestPrice: number = data.products.reduce((p, c) => (c.price > p.price ? c : p), data.products[0]).price;
    const lowestStock: number = data.products.reduce((p, c) => (c.stock < p.stock ? c : p), data.products[0]).stock;
    const highestStock: number = data.products.reduce((p, c) => (c.stock > p.stock ? c : p), data.products[0]).stock;

    let allCategories: string[] = data.products.map((e) => e.category);
    allCategories = [...new Set(allCategories)];
    let allBrands: string[] = data.products.map((e) => e.brand);
    allBrands = [...new Set(allBrands)];

    const categoryArr: string[] = params.category?.split('%') || [];
    const brandArr: string[] = params.brand?.split('%') || [];
    const priceRange: number[] = params.price?.split('%').map((i) => +i) || [lowestPrice, highestPrice];
    const stockRange: number[] = params.stock?.split('%').map((i) => +i) || [lowestStock, highestStock];

    let filteredByCategory: Product[] = data.products.filter((item) => categoryArr.includes(item.category));
    const wrongCategories = categoryArr.filter((item) => !allCategories.includes(item));
    if (!filteredByCategory.length && !categoryArr.length) filteredByCategory = data.products;

    let filteredByBrand: Product[] = data.products.filter((item) => brandArr.includes(item.brand));
    const wrongBrands = brandArr.filter((item) => !allBrands.includes(item));
    if (!filteredByBrand.length && !brandArr.length) filteredByBrand = data.products;

    const filteredByPrice: Product[] = data.products.filter((item) => {
      return item.price >= priceRange[0] && item.price <= priceRange[1];
    });
    const filteredByStock: Product[] = data.products.filter((item) => {
      return item.stock >= stockRange[0] && item.stock <= stockRange[1];
    });

    let filteredData: Product[] = filteredByCategory
      .filter((brand) => filteredByBrand.includes(brand))
      .filter((price) => filteredByPrice.includes(price))
      .filter((stock) => filteredByStock.includes(stock));

    if (wrongCategories.length || wrongBrands.length) filteredData = [];

    return this.searchData(filteredData, params);
  }

  public searchData(filteredData: Product[], params: QueryParams): Product[] {
    console.log(params);
    const searchInput: string = params.search;

    if (searchInput) {
      filteredData = filteredData.filter((item) => {
        const isInTitle: boolean = item.title.toLowerCase().includes(searchInput);
        const isInDescription: boolean = item.description.toLowerCase().includes(searchInput);
        const isInBrand: boolean = item.brand.toLowerCase().includes(searchInput);
        const isInCategory: boolean = item.category.includes(searchInput);
        return isInTitle || isInDescription || isInDescription || isInBrand || isInCategory;
      });
    }

    return filteredData;
  }
}

export default Filter;
