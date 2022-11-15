import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface DrawerRotatorState {
  isOpen: boolean;
}

const initialState: DrawerRotatorState = {
  isOpen: false,
};

export const drawerRotatorSlice = createSlice({
  name: 'rotatorDrawer',
  initialState,
  reducers: {
    toggleRotatorDrawer: (state) => {
      state.isOpen = !state.isOpen;
    },
   
  },
});

// Action creators are generated for each case reducer function
export const { toggleRotatorDrawer } = drawerRotatorSlice.actions;

export default drawerRotatorSlice.reducer;
