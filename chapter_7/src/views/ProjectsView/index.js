import { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import Page from "components/Page";
import axios from "utils/axios";
import useIsMountedRef from "hooks/useIsMountedRef";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Results from "./Results";

const ProjectBrowseView = () => {
  const isMountedRef = useIsMountedRef();
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const response = await axios.get("/api/projects");

      if (isMountedRef.current) {
        setProjects(response.data.projects);
      }
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
          <Results projects={projects} />
        </Box>
      </Container>
    </Page>
  );
};

export default ProjectBrowseView;
