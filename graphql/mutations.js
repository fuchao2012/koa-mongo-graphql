const { GraphQLObjectType, GraphQLString, GraphQLFloat } = require('graphql')
const gadgetGrapQLType = require('./gadgetType');
const Gadget = require('../models/gadgets')

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    field: {
        addGadget: {
            type: gadgetGrapQLType,
            args: {
                name: { type: GraphQLString },
                release_date: { type: GraphQLString },
                by_compony: { type: GraphQLString },
                price: { type: GraphQLFloat }
            },
            resolve(parent, args) {
                const newGadget = new Gadget({
                    name: args.name,
                    release_date: args.release_date,
                    by_company: args.by_company,
                    price: args.price
                });
                return newGadget.save();
            }
        }
    }
})

module.exports = Mutation;