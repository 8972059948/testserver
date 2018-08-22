'use strict';
import {
    GraphQLString,
    GraphQLInputObjectType,
    GraphQLList
} from 'graphql';

const resturentCollection = new GraphQLInputObjectType({
    name: 'resturentmutation',
    description: 'resturent menu items',
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