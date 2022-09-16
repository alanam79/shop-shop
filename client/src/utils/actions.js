// Actions: These define the types of events that can be emitted to update state. State can only be updated if it's a predefined action.
// The ProductList component displays products from an Apollo query.
// The Home page component keeps track of the current category we are viewing.
// The CategoryMenu component keeps track of our category list from an Apollo query.
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";
