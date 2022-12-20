class SearchBar {
  public draw(): string {
    return `
      <div class="search-bar mt-4 mb-4">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search product..." aria-label="Search product..." aria-describedby="button-find">
          <button class="btn btn-warning" type="button" id="button-find">Find</button>
        </div>
      </div>
    `;
  }
}

export default SearchBar;
