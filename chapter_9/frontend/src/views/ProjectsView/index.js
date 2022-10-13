import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Page from "components/Page";
import useIsMountedRef from "hooks/useIsMountedRef";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Results from "./Results";
import { useQuery } from "urql";

const GET_PROJECTS = `
  query Projects {
    projects {
      _id
      title
      author {
        avatar
        name
      }
      image
      createdAt
      membersCount
      currency
      budget
    }
  }
`;

const ProjectsView = () => {
  const isMountedRef = useIsMountedRef();
  const [projects, setProjects] = useState([]);

  const [result, reexecuteQuery] = useQuery({
    query: GET_PROJECTS,
  });

  const { data, error } = result;

  useEffect(() => {
    if (data) {
      let newProjects = JSON.parse(JSON.stringify(data.projects));
      newProjects = newProjects.map((project) => {
        project.createdAt = new Date(Number(project.createdAt));
        return project;
      });
      newProjects.sort((a, b) => {
        return b.createdAt - a.createdAt;
      });

      if (isMountedRef.current) setProjects(newProjects);
    }
  }, [error, data]);

  if (error) return <Navigate to="/404" />;

  return (
    <Page title="Kiki: Projects">
      <Container maxWidth="xl">
        <Header />
        <Box mt={6}>
          <SearchBar />
        </Box>
        <Box mt={6} mb={3}>
          <Results projects={projects} setProjects={setProjects} />
        </Box>
      </Container>
    </Page>
  );
};

export default ProjectsView;
