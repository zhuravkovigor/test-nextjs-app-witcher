import { createSlice } from "@reduxjs/toolkit";

interface DataState {
  isModalOpen: boolean;
}

const initialState: DataState = {
  isModalOpen: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    toggleModal(state) {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { toggleModal } = dataSlice.actions;
export default dataSlice;
