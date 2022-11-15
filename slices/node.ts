import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TreeNodeDatum } from 'react-d3-tree/lib/types/common';

import { HierarchyPointNode } from 'd3-hierarchy';

interface node {
  Node: HierarchyPointNode<TreeNodeDatum>;
}

const initialState: node = {
  Node: {},
};

export const NodeSlice = createSlice({
  name: 'node',
  initialState,
  reducers: {
    saveNode: (state, action: PayloadAction<node>) => {
      state.Node = action.payload.Node;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveNode } = NodeSlice.actions;

export default NodeSlice.reducer;
