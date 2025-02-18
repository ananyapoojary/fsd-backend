const { User } = require('./models/User'); // Assuming you have a User model

const resolvers = {
  Mutation: {
    addUser: async (_, { name, email }) => {
      try {
        // Check if the email already exists in the database
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          throw new Error('Email already exists');
        }

        // Create and save the new user
        const newUser = new User({ name, email });
        await newUser.save();

        return newUser; // Return the new user
      } catch (error) {
        console.error(error);
        throw new Error('An error occurred while adding the user');
      }
    },
  },
};
