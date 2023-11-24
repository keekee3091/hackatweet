import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	allTweets: [],
};

export const tweetTricks = createSlice({
	name: 'tweetTricks',
	initialState,
	reducers: {
		deleteTweet(state, action){
           state.allTweets.filter((tweet)=>tweet.action.payload)
        },
		addTweet(state, action){
           state.allTweets.push(action.payload)
        },
	},
});

export const { deleteTweet, addTweet } = tweetTricks.actions;
export default tweetTricks.reducer;
