import * as shoppingActions from "../utils/shoppingActionsConstants";

export const addProduct = (dispatch, payload) => {
  dispatch({ type: shoppingActions.ADD_ITEM, payload });
};

export const removeProduct = (dispatch, payload) => {
  dispatch({ type: shoppingActions.REMOVE_ITEM, payload });
};
