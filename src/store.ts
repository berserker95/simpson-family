import { configureStore } from '@reduxjs/toolkit';
import addMembersReducer from './slices/addMembesrSlice';

const store = configureStore({
  reducer: {
    addMembers: addMembersReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;