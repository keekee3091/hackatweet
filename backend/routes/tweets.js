var express = require('express');
var router = express.Router();

require('../models/connection');
const Tweet = require('../models/tweets');
const { checkBody } = require('../modules/checkbody');
const moment = require('moment');

router.post('/post', (req, res) => {
    if (!checkBody(req.body, ['tweet'])) {
        res.json({ result: false, error: 'Empty field, retard!' });
        return;
    }

    const tweetContent = req.body.tweet;
    const hashtags = extractHashtags(tweetContent);

    if (tweetContent.length > 280) {
        res.json({ result: false, error: 'Tweet too long, retard!' });
        return;
    }

    const datePosted = moment().startOf('hours').fromNow();

    const newTweet = new Tweet({
        username: req.body.username,
        firstname: req.body.firstname,
        tweet: tweetContent,
        date: datePosted,
        hashtag: hashtags,
    });

    newTweet.save()
        .then(() => {
            res.json({ result: true });
        })
});

router.delete('/delete', (req, res) => {
    Tweet.deleteOne({ _id: req.body.tweetId })
        .then(() => {
            res.json({ result: true });
        })
});

function extractHashtags(content) {
    const regex = /#(\w+)/g;
    const hashtags = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
        hashtags.push(match[1]);
    }
    return hashtags;
}

module.exports = router;
