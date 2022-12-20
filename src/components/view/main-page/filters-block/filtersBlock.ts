import DomElement from '../../domElement';

class FiltersBlock {
  public draw(): HTMLElement {
    const filtersBlock: HTMLElement = new DomElement('div', 'filters-block col-3').create();

    filtersBlock.innerHTML = `
      <div class="row mb-2">
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
      <div class="d-grid gap-2 d-md-block mb-3">
      </div>
      <div class="filters__price mb-4">
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
      <div class="filters__category mb-4">
        <h5>Category</h5>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="smartphones">
          <label class="form-check-label" for="smartphones">Smartphones</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="laptops">
          <label class="form-check-label" for="laptops">Laptops</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="furniture">
          <label class="form-check-label" for="furniture">Furniture</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="groceries">
          <label class="form-check-label" for="groceries">Groceries</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="womens-dresses"">
          <label class="form-check-label" for="womens-dresses"">Womens dresses"</label>
        </div>
      </div>
      <div class="filters__brand mb-4">
        <h5>Brand</h5>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="apple">
          <label class="form-check-label" for="apple">Apple</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="samsung">
          <label class="form-check-label" for="samsung">Samsung</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="huawei">
          <label class="form-check-label" for="huawei">Huawei</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="Ghazi-Fabric">
          <label class="form-check-label" for="Ghazi-Fabric">Ghazi Fabric</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="Sandals-Flip-Flops">
          <label class="form-check-label" for="Sandals-Flip-Flops">Sandals Flip Flops</label>
        </div>
      </div>
      <div class="filters__stock mb-3">
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
