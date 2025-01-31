import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  train_number: "",
  name: "",
  total_seats: "",
};

const formSlice = createSlice({
  name: "trainForm",
  initialState,
  reducers: {
    updateForm: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => initialState,
  },
});

export const { updateForm, resetForm } = formSlice.actions;
export default formSlice.reducer;
