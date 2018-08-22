'use strict';
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} from 'graphql';

const foodItemType = new GraphQLObjectType({
    name: 'food',
    description: 'food item',
    fields: () => ({
      itemId: {
        type: (GraphQLInt),
        description: 'The id of the food item.',
      },
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