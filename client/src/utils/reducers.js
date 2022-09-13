// The ProductList component displays products from an Apollo query.
// The CategoryMenu component keeps track of our category list from an Apollo query.
// The Home page component keeps track of the current category we are viewing.
import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "./actions";
import { useReducer } from "react";

export const reducer = (state, action) => {
  switch (action.type) {
    // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
    case UPDATE_PRODUCTS:
      return {
        // the ... (spread operator) is used in the variable array where there is more than 1 values are expected.
        // It allows us the privilege to obtain a list of parameters from an array.
        ...state,
        products: [...action.products],
      };

    case UPDATE_CATEGORIES:
      return {
        // the ... (spread operator) is used in the variable array where there is more than 1 values are expected.
        // It allows us the privilege to obtain a list of parameters from an array.
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        // the ... (spread operator) is used in the variable array where there is more than 1 values are expected.
        // It allows us the privilege to obtain a list of parameters from an array.
        ...state,
        currentCategory: action.currentCategory,
      };

    // if it's none of these actions, do not update state at all and keep things the same!
    default:
      return state;
  }
};

// The useState() Hook is great for managing simpler amounts of state, like form field values and the status of a button being clicked.
// The useReducer() Hook is meant specifically for managing a greater level of state

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
