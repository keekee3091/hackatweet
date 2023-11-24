import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	token: null,
};

export const User = createSlice({
	name: 'User',
	initialState,
	reducers: {
		exemple(state, action){
           
        }
	},
});

export const { exemple } = User.actions;
export default User.reducer;
