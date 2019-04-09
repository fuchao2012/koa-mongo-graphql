const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat} = graphql;

const GadgetType = new GraphQLObjectType({
    name: 'Gadget',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        release_date: {type: GraphQLString},
        by_compony: {type: GraphQLString},
        price: {type: GraphQLFloat}
    })
});

module.exports = GadgetType;

