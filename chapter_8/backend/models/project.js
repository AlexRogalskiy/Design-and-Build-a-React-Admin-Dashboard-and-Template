const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
    },
    description: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "/static/images/projects/project_1.jpg",
    },
    tags: {
      type: Array,
      default: [],
    },
    currency: {
      type: String,
      default: "$",
    },
    budget: {
      type: Number,
      default: 0,
    },
    membersCount: {
      type: Number,
      default: 1,
    },
    author: {
      type: mongoose.SchemaTypes.Mixed,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    members: {
      type: Array,
    },
    activities: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
