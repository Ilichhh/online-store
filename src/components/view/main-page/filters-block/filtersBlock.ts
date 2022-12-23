import DomElement from '../../domElement';
import type { ProductsData } from '../../../../types/types';

class FiltersBlock extends DomElement {
  public draw(data: ProductsData): HTMLElement {
    let categories: string[] = [];
    let brands: string[] = [];

    data.products.forEach((e) => {
      categories.push(e.category);
      brands.push(e.brand);
    });

    categories = [...new Set(categories)];
    brands = [...new Set(brands)];

    const filtersBlock: HTMLElement = this.createElement('div', 'filters-block col-3');

    const categoriesBlock = categories.map((category) => {
      return `
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="${category}">
          <label class="form-check-label" for="${category}">${category}</label>
        </div>
      `;
    });

    const brandsBlock = brands.map((brand) => {
      return `
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="${brand}">
          <label class="form-check-label" for="${brand}">${brand}</label>
        </div>
      `;
    });

    filtersBlock.innerHTML = `
      <div class="filters-block__buttons row mb-3">
        <div class="col">
          <div class="d-grid gap-2">
            <button type="button" class="btn btn-secondary btn-sm" disabled>Reset filters</button>
          </div>
        </div>
        <div class="col">
          <div class="d-grid gap-2">
            <button type="button" class="btn btn-outline-secondary btn-sm" disabled>Copy link</button>
          </div>
        </div>
      </div>
      <div class="filters-block__price mb-4">
        <h5>Price</h5>
        <input type="range" class="form-range mb-2" id="price" value="0">
        <div class="row mb-2">
          <div class="col">
            <input type="text" class="form-control" placeholder="from: 0" aria-label="from">
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="to: 999" aria-label="to">
          </div>
        </div>
      </div>
      <div class="filters-block__category mb-4">
        <h5 class="filters-block__category-header">Category</h5>
        <div class="filters-block__category-items">
          ${categoriesBlock.join('')}
        </div>
      </div>
      <div class="filters-block__brand mb-4">
        <h5 class="filters-block__brand-header">Brand</h5>
        <div class="filters-block__brand-items">
          ${brandsBlock.join('')}
        </div>
      </div>
      <div class="filters-block__stock mb-3">
        <h5>Stock</h5>
        <input type="range" class="form-range mb-2" id="stock" value="0">
        <div class="row mb-2">
          <div class="col">
            <input type="text" class="form-control" placeholder="from: 0" aria-label="from">
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="to: 999" aria-label="to">
          </div>
        </div>
      </div>
    `;

    return filtersBlock;
  }
}

export default FiltersBlock;
