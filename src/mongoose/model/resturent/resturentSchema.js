'use strict';
import mongoose from 'mongoose';
import mlab from '../../connection';

mlab.then(
    () => console.log('mlab connection resturentSchema'),
    (err) => console.log(err)
);


var Schema = mongoose.Schema;

var resturentSchema = new Schema({
    resturentName: String,
    menuType: [String]
}, {
	collection: 'resturent'
});

module.exports = resturentSchema;