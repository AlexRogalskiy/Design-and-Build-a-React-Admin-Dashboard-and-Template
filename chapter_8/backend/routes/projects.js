const express = require("express");
const router = express.Router();
const {
  getProjects,
  getProject,
  setProject,
  updateProject,
  deleteProject,
} = require("../controllers/projects");

router.route("/").get(getProjects).post(setProject);

router.route("/:projectId").get(getProject).delete(deleteProject).put(updateProject);

module.exports = router;
