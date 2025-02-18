const { GraphQLString } = require('graphql');
const UserType = require('../types/UserType');
const User = require('../../models/User');

const addUser = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  },
  resolve: async (_, { name, email }) => {
    const newUser = new User({ name, email });
    return await newUser.save();
  },
};

module.exports = { addUser };
