import DomElement from '../../domElement';
import * as noUiSlider from 'nouislider';
import type { ProductsData, QueryParams } from '../../../../types/types';

class FiltersBlock extends DomElement {
  element: HTMLElement;
  resetBtn: HTMLButtonElement;
  copyLInkBtn: HTMLButtonElement;
  priceFilter: noUiSlider.target;
  categoryFilter: HTMLElement;
  brandFilter: HTMLElement;
  stockFilter: noUiSlider.target;

  constructor() {
    super();
    this.element = this.createElement('div', 'filters-block col-3');
    this.resetBtn = <HTMLButtonElement>(
      this.createElement('button', 'filters-block__reset-btn btn btn-secondary btn-sm')
    );
    this.copyLInkBtn = <HTMLButtonElement>(
      this.createElement('button', 'filters-block__copy-link-btn btn btn-outline-secondary btn-sm')
    );
    this.priceFilter = <noUiSlider.target>this.createElement('div', 'filters-block__price-range mb-4');
    this.categoryFilter = this.createElement('div', 'filters-block__category-items');
    this.brandFilter = this.createElement('div', 'filters-block__brand-items mb-4');
    this.stockFilter = <noUiSlider.target>this.createElement('div', 'filters-block__stock-range mb-4');
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

    // Draw Price
    const priceWrapper = this.createElement('div', 'filters-block__price mb-4');
    const priceHeader = this.createElement('h5', 'filters-block__price-header mb-5', {}, 'Price');

    this.element.appendChild(priceWrapper);
    priceWrapper.appendChild(priceHeader);
    priceWrapper.appendChild(this.priceFilter);

    this.drawRangeFilter(data, this.priceFilter, 'price', params);

    // Draw Category
    const categoryWrapper = this.createElement('div', 'filters-block__category mb-4');
    const categoryHeader = this.createElement('h5', 'filters-block__category-header', {}, 'Category');

    this.element.appendChild(categoryWrapper);
    categoryWrapper.appendChild(categoryHeader);
    categoryWrapper.appendChild(this.categoryFilter);

    this.drawCheckboxFilter(categoriesData, this.categoryFilter, 'category', params);

    // Draw Brand
    const brandWrapper = this.createElement('div', 'filters-block__brand mb-4');
    const brandHeader = this.createElement('h5', 'filters-block__brand-header', {}, 'Brand');

    this.element.appendChild(brandWrapper);
    brandWrapper.appendChild(brandHeader);
    brandWrapper.appendChild(this.brandFilter);

    this.drawCheckboxFilter(brandsData, this.brandFilter, 'brand', params);

    // Draw Stock
    const stockWrapper = this.createElement('div', 'filters-block__stock mb-4');
    const stockHeader = this.createElement('h5', 'filters-block__stock-header mb-5', {}, 'Stock');

    this.element.appendChild(stockWrapper);
    stockWrapper.appendChild(stockHeader);
    stockWrapper.appendChild(this.stockFilter);

    this.drawRangeFilter(data, this.stockFilter, 'stock', params);

    return this.element;
  }

  private drawRangeFilter(
    data: ProductsData,
    filterElement: noUiSlider.target,
    filter: 'price' | 'stock',
    params: QueryParams
  ) {
    const lowestData: number = data.products.reduce((pr, cu) => (cu[filter] < pr[filter] ? cu : pr), data.products[0])[
      filter
    ];
    const highestData: number = data.products.reduce((pr, cu) => (cu[filter] > pr[filter] ? cu : pr), data.products[0])[
      filter
    ];
    const dataRange = params[filter]?.split('%') || [lowestData, highestData];
    const min: number = +dataRange[0];
    const max: number = +dataRange[1];

    try {
      noUiSlider.create(filterElement, {
        start: [min, max],
        tooltips: true,
        connect: true,
        range: {
          min: [lowestData],
          max: [highestData],
        },
      });
    } catch {
      filterElement.noUiSlider?.set([lowestData, highestData]);
    }
  }

  private drawCheckboxFilter(data: string[], filterElement: HTMLElement, filter: string, params: QueryParams): void {
    filterElement.innerHTML = '';
    const checkedArr: string[] = params[filter]?.split('%');

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
      filterElement.appendChild(wrapper);
    });
  }
}

export default FiltersBlock;
