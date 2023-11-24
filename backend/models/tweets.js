const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
    username: String,
    firstname: String,
    tweet: String,
    date: String,
    like: [{ type: Number }],
    hashtag: [{ type: String }],
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;