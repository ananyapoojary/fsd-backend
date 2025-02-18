const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { getUser, getAllUsers } = require('./queries/userQuery');
const { addUser } = require('./mutations/userMutation');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getUser,
    getAllUsers,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser,
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

module.exports = schema;
