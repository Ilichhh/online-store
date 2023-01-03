import DomElement from '../../domElement';
import type { ProductsData } from '../../../../types/types';

class FiltersBlock extends DomElement {
  resetBtn: HTMLElement;
  copyLInkBtn: HTMLElement;
  categoryFilter: HTMLElement;
  brandFilter: HTMLElement;

  constructor() {
    super();
    this.resetBtn = this.createElement('button', 'filters-block__reset-btn btn btn-secondary btn-sm');
    this.copyLInkBtn = this.createElement('button', 'filters-block__copy-link-btn btn btn-outline-secondary btn-sm');
    this.categoryFilter = this.createElement('div', 'filters-block__category-items');
    this.brandFilter = this.createElement('div', 'filters-block__brand-items mb-4');
  }

  public draw(data: ProductsData): HTMLElement {
    const filtersBlock: HTMLElement = this.createElement('div', 'filters-block col-3');

    // Create categories and brands arrays
    let categoriesData: string[] = [];
    let brandsData: string[] = [];

    data.products.forEach((e) => {
      categoriesData.push(e.category);
      brandsData.push(e.brand);
    });

    categoriesData = [...new Set(categoriesData)];
    brandsData = [...new Set(brandsData)];

    // Draw buttons
    const buttonsWrapper = this.createElement('div', 'filters-block__buttons row mb-3');
    const buttonColRes = this.createElement('div', 'col');
    const buttonGridRes = this.createElement('div', 'd-grid gap-2');
    const buttonColCopy = this.createElement('div', 'col');
    const buttonGridCopy = this.createElement('div', 'd-grid gap-2');

    this.resetBtn.textContent = 'Reset filters';
    this.copyLInkBtn.textContent = 'Copy link';

    buttonsWrapper.appendChild(buttonColRes);
    buttonsWrapper.appendChild(buttonColCopy);
    buttonColRes.appendChild(buttonGridRes);
    buttonColCopy.appendChild(buttonGridCopy);
    buttonGridRes.appendChild(this.resetBtn);
    buttonGridCopy.appendChild(this.copyLInkBtn);
    filtersBlock.appendChild(buttonsWrapper);

    // Draw Category
    const categoryWrapper = this.createElement('div', 'filters-block__category mb-4');
    const categoryHeader = this.createElement('h5', 'filters-block__category-header', undefined, 'Category');

    filtersBlock.appendChild(categoryWrapper);
    categoryWrapper.appendChild(categoryHeader);
    categoryWrapper.appendChild(this.categoryFilter);

    this.drawCheckBoxFilter(categoriesData, this.categoryFilter);

    // Draw Brand
    const brandWrapper = this.createElement('div', 'filters-block__brand mb-4');
    const brandHeader = this.createElement('h5', 'filters-block__brand-header', undefined, 'Brand');

    filtersBlock.appendChild(brandWrapper);
    brandWrapper.appendChild(brandHeader);
    brandWrapper.appendChild(this.brandFilter);

    this.drawCheckBoxFilter(brandsData, this.brandFilter);

    // Draw Price
    filtersBlock.innerHTML += `
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
    `;

    // Draw Stock
    filtersBlock.innerHTML += `
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

  private drawCheckBoxFilter(data: string[], filter: HTMLElement): void {
    data.forEach((item) => {
      const wrapper = this.createElement('div', 'form-check');
      const input = this.createElement('input', 'form-check-input', { type: 'checkbox', value: item, id: item });
      const label = this.createElement('label', 'form-check-label', { for: item }, item);
      wrapper.appendChild(input);
      wrapper.appendChild(label);
      filter.appendChild(wrapper);
    });
  }
}

export default FiltersBlock;
