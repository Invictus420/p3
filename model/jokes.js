var path = require('path');
var connection = require("../db/db");
var ObjectId = require('mongodb').ObjectId;

module.exports.allJokes = function(callback){
    var db = connection.get();
    var data = db.collection("jokes").find().toArray(function(err, data){
        if(err) callback(err, null);
        callback(null, data);
    });
};

exports.findJoke = function(id,callback){
    var db = connection.get();
    var data = db.collection.findById({_id: ObjectId(id)}).exec(function(err, data){
        if(err) callback(err, null);
        callback(null, data);
    });
};

exports.addJoke = function(jokeToAdd,callback) {
    var db = connection.get();
    var data = db.collection.insertOne(jokeToAdd, function(err, data){
        if(err) callback(err, null);
        callback(null, data);
    });
};
exports.editJoke = function(jokeToEdit,callback) {
    var db = connection.get();
    var data = db.collection.findOneAndUpdate({_id: ObjectId(jokeToEdit._id)}, jokeToEdit,{new: true}, function(err, data){
        if(err) callback(err, null);
        callback(null, data);
    });
};
exports.deleteJoke = function(id,callback){
    var db = connection.get();
    var data = db.collection.findOneAndRemove({_id: ObjectId(id)}, function(err, data){
        if(err) callback(err, null);
        callback(null, data);
    });
};
exports.randomJoke = function randomJoke(callback){
    var db = connection.get();
    var data = db.collection.find().toArray(function(err, data){
        if(err) callback(err, null);
        callback(null, dat[Math.floor(Math.random()*data.length)]);
    });
};
