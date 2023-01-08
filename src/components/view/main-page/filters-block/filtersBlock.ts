import DomElement from '../../domElement';
import * as noUiSlider from 'nouislider';
import Filter from '../../../controller/filter';
import type { ProductsData, QueryParams } from '../../../../types/types';

class FiltersBlock extends DomElement {
  filter: Filter;
  element: HTMLElement;
  resetBtn: HTMLButtonElement;
  copyLInkBtn: HTMLButtonElement;
  priceFilter: noUiSlider.target;
  categoryFilter: HTMLElement;
  brandFilter: HTMLElement;
  stockFilter: noUiSlider.target;

  constructor() {
    super();
    this.filter = new Filter();
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

    this.drawCheckboxFilter(data, this.categoryFilter, 'category', params);

    // Draw Brand
    const brandWrapper = this.createElement('div', 'filters-block__brand mb-4');
    const brandHeader = this.createElement('h5', 'filters-block__brand-header', {}, 'Brand');

    this.element.appendChild(brandWrapper);
    brandWrapper.appendChild(brandHeader);
    brandWrapper.appendChild(this.brandFilter);

    this.drawCheckboxFilter(data, this.brandFilter, 'brand', params);

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

  private drawCheckboxFilter(
    data: ProductsData,
    filterElement: HTMLElement,
    filter: 'category' | 'brand',
    params: QueryParams
  ): void {
    filterElement.innerHTML = '';

    let allFiltersArr = data.products.map((e) => e[filter]);
    allFiltersArr = [...new Set(allFiltersArr)];
    const checkedArr: string[] = params[filter]?.split('%');
    const filteredData = this.filter.filterData(data, params);

    allFiltersArr.forEach((item) => {
      const wrapper = this.createElement('div', 'checkbox-filter d-flex form-check');
      const input: HTMLInputElement = <HTMLInputElement>(
        this.createElement('input', 'checkbox-filter__cb form-check-input', { type: 'checkbox', value: item, id: item })
      );
      const label = this.createElement('label', 'form-check-label', { for: item }, item);

      const foundItems = filteredData.filter((e) => e[filter] === item).length;
      const totalItems = data.products.filter((e) => e[filter] === item).length;

      const countItemsElement = this.createElement('span', 'checkbox-filter__count flex-fill', {});
      countItemsElement.textContent = `${foundItems}/${totalItems}`;

      if (checkedArr && checkedArr.includes(item)) {
        input.checked = true;
      }

      if (foundItems) {
        label.classList.remove('text-muted');
        countItemsElement.classList.remove('text-muted');
      } else {
        label.classList.add('text-muted');
        countItemsElement.classList.add('text-muted');
      }

      wrapper.appendChild(input);
      wrapper.appendChild(label);
      wrapper.appendChild(countItemsElement);
      filterElement.appendChild(wrapper);
    });
  }
}

export default FiltersBlock;
