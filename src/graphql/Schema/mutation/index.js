'use strict';
import {
    GraphQLObjectType,
    GraphQLNonNull
} from 'graphql';

import { foodModel, resturentModel } from '../../../mongoose/model';

import {
    foodItemInputType, 
    foodItemOutputType, 
    resturentInputType, 
    resturentOutputType 
} from '../model';

const MutationRootType = new GraphQLObjectType({
    name: 'MutationRoot',
    description: 'Mutation API',
    fields: () => ({
        fooditemSave: {
            type: foodItemOutputType,
            args: {
                inputItem: {
                    type: new GraphQLNonNull(foodItemInputType)
                }
            },
            resolve: (_, { inputItem }) => {
                // var savefoodItem = new foodModel(inputItem);  
                var saveItem = new Promise((resolve,reject) => {
                    foodModel.create(inputItem,(err,res) => {
                        err ? reject(err) : resolve(res)
                    })
                })
                return saveItem
            }
        },
        resturentmenuItemSave: {
            type: resturentOutputType,
            args: {
                inputItem :{
                    type: new GraphQLNonNull(resturentInputType)
                }
            },
            resolve: (_, { inputItem }) => {
                var saveItem = new Promise((resolve,reject) => {
                    resturentModel.create(inputItem,(err,res) => {
                        err ? reject(err) : resolve(res)
                    })
                })
                return saveItem
            }
        }
    })
});

module.exports = MutationRootType;