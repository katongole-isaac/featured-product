import React, { useEffect, useRef } from "react";
import CartProduct from "./CartProduct";

function ShoppingCartPage(
  { cartSidebar, setCartSidebar, cart, dispatch },
  ref
) {
  const cartSideRef = useRef();

  const cartClassName = cartSidebar ? "cart-open" : "cart-close";
  console.log(cartSidebar);

  useEffect(() => {
    if (cartSidebar) {
      window.addEventListener("click", handleClose);
      window.addEventListener("keydown", handleCloseByKey);
    }

    return () => {
      window.removeEventListener("click", handleClose);
      window.addEventListener("keydown", handleCloseByKey);
    };
  }, [cartSidebar]);

  const handleCloseByKey = (e) => {
    if (e.key === "Escape") setCartSidebar(false);
  };

  const handleClose = (e) => {
    console.log(!cartSideRef.current.contains(e.target));

    // if (!cartSideRef.current.contains(e.target)) {
    //   setCartSidebar(open);
    // }
  };

  return (
    <>
      <div
        className={`position-fixed vh-100  bg-light p-1 ${cartClassName}`}
        ref={cartSideRef}
      >
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => setCartSidebar(false)}
        >
          close
        </button>

        <div className="items-in-cart mt-4 ">
          <h4>Featured Products</h4>
          <hr />
          {cart.length === 0 ? (
            <div className="w-100 text-center "> No products In cart</div>
          ) : (
            <>
              {cart.map((product) => (
                <CartProduct {...product} dispatch={dispatch} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default React.forwardRef((props, ref) => (
  <ShoppingCartPage {...props} ref={ref} />
));
