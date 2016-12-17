var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');

/* GET users listing. */
router.get('/jokes', function(req, res, next) {
    jokes.allJokes(function(err, data){
        if(err) res.send(err);
        res.json(data);
    });
});
router.get('/joke/random', function(req, res, next) {
    jokes.randomJoke(function(err, data){
        if(err) res.send(err);
        res.json(data);
    });
});
router.post('/joke', function(req, res, next) {
    var joke = {};
    joke.joke = req.body.joke;
    joke.type = req.body.type;
    joke.reference = req.body.reference;
    joke.lastEdited = new Date();

    jokes.addJoke(joke,function(err, data){
        if(err) res.send(err);
        res.json(joke);
    });
});
router.put('/joke', function(req, res, next) {
    var joke = {};
    joke.joke = req.body.joke;
    joke.type = req.body.type;
    joke.reference = req.body.reference;
    joke.lastEdited = new Date();
    jokes.editJoke(joke, function(err, data){
        if(err) res.send(err);
        res.json(data);
    });
});
router.delete('/joke/:_id', function(req, res, next) {
    jokes.deleteJoke(req.params._id, function(err, data){
        if(err) res.send(err);
        res.json(data);
    });
});



module.exports = router;