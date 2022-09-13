import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

// The Consumer is our means of grabbing and using the data that the Provider holds for us.
const StoreContext = createContext();

const { Provider } = StoreContext;

// a special type of React component that we wrap our application in so it can make the state data that's passed into it as a prop available to all other components
const StoreProvider = ({ value = [], ...props }) => {
  // state is the most up-to-date version of our global state object.
  // dispatch is the method we execute to update our state.
  const [state, dispatch] = useProductReducer({
    products: [],
    categories: [],
    currentCategory: "",
  });
  // use this to confirm it works!
  console.log(state);
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
