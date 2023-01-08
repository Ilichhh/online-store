import type { ProductsData, Product, QueryParams } from '../../types/types';

class Filter {
  public filterData(data: ProductsData, params: QueryParams): Product[] {
    const lowestPrice = data.products.reduce((pr, cu) => (cu.price < pr.price ? cu : pr), data.products[0]).price;
    const highestPrice = data.products.reduce((pr, cu) => (cu.price > pr.price ? cu : pr), data.products[0]).price;
    const lowestStock = data.products.reduce((pr, cu) => (cu.stock < pr.stock ? cu : pr), data.products[0]).stock;
    const highestStock = data.products.reduce((pr, cu) => (cu.stock > pr.stock ? cu : pr), data.products[0]).stock;

    const categoryArr: string[] = params.category?.split('%') || [];
    const brandArr: string[] = params.brand?.split('%') || [];
    const priceRange: number[] = params.price?.split('%').map((i) => +i) || [lowestPrice, highestPrice];
    const stockRange: number[] = params.stock?.split('%').map((i) => +i) || [lowestStock, highestStock];
    const searchInput: string = params.search;

    let filteredByCategory = data.products.filter((item) => categoryArr.includes(item.category));
    if (!filteredByCategory.length) filteredByCategory = data.products;
    let filteredByBrand = data.products.filter((item) => brandArr.includes(item.brand));
    if (!filteredByBrand.length) filteredByBrand = data.products;
    const filteredByPrice = data.products.filter((item) => {
      return item.price >= priceRange[0] && item.price <= priceRange[1];
    });
    const filteredByStock = data.products.filter((item) => {
      return item.stock >= stockRange[0] && item.stock <= stockRange[1];
    });

    let filteredData: Product[] = filteredByCategory
      .filter((brand) => filteredByBrand.includes(brand))
      .filter((price) => filteredByPrice.includes(price))
      .filter((stock) => filteredByStock.includes(stock));

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
