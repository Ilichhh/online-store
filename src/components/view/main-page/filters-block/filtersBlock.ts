import DomElement from '../../domElement';
import type { ProductsData, QueryParams } from '../../../../types/types';

class FiltersBlock extends DomElement {
  element: HTMLElement;
  resetBtn: HTMLButtonElement;
  copyLInkBtn: HTMLButtonElement;
  categoryFilter: HTMLElement;
  brandFilter: HTMLElement;

  constructor() {
    super();
    this.element = this.createElement('div', 'filters-block col-3');
    this.resetBtn = <HTMLButtonElement>(
      this.createElement('button', 'filters-block__reset-btn btn btn-secondary btn-sm')
    );
    this.copyLInkBtn = <HTMLButtonElement>(
      this.createElement('button', 'filters-block__copy-link-btn btn btn-outline-secondary btn-sm')
    );
    this.categoryFilter = this.createElement('div', 'filters-block__category-items');
    this.brandFilter = this.createElement('div', 'filters-block__brand-items mb-4');
  }

  public draw(data: ProductsData, params: QueryParams): HTMLElement {
    this.element.innerHTML = '';
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
    this.element.appendChild(buttonsWrapper);

    // Draw Category
    const categoryWrapper = this.createElement('div', 'filters-block__category mb-4');
    const categoryHeader = this.createElement('h5', 'filters-block__category-header', {}, 'Category');

    this.element.appendChild(categoryWrapper);
    categoryWrapper.appendChild(categoryHeader);
    categoryWrapper.appendChild(this.categoryFilter);

    this.drawCheckBoxFilter(categoriesData, this.categoryFilter, params);

    // Draw Brand
    // const brandWrapper = this.createElement('div', 'filters-block__brand mb-4');
    // const brandHeader = this.createElement('h5', 'filters-block__brand-header', undefined, 'Brand');

    // this.element.appendChild(brandWrapper);
    // brandWrapper.appendChild(brandHeader);
    // brandWrapper.appendChild(this.brandFilter);

    // this.drawCheckBoxFilter(brandsData, this.brandFilter, params);

    // Draw Price
    // this.element.innerHTML += `
    //   <div class="filters-block__price mb-4">
    //     <h5>Price</h5>
    //     <input type="range" class="form-range mb-2" id="price" value="0">
    //     <div class="row mb-2">
    //       <div class="col">
    //         <input type="text" class="form-control" placeholder="from: 0" aria-label="from">
    //       </div>
    //       <div class="col">
    //         <input type="text" class="form-control" placeholder="to: 999" aria-label="to">
    //       </div>
    //     </div>
    //   </div>
    // `;

    // Draw Stock
    // this.element.innerHTML += `
    //   <div class="filters-block__stock mb-3">
    //     <h5>Stock</h5>
    //     <input type="range" class="form-range mb-2" id="stock" value="0">
    //     <div class="row mb-2">
    //       <div class="col">
    //         <input type="text" class="form-control" placeholder="from: 0" aria-label="from">
    //       </div>
    //       <div class="col">
    //         <input type="text" class="form-control" placeholder="to: 999" aria-label="to">
    //       </div>
    //     </div>
    //   </div>
    // `;

    return this.element;
  }

  private drawCheckBoxFilter(data: string[], filter: HTMLElement, params: QueryParams): void {
    filter.innerHTML = '';
    const checkedArr: string[] = params.category?.split('%');

    data.forEach((item) => {
      const wrapper = this.createElement('div', 'form-check');
      const input: HTMLInputElement = <HTMLInputElement>(
        this.createElement('input', 'form-check-input', { type: 'checkbox', value: item, id: item })
      );
      const label = this.createElement('label', 'form-check-label', { for: item }, item);

      if (checkedArr && checkedArr.includes(item)) {
        input.checked = true;
      }

      wrapper.appendChild(input);
      wrapper.appendChild(label);
      filter.appendChild(wrapper);
    });
  }
}

export default FiltersBlock;
