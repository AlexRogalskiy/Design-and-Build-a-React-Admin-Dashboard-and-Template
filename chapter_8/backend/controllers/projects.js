const asyncHandler = require("express-async-handler");
const Project = require("../models/project");

/* @desc Get projects
   @route GET /api/projects
   @access Private */
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find();
  return res.status(200).json({ result: projects });
});

/* @desc Get project
   @route GET /api/projects/:projectId
   @access Private */
const getProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.projectId);

  if (!project) {
    res.status(400);
    throw new Error("Project not found");
  }

  res.status(200).json({ result: project });
});

// @desc Set project
// @route POST /api/projects
// @access Private
const setProject = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("No request body");
  }

  const project = await Project.create({
    ...req.body,
  });

  res.status(200).json({ result: project });
});

// @desc Update projects
// @route PUT /api/projects/:projectId
// @access Private
const updateProject = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("No request body");
  }

  const project = await Project.findById(req.params.projectId);

  if (!project) {
    res.status(400);
    throw new Error("Project not found");
  }

  const updatedProject = await Project.findByIdAndUpdate(
    req.params.projectId,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json({ result: updatedProject });
});

// @desc Delete projects
// @route DELETE /api/projects/:projectId
// @access Private
const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.projectId);

  if (!project) {
    res.status(400);
    throw new Error("Project not found");
  }

  await project.remove();

  res.status(200).json({ result: req.params.projectId });
});

module.exports = {
  getProjects,
  getProject,
  setProject,
  updateProject,
  deleteProject,
};
