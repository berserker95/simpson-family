import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Simpson } from '../types';

interface addMemberState  {
   members: Array<Simpson>,
}

const initialState: addMemberState = {
    members: [],
}

export const addMembersSlice = createSlice({
    name: 'addMembers',
    initialState,
    reducers: {
        addMembers: (state, action: PayloadAction<Simpson>) => {
         state.members.push(action.payload);
        }
    },
})

export const { addMembers } = addMembersSlice.actions;
export default addMembersSlice.reducer;