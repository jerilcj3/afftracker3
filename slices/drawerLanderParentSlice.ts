import React from 'react'
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface DrawerLanderParentState {
  isOpen: boolean;
}

const initialState: DrawerLanderParentState = {
  isOpen: false,
};

export const drawerLanderParentSlice = createSlice({
   name: 'landerDrawerParent',
   initialState,
   reducers: {
    toggleLanderParentDrawer: (state) => {
        state.isOpen = !state.isOpen;
    }
   }
})

export const { toggleLanderParentDrawer } = drawerLanderParentSlice.actions;


export default drawerLanderParentSlice.reducer;