import { configureStore } from '@reduxjs/toolkit';
import rotatorDrawer from './slices/drawerRotatorSlice';
import landerDrawerNode from './slices/drawerLanderNodeSlice';

import tree from './slices/tree';
import node from './slices/node';
import tokens from './slices/tokens';


export const store = configureStore({
  reducer: {
    rotatorDrawer: rotatorDrawer,
    landerDrawerNode: landerDrawerNode,
    tree: tree,
    node: node,
    tokens: tokens,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
