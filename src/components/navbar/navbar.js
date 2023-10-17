import { Link } from "react-router-dom";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import TuneIcon from "@mui/icons-material/Tune";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import { productContext } from "../../pages/products";
const NavBar = ({ onSearch, cartItemCount }) => {
  // const { products } = useContext(productContext);
  // console.log("Products", products);
  const [searchQuery, setSearchQuery] = useState("");
  const sortDataHandle = () => {};
  const handleSubmit = () => {
    if (searchQuery.trim().length) {
      onSearch(searchQuery.trim());
    }
    setSearchQuery("");
  };

  return (
    <div className="wrapper">
      <div className="upNav">
        <div className="log_container">
          <Link to="/" className="link">
            <img
              className="brand"
              src="https://static.vecteezy.com/system/resources/thumbnails/005/316/946/small/stock-trolley-bag-online-shop-logo-designs-template-illustration-graphic-of-shopping-and-shop-free-vector.jpg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="link_container">
          <Link to="/">Home</Link>
          <Link to="#">Shop</Link>
          <Link to="/Products">Product</Link>
        </div>
        <div className="icon_container">
          <div>
            {" "}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
            />
          </div>
          <div>
            <SearchIcon onClick={handleSubmit} className="searchStyle" />
          </div>
          <div>
            <FavoriteBorderIcon className="favoriteStyle" />
          </div>
          <div>
            <PersonIcon className="userStyle" />
          </div>
          <div>
            <Link to="/cart" className="link headerCart">
              <ShoppingCartOutlinedIcon className="cartImg cartStyle" />
              {cartItemCount > 0 && (
                <div className="cartCounter">
                  {cartItemCount <= 9 ? cartItemCount : "9+"}
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>
      <div className="midNav">
        <img
          src="https://st4.depositphotos.com/4678277/40811/i/450/depositphotos_408110334-stock-photo-full-length-body-size-view.jpg"
          alt=""
          className="image"
        />
      </div>
      <div className="dowNav">
        <div className="downStyle">
          <div className="filter">
            <TuneIcon className="filterStyle" /> Filter
          </div>
          <div className="showStyle">
            <ul>
              <li>Show</li>
              <input value={20} className="inputStyle" />
              <li style={{ cursor: "pointer" }} onClick={sortDataHandle}>
                Sort by
              </li>
              <input placeholder="Default" className="inputDefaultStyle" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NavBar };
