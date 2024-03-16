import { createSlice } from "@reduxjs/toolkit";

// MARK: --- Thunks ---

export const searchSLice = createSlice({
  name: "search",
  initialState: {
    value: "",
    valueFilter: [],
  },
  reducers: {
    setValueSearch: (state, action) => {
      state.value = action.payload;
    },
    setValueFilter: (state, action) => {
      state.valueFilter = action.payload;
    },
  },
  extraReducers: {},
});

const { reducer, actions } = searchSLice;
export const { setValueSearch, setValueFilter } = actions;
export default reducer;
