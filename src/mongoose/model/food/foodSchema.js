'use strict';
import mongoose from 'mongoose';
import mlab from '../../connection';

mlab.then(
    () => console.log('mlab connection foodSchema'),
    (err) => console.log(err)
);


var Schema = mongoose.Schema;

var foodSchema = new Schema({
    foodName: String,
    foodType: String
}, {
	collection: 'food'
});

module.exports = foodSchema;