const { makeExecutableSchema } = require("@graphql-tools/schema");
const Project = require("../models/project");

const typeDefs = /* GraphQL */ `
  # output types
  type Member {
    avatar: String!
    name: String!
  }

  type Activity {
    _id: ID!
    createdAt: String!
    description: String!
    subject: String!
    type: String!
  }

  type Project {
    _id: ID!
    title: String!
    image: String!
    description: String!
    tags: [String]
    budget: Int!
    currency: String
    membersCount: Int!
    author: Member!
    createdAt: String!
    members: [Member!]!
    activities: [Activity!]!
  }

  # input types
  input MemberInput {
    avatar: String!
    name: String!
  }

  input ActivityInput {
    _id: ID!
    createdAt: String!
    description: String!
    subject: String!
    type: String!
  }

  # the schema allows the following query:
  type Query {
    projects: [Project]
    project(_id: ID!): Project
  }

  # this schema allows the following mutation:
  type Mutation {
    addProject(
      title: String!
      description: String
      image: String
      tags: [String]
      budget: Int
      currency: String
      author: MemberInput!
      membersCount: Int
      createdAt: String
      members: [MemberInput]
      activities: [ActivityInput]
    ): Project

    deleteProject(_id: ID!): Project
    
    updateProject(
      _id: ID!
      title: String
      description: String
      tags: [String]
      budget: Int
      currency: String
      membersCount: Int
      author: MemberInput
      createdAt: String
      members: [MemberInput]
      activities: [ActivityInput]
    ): Project
  }
`;

const resolvers = {
  Query: {
    projects: () => Project.find(),
    project: (parent, args, context, info) => Project.findById(args._id),
  },

  Mutation: {
    addProject(parent, args, context, info) {
      const project = new Project({
        title: args.title,
        description: args.description,
        tags: args.tags,
        budget: args.budget,
        membersCount: args.membersCount,
        author: args.author,
        createdAt: args.createdAt,
        members: args.members,
        activities: args.activities,
      });

      return project.save();
    },

    deleteProject(parent, args, context, info) {
      return Project.findByIdAndRemove(args._id);
    },

    updateProject(parent, args, context, info) {
      const project = {};
      if (args.title) project.title = args.title;
      if (args.description) project.description = args.description;
      if (args.tags) project.tags = args.tags;
      if (args.budget) project.budget = args.budget;
      if (args.membersCount) project.membersCount = args.membersCount;
      if (args.members) project.members = args.members;
      if (args.activities) project.activities = args.activities;

      if (
        project.membersCount &&
        project.members &&
        project.membersCount !== project.members.length
      )
        throw new Error("Members count must be equal to the number of members");

      return Project.findByIdAndUpdate(
        args._id,
        {
          $set: project,
        },
        { new: true }
      );
    },
  },
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
