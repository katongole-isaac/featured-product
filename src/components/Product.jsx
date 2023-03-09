import React from "react";
import { Rating } from "react-simple-star-rating";
import { addProduct, removeProduct } from "../utils/actions";

export default function Product({
  imageUrl,
  description,
  name,
  price,
  discountAmount,
  rating,
  dispatch,
  _id,
  allProducts,
  shoppingCart,
}) {
  const handleAddProduct = () => {
    addProduct(dispatch, { productId: _id, products: allProducts });
  };

  const handleRemoveProduct = () => {
    removeProduct(dispatch, { productId: _id });
  };

  const checkIfProductIsInCart = (_id) =>
    shoppingCart.findIndex((product) => product._id === _id) > -1
      ? false
      : true;

  return (
    <>
      <div className="product position-relative">
        {!checkIfProductIsInCart(_id) && (
          <span className="badge bg-danger position-absolute">In cart</span>
        )}

        {/* Product Image */}
        <div className="img-wrapper">
          <img src={imageUrl} className="img-fluid" alt={description} />
        </div>

        {/* Product Details */}
        <div className="product-details">
          <div className="product-header">
            <span className="product-name"> {name}</span>
            <Rating initialValue={rating} readonly size={20} />
          </div>
          <div className="product-description w-100">
            <small className="text-muted"> {description} </small>
          </div>
          <div className="product-price">
            <span className="product-discount">${discountAmount} </span>
            <del>${price}</del>
          </div>
        </div>

        {/* Product Actions */}
        <div className="actions">
          <button className="btn btn-sm btn-primary" onClick={handleAddProduct}>
            Add
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={handleRemoveProduct}
            disabled={checkIfProductIsInCart(_id)}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
