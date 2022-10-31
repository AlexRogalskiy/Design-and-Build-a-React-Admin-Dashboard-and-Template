const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
const Project = require("../models/project");
const projectSample = require("../mockData/project1.json");
const projectSample2 = require("../mockData/project2.json");
const projectSample3 = require("../mockData/project3.json");

describe("Project-related API", () => {
  afterAll((done) => {
    mongoose.connection.close();
    done();
  });

  it("GET all projects (projects)", async () => {
    const response = await request(app)
      .post("/api")
      .send({
        query: "{projects { _id, title, description } }",
      })
      .set("Accept", "application/json");

    expect(response.statusCode).toEqual(200);
    expect(Array.isArray(response.body.data.projects)).toBeTruthy();
  }, 10000);

  it("CREATE a project (mutation:addProject)", async () => {
    let projectStr = JSON.stringify(projectSample);
    projectStr = projectStr.replace(/"(\w+)"\s*:/g, "$1:");
    projectStr = projectStr.substring(1, projectStr.length - 1);

    const response = await request(app)
      .post("/api")
      .send({ query: `mutation{addProject(` + projectStr + `) {_id, title} }` })
      .set("Accept", "application/json");

    expect(response.statusCode).toEqual(200);
    expect(response.body.data.addProject.title).toEqual("Frontend Mock up");
  });

  it("GET a project (project)", async () => {
    const project = await Project.create(projectSample2);
    const response = await request(app)
      .post("/api")
      .send({
        query: `{project(_id: "${project._id.toString()}") { _id, title} }`,
      })
      .set("Accept", "application/json");

    expect(response.body.data.project._id).toEqual(project._id.toString());
    expect(response.body.data.project.title).toEqual(project.title);
  });

  it("UPDATE a project (mutation:updateProject)", async () => {
    const project = await Project.create(projectSample3);
    const response = await request(app)
      .post("/api")
      .send({
        query: `mutation{updateProject(_id: "${project._id}", title: "Updated title") {_id, title} }`,
      })
      .set("Accept", "application/json");

    expect(response.body.data.updateProject._id).toEqual(
      project._id.toString()
    );
    expect(response.body.data.updateProject.title).toEqual("Updated title");
  });

  it("DELETE a project /api", async () => {
    const project = await Project.create(projectSample3);
    const response = await request(app)
      .post("/api")
      .send({ query: `mutation{deleteProject(_id: "${project._id}") {_id} }` })
      .set("Accept", "application/json");

    expect(response.statusCode).toEqual(200);
    expect(response.body.data.deleteProject._id).toEqual(
      project._id.toString()
    );
  });
});
