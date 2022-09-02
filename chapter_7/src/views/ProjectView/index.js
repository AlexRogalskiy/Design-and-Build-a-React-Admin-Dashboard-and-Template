import { useCallback, useState, useEffect } from "react";
import { Box, Container, Divider, Tabs, Tab } from "@mui/material";
import axios from "utils/axios";
import useIsMountedRef from "hooks/useIsMountedRef";
import Page from "components/Page";
import Activities from "./Activities";
import Header from "./Header";
import Overview from "./Overview";
// import Reviews from "./Reviews";

const ProjectDetailsView = () => {
  const isMountedRef = useIsMountedRef();
  const [currentTab, setCurrentTab] = useState("overview");
  const [project, setProject] = useState(null);

  const tabs = [
    { value: "overview", label: "Overview" },
    // { value: "reviews", label: "Reviews" },
    { value: "activity", label: "Activity" },
  ];

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  const getProject = useCallback(async () => {
    try {
      const response = await axios.get("/api/projects/1");

      if (isMountedRef.current) {
        setProject(response.data.project);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getProject();
  }, [getProject]);

  if (!project) {
    return null;
  }

  return (
    <Page title="Kiki: Project Details">
      <Container maxWidth="xl">
        <Header project={project} />
        <Box mt={3}>
          <Tabs
            onChange={handleTabsChange}
            scrollButtons="auto"
            textColor="secondary"
            value={currentTab}
            variant="scrollable"
          >
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
        </Box>
        <Divider />
        <Box mt={3}>
          {currentTab === "overview" && <Overview project={project} />}
          {/* {currentTab === "reviews" && <Reviews reviews={project.reviews} />} */}
          {currentTab === "activity" && (
            <Activities activities={project.activities} />
          )}
        </Box>
      </Container>
    </Page>
  );
};

export default ProjectDetailsView;
