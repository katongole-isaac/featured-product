import React from "react";

export default function Navbar({ shoppingCartLength, setCartSideBar }) {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="navbar-cmp bg-secondary ">
      <div className="container d-flex ">
        <div className="d-flex w-100 text-white align-items-center justify-content-between">
          <h3>Featured Products</h3>
          <div
            className="position-relative"
            style={{
              cursor: "pointer",
            }}
            onClick={() => setCartSideBar((prev) => !prev)}
          >
            <span className="material-symbols-outlined  shopping-cart text-white">
              shopping_cart
            </span>
            <span
              className="badge bg-danger badge-primary h4 position-absolute cart-badge "
              // onClick={() => setCartSideBar((prev) => !prev)}
            >
              {shoppingCartLength}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
