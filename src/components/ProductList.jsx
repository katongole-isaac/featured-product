import React from "react";
import { productsPerRow } from "../utils/productsPerRow";
import Product from "./Product";

export default function ProductList({ products, dispatch, shoppingCart }) {
  const numberOfProductsPerRow = 4;

  return (
    <>
      {productsPerRow(products, numberOfProductsPerRow).map((pdtArray) => (
        <div className="row mb-3">
          {pdtArray.map((product) => (
            <div className="col" key={product.slugName}>
              <Product
                {...product}
                dispatch={dispatch}
                allProducts={products}
                shoppingCart={shoppingCart}
              />
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
