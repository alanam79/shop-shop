import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { useStoreContext } from "../../utils/GlobalState";

import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";

function CategoryMenu() {
  // const { data: categoryData } = useQuery(QUERY_CATEGORIES);
  // const categories = categoryData?.categories || [];

  // when we use this component, we immediately call upon the useStoreContext() Hook to retrieve the current state from the global state object and the dispatch() method to update state.
  const [state, dispatch] = useStoreContext();
  // Because we only need the categories array out of our global state, we simply destructure it out of state so we can use it to provide to our returning JSX.
  const { categories } = state;

  const { data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    // if categoryData exists or has changed from the response of useQuery, then run dispatch()
    if (categoryData) {
      // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
    }
  }, [categoryData, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            // setCategory(item._id);
            handleClick(item._id);
          }}>
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
