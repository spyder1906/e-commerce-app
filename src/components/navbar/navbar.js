import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ onLogout, onSearch, cartItemCount }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = () => {
    if (searchQuery.trim().length) {
      onSearch(searchQuery.trim());
    }
    setSearchQuery("");
  };

  return (
    <div className="wrapper">
      <header className="container">
        <div className="header py-2">
          <div className="grid">
            <Link to="/" className="link">
              <h1 className="brand">E-commerce</h1>
            </Link>
            <div className="formContainer">
              <form className="search">
                <div className="form-control">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                  />
                </div>
                <button
                  type="button"
                  className="search-btn"
                  onClick={handleSubmit}
                >
                  Search
                </button>
              </form>
            </div>
            <div className="right-nav">
              <Link to="/cart" className="link headerCart">
                <img className="cartImg" src="/cart.svg" alt="cart" />
                {cartItemCount > 0 && (
                  <div className="cartCounter">
                    {cartItemCount <= 9 ? cartItemCount : "9+"}
                  </div>
                )}
              </Link>
              <div className="logout-btn" onClick={onLogout}>Logout</div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export { NavBar };
