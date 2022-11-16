import React from 'react'
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface DrawerLanderState {
  isOpen: boolean;
}

const initialState: DrawerLanderState = {
  isOpen: false,
};

export const drawerLanderSlice = createSlice({
   name: 'landerDrawer',
   initialState,
   reducers: {
    toggleLanderDrawer: (state) => {
        state.isOpen = !state.isOpen;
    }
   }
})

export const { toggleLanderDrawer } = drawerLanderSlice.actions;


export default drawerLanderSlice.reducer;