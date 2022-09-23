import { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import Page from "components/Page";
import axios from "utils/axios";
import useIsMountedRef from "hooks/useIsMountedRef";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Results from "./Results";

const ProjectsView = () => {
  const isMountedRef = useIsMountedRef();
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_BACKEND_URL + "/api/projects");

      const newProjects = response.data.result;
      newProjects.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
      });

      if (isMountedRef.current) setProjects(newProjects);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

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
