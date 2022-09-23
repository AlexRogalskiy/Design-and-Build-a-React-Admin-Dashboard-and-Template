const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const request = require("supertest");
let app = require("../app");
const Project = require("../models/project");
const projectSample = require("../mockData/project1.json");
const projectSample2 = require("../mockData/project2.json");
const projectSample3 = require("../mockData/project3.json");

describe("Project-related API", () => {
  afterAll((done) => {
    mongoose.connection.close();
    done();
  });

  it("GET all projects /api/projects", async () => {
    const response = await request(app).get("/api/projects");

    expect(response.statusCode).toEqual(200);
    expect(Array.isArray(response.body.result)).toBeTruthy();
  }, 10000);

  it("SET a project /api/projects", async () => {
    const response = await request(app)
      .post("/api/projects", projectSample)
      .send(projectSample)
      .set("Accept", "application/json");

    expect(response.statusCode).toEqual(200);
    expect(response.body.result.title).toEqual("Frontend Mock up");
  });

  it("GET a project /api/projects/:projectId", async () => {
    const project = await Project.create(projectSample2);
    const response = await request(app).get(`/api/projects/${project._id}`);

    expect(response.body.result._id).toEqual(project._id.toString());
    expect(response.body.result.title).toEqual(project.title);
  });

  it("UPDATE a project /api/projects/:projectId", async () => {
    const project = await Project.create(projectSample3);
    const response = await request(app)
      .put(`/api/projects/${project._id}`)
      .send({ title: "Updated title" })
      .set("Accept", "application/json");

    expect(response.body.result._id).toEqual(project._id.toString());
    expect(response.body.result.title).toEqual("Updated title");
  });

  it("DELETE a project /api/projects/:projectId", async () => {
    const project = await Project.create(projectSample3);
    const response = await request(app).delete(`/api/projects/${project._id}`);

    expect(response.statusCode).toEqual(200);
    expect(response.body.result).toEqual(project._id.toString());
  });
});
