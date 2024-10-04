import "./Header.css";

function Header({ selectedCategory, removeFilterItem, clearFilterItem }) {
  return (
    <header className="header">
      <div className="wrapper filter">
        <div className="filter-group">
          {selectedCategory?.map((cat) => {
            return (
              <div className="filter-item" key={cat}>
                <div>{cat}</div>
                <button
                  className="filter-cancel"
                  type="button"
                  onClick={() => removeFilterItem(cat)}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>

        <button className="clear" type="button" onClick={clearFilterItem}>
          Clear
        </button>
      </div>
    </header>
  );
}

export default Header;
