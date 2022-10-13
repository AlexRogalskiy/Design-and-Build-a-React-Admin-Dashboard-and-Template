const Project = require("../models/project");

const {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

/* Input Types */
// Member Type
const inputMemberType = new GraphQLInputObjectType({
  name: "inputMember",
  fields: () => ({
    avatar: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

// Activity Type
const inputActivityType = new GraphQLInputObjectType({
  name: "inputActivity",
  fields: () => ({
    _id: { type: GraphQLID },
    createdAt: { type: GraphQLString },
    description: { type: GraphQLString },
    subject: { type: GraphQLString },
    type: { type: GraphQLString },
  }),
});

// Project Type
const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    image: { type: GraphQLString },
    description: { type: GraphQLString },
    tags: { type: new GraphQLList(GraphQLString) },
    budget: { type: GraphQLInt },
    currency: { type: GraphQLString },
    membersCount: { type: GraphQLInt },
    author: { type: outputMemberType },
    createdAt: { type: GraphQLString },
    members: { type: new GraphQLList(outputMemberType) },
    activities: { type: new GraphQLList(outpuActivityType) },
  }),
});

const query = new GraphQLObjectType({
  name: "ProjectQuery",
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find();
      },
    },
    project: {
      type: ProjectType,
      args: { _id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.findById(args._id);
      },
    },
  },
});

/* Output Types */
// Member Type
const outputMemberType = new GraphQLObjectType({
  name: "outputMember",
  fields: () => ({
    avatar: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

// Activity Type
const outpuActivityType = new GraphQLObjectType({
  name: "outputActivity",
  fields: () => ({
    _id: { type: GraphQLID },
    createdAt: { type: GraphQLString },
    description: { type: GraphQLString },
    subject: { type: GraphQLString },
    type: { type: GraphQLString },
  }),
});

// Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Add a project
    addProject: {
      type: ProjectType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLNonNull(GraphQLString) },
        tags: {
          type: new GraphQLList(GraphQLString),
          defaultValue: [],
        },
        budget: { type: GraphQLInt, defaultValue: 0 },
        membersCount: { type: GraphQLInt, defaultValue: 1 },
        author: { type: GraphQLNonNull(inputMemberType) },
        members: {
          type: new GraphQLList(inputMemberType),
          defaultValue: [],
        },
        activities: {
          type: new GraphQLList(inputActivityType),
          defaultValue: [],
        },
      },
      resolve(parent, args) {
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
    },
    // Delete a project
    deleteProject: {
      type: ProjectType,
      args: {
        _id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Project.findByIdAndRemove(args._id);
      },
    },
    // Update a project
    updateProject: {
      type: ProjectType,
      args: {
        _id: { type: GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        tags: { type: new GraphQLList(GraphQLString) },
        budget: { type: GraphQLInt },
        membersCount: { type: GraphQLInt },
        members: {
          type: new GraphQLList(inputMemberType),
        },
        activities: {
          type: new GraphQLList(inputActivityType),
        },
      },
      resolve(parent, args) {
        const project = {};
        if (args.title) project.title = args.title;
        if (args.description) project.description = args.description;
        if (args.tags) project.tags = args.tags;
        if (args.budget) project.budget = args.budget;
        if (args.membersCount) project.membersCount = args.membersCount;
        if (args.members) project.members = args.members;
        if (args.activities) project.activities = args.activities;

        if (project.membersCount && project.members && project.membersCount !== project.members.length)
          throw new Error(
            "Members count must be equal to the number of members"
          );

        return Project.findByIdAndUpdate(
          args._id,
          {
            $set: project,
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query,
  mutation,
});
