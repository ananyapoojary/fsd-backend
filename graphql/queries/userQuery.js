const { GraphQLList, GraphQLID } = require('graphql');
const UserType = require('../types/UserType');
const User = require('../../models/User');

const getAllUsers = {
  type: new GraphQLList(UserType),
  resolve: async () => {
    return await User.find();
  },
};

const getUser = {
  type: UserType,
  args: { id: { type: GraphQLID } },
  resolve: async (_, { id }) => {
    return await User.findById(id);
  },
};

module.exports = { getAllUsers, getUser };
