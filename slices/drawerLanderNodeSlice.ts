import React from 'react'
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface DrawerLanderNodeState {
  isOpen: boolean;
}

const initialState: DrawerLanderNodeState = {
  isOpen: false,
};

export const drawerLanderNodeSlice = createSlice({
   name: 'landerDrawerNode',
   initialState,
   reducers: {
    toggleLanderNodeDrawer: (state) => {
        state.isOpen = !state.isOpen;
    }
   }
})

export const { toggleLanderNodeDrawer } = drawerLanderNodeSlice.actions;


export default drawerLanderNodeSlice.reducer;