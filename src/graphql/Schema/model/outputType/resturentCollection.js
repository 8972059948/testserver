'use strict';
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} from 'graphql';

const resturentCollection = new GraphQLObjectType({
    name: 'resturent',
    description: 'resturent menu item',
    fields: () => ({
      resturentName: {
        type: GraphQLString,
        description: 'The name of the resturent.',
      },
      menuType: {
        type: new GraphQLList(GraphQLString),
        description: 'The type of menu a resturent have. '
      }
    })
});

module.exports = resturentCollection;