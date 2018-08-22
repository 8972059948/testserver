'use strict';
import {
    GraphQLString,
    GraphQLInputObjectType
} from 'graphql';

const foodItemType = new GraphQLInputObjectType({
    name: 'foodinputitem',
    description: 'food item',
    fields: () => ({
      foodName: {
        type: GraphQLString,
        description: 'The name of the food.',
      },
      foodType: {
        type: GraphQLString,
        description: 'The type of food. '
      }
    })
});

module.exports = foodItemType;