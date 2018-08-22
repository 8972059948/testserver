'use strict';
import foodItemInputType   from './inputType/foodItem';
import foodItemOutputType  from './outputType/foodItem';
import resturentOutputType from './outputType/resturentCollection';
import resturentInputType  from './inputType/resturentCollection';

const graphqlModel = { foodItemInputType, foodItemOutputType, resturentOutputType, resturentInputType };

module.exports = graphqlModel;