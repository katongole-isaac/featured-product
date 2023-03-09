import * as shoppingActions from "../utils/shoppingActionsConstants";

function shoppingCartReducer(state, action) {
  switch (action.type) {
    case shoppingActions.ADD_ITEM:
      addProduct(state, action.payload);
      break;

    case shoppingActions.REMOVE_ITEM:
      removeProduct(state, action.payload);
      break;
  }
}

export { shoppingCartReducer };

// Adding a product to a shoppingCart
const addProduct = (shoppingCart, payload) => {
  const { productId, products } = payload;
  // console.log(productId);

  const product = products.find((pdt) => pdt._id === productId);

  if (shoppingCart.length === 0) {
    shoppingCart.push(product);
    return;
  }

  shoppingCart.find((pdt) => pdt._id === productId)
    ? null
    : shoppingCart.push(product);
};

//Removing a product from a shoppingCart
const removeProduct = (shoppingCart, payload) => {
  const { productId } = payload;
  console.log(productId);
  if (shoppingCart.length === 0) return;

  const pdtIndex = shoppingCart.findIndex(
    (product) => product._id === productId
  );

  if (pdtIndex > -1) {
    shoppingCart.splice(pdtIndex, 1);
  }
};
