const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
    tweet: String,
    date: String,
    hashtag: [{ type: String }],
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;