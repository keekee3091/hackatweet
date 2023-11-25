import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	firstname: null,
	username: null,
	token: null,
};

export const User = createSlice({
	name: 'User',
	initialState,
	reducers: {
		connectToken(state, action) {
			state.token = action.payload
		},
		deleteToken(state, action) {
			state.token = null
		},
		connectProfile(state, action) {
			state.firstname = action.payload.firstname
			state.username = action.payload.username
		}
	},
});

export const { connectToken, deleteToken, connectProfile } = User.actions;
export default User.reducer;
