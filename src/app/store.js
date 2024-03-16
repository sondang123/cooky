// Import reducers
import searchReducer from "./searchSlice";

const { configureStore } = require("@reduxjs/toolkit");

// root reducer
const rootReducer = {
  search: searchReducer,
};

// app store
const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.REACT_APP_DEV_TOOLS == 1 ? true : false,
});

export default store;
