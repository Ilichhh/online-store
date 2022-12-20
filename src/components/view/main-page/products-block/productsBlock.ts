import DomElement from '../../domElement';

class ProductsBlock {
  public draw(): HTMLElement {
    const productsBlock: HTMLElement = new DomElement('div', 'products-block col-9 mb-5').create();

    productsBlock.innerHTML = `
      <div class="product-display g-5 mb-4 d-flex justify-content-between">
        <div class="input-group-sm">
          <select class="form-select" id="inputGroupSelect01">
            <option selected>Price Low to High</option>
            <option value="1">Price Low to High</option>
            <option value="2">Price Low to High</option>
            <option value="3">Price Low to High</option>
          </select>
        </div>

        <div class="product-display__found-count">
          Found all cool items
        </div>

        <div class="product-display__view-switcher btn-group" role="group" aria-label="Basic example">
          <input type="radio" class="btn-check" name="options1" id="option2" autocomplete="off" checked>
          <label class="btn btn-outline-secondary btn-sm" for="option2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16">
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
            </svg>
          </label>
          <input type="radio" class="btn-check" name="options1" id="option1" autocomplete="off">
          <label class="btn btn-outline-secondary btn-sm" for="option1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            </svg>
          </label>
        </div>
      </div>

      <div class="product__items">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <img src="https://i.dummyjson.com/data/products/51/thumbnail.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  -13%
                  <span class="visually-hidden">unread messages</span>
                </span>
                <h4>$23</h4>
                <h5 class="card-title mt-1">half sleeves T shirts</h5>
                <h6 class="card-subtitle mb-2 text-muted">mens-shirts</h6>
                <p class="card-text">Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands.</p>
                <div class="col mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                  </svg>
                  <span class="rating">4.26</span>
                  <span class="badge text-bg-light">132 pcs.</span>
                </div>
                <button class="btn btn-warning" type="button">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src="https://i.dummyjson.com/data/products/1/3.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  -13%
                  <span class="visually-hidden">unread messages</span>
                </span>
                <h4>$549</h4>
                <h5 class="card-title mt-1">iPhone 9</h5>
                <h6 class="card-subtitle mb-2 text-muted">smartphones</h6>
                <p class="card-text">An apple mobile which is nothing like apple.</p>
                <div class="col mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                  </svg>
                  <span class="rating">4.69</span>
                  <span class="badge text-bg-light">94 pcs.</span>
                </div>
                <button class="btn btn-warning" type="button">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src="https://i.dummyjson.com/data/products/1/3.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  -13%
                  <span class="visually-hidden">unread messages</span>
                </span>
                <h4>$549</h4>
                <h5 class="card-title mt-1">iPhone 9</h5>
                <h6 class="card-subtitle mb-2 text-muted">smartphones</h6>
                <p class="card-text">An apple mobile which is nothing like apple.</p>
                <div class="col mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                  </svg>
                  <span class="rating">4.69</span>
                  <span class="badge text-bg-light">94 pcs.</span>
                </div>
                <button class="btn btn-warning" type="button">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src="https://i.dummyjson.com/data/products/1/3.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  -13%
                  <span class="visually-hidden">unread messages</span>
                </span>
                <h4>$549</h4>
                <h5 class="card-title mt-1">iPhone 9</h5>
                <h6 class="card-subtitle mb-2 text-muted">smartphones</h6>
                <p class="card-text">An apple mobile which is nothing like apple.</p>
                <div class="col mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                  </svg>
                  <span class="rating">4.69</span>
                  <span class="badge text-bg-light">94 pcs.</span>
                </div>
                <button class="btn btn-warning" type="button">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src="https://i.dummyjson.com/data/products/1/3.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  -13%
                  <span class="visually-hidden">unread messages</span>
                </span>
                <h4>$549</h4>
                <h5 class="card-title mt-1">iPhone 9</h5>
                <h6 class="card-subtitle mb-2 text-muted">smartphones</h6>
                <p class="card-text">An apple mobile which is nothing like apple.</p>
                <div class="col mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                  </svg>
                  <span class="rating">4.69</span>
                  <span class="badge text-bg-light">94 pcs.</span>
                </div>
                <button class="btn btn-warning" type="button">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    return productsBlock;
  }
}

export default ProductsBlock;
