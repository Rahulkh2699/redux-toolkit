const { createSlice } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increase(state, action) {
      state += 1;
      return state;
    },
    decrease(state, action) {
      state -= 1;
      return state;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;
