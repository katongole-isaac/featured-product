import React from "react";
import { removeProduct } from "../utils/actions";

export default function CartProduct({ imageUrl, name, dispatch, _id }) {
  return (
    <>
      <div className="w-100 h-25 mb-2 cart-product ">
        <div className="img-wrapper">
          <img src={imageUrl} alt={name} />
        </div>

        <span className="d-inline-block">{name} </span>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => removeProduct(dispatch, { productId: _id })}
        >
          X
        </button>
      </div>
    </>
  );
}
