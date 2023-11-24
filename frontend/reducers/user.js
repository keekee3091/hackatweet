import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	token: null,
};

export const User = createSlice({
	name: 'User',
	initialState,
	reducers: {
		connectToken(state, action){
           state.token = action.payload
        },
		deleteToken(state, action){
           state.token = null
        }
	},
});

export const { connectToken, deleteToken } = User.actions;
export default User.reducer;
