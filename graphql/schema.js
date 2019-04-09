const { GraphQLSchema, GraphQLObjectType, GraphQLID } = require('graphql');
const gadgetGraphQLType = require('./gadgetType');
const Gadget = require('../models/gadgets');
const Mutations = require('./mutations');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        gadget: {
            type: gadgetGraphQLType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return Gadget.findById(args.id);
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutations
});