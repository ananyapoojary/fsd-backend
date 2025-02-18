const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const connectDB = require('./db/connect'); // MongoDB connection function
const schema = require('./graphql/schema'); // GraphQL schema

const app = express();
app.use(cors());

// Apollo Server Setup
const server = new ApolloServer({ schema });

// Apply Apollo Middleware
server.start().then(() => {
  server.applyMiddleware({ app, path: '/graphql' });
});

// Connect to MongoDB
connectDB(); // Use the separate DB connection function

// Start the server
app.listen(4000, () => {
  console.log('Server running at http://localhost:4000/graphql');
});
