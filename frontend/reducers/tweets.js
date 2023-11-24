import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	allTweets: [],
};

export const tweetTricks = createSlice({
	name: 'tweetTricks',
	initialState,
	reducers: {
		deleteTweet(state, action){
           
        },
		addTweet(state, action){
           
        },
	},
});

export const { deleteTweet, addTweet } = tweetTricks.actions;
export default tweetTricks.reducer;
