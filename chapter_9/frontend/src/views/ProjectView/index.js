import { useState, useEffect } from "react";
import { Box, Container, Divider, Tabs, Tab } from "@mui/material";
import { useParams, Navigate } from "react-router-dom";
import useIsMountedRef from "hooks/useIsMountedRef";
import Page from "components/Page";
import Activities from "./Activities";
import Header from "./Header";
import Overview from "./Overview";
import { useQuery } from "urql";

const GET_PROJECT = `
  query ($projectId: ID!) {
    project(_id: $projectId) {
      _id
      title
      description
      tags
      budget
      membersCount
      members {
        name
        avatar
      }
      activities {
        _id
        createdAt
        description
        subject
        type
      }
    }
  }
`;

const tabs = [
  { value: "overview", label: "Overview" },
  { value: "activity", label: "Activity" },
];

const ProjectView = () => {
  const isMountedRef = useIsMountedRef();
  const [currentTab, setCurrentTab] = useState("overview");
  const [project, setProject] = useState(null);
  const { projectId } = useParams();

  const [result, reexecuteQuery] = useQuery({
    query: GET_PROJECT,
    variables: { projectId },
  });

  const { data, fetching, error } = result;

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  useEffect(() => {
    if (data) {
      if (isMountedRef.current) setProject(data.project);
    }
  }, [data, fetching, error]);

  if (error) return <Navigate to="/404" />;

  if (project)
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
            {currentTab === "activity" && (
              <Activities activities={project.activities} />
            )}
          </Box>
        </Container>
      </Page>
    );
};

export default ProjectView;
