// Actions: These define the types of events that can be emitted to update state. State can only be updated if it's a predefined action.
// The ProductList component displays products from an Apollo query.
// The Home page component keeps track of the current category we are viewing.
// The CategoryMenu component keeps track of our category list from an Apollo query.
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

// shopping cart:
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_MULTIPLE_TO_CART = "ADD_MULTIPLE_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";
export const TOGGLE_CART = "TOGGLE_CART";
