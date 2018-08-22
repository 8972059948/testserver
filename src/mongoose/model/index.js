'use strict';
import mongoose from 'mongoose';
import resturentSchema from './resturent/resturentSchema';
import foodSchema from './food/foodSchema';

const resturentModel = mongoose.model('resturentModel', resturentSchema);
const foodModel      = mongoose.model('foodmodel', foodSchema);
const Model          = { resturentModel, foodModel };

module.exports = Model;