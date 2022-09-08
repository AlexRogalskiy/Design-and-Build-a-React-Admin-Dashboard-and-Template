import { useState, useReducer } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
} from "@mui/material";
import Page from "components/Page";
import Header from "./Header";
import ProjectBasics from "./ProjectBasics";
import ProjectDetails from "./ProjectDetails";
import ProjectSuccess from "./ProjectSuccess";
import ProjectBudget from "./ProjectBudget";
import ProjectTags from "./ProjectTags";
import { steps, CustomStepIcon } from "./Steppers";

const initialProjectState = {
  title: "",
  description: "",
  budget: 0,
  tags: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TITLE": {
      const { title } = action.payload;

      return {
        ...state,
        title,
      };
    }
    case "DESCRIPTION": {
      const { description } = action.payload;

      return {
        ...state,
        description,
      };
    }
    case "BUDGET": {
      const { budget } = action.payload;

      return {
        ...state,
        budget,
      };
    }
    case "TAGS": {
      const { tags } = action.payload;

      return {
        ...state,
        tags,
      };
    }
    default: {
      return { ...state };
    }
  }
};

const ProjectCreateView = () => {
  const [state, dispatch] = useReducer(reducer, initialProjectState);
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleComplete = () => {
    setCompleted(true);
  };

  if (completed)
    return (
      <Page title="Kiki: Create a New Project">
        <Container maxWidth="xl">
          <Header />
          <ProjectSuccess />
        </Container>
      </Page>
    );

  return (
    <Page title="Kiki: Create a New Project">
      <Container maxWidth="xl">
        <Header />
        <Paper>
          <Grid container>
            <Grid item xs={12} md={3} padding={3}>
              <Stepper
                activeStep={activeStep}
                connector={<StepConnector sx={{ marginLeft: 2.2 }} />}
                orientation="vertical"
              >
                {steps.map((step) => (
                  <Step key={step.label}>
                    <StepLabel StepIconComponent={CustomStepIcon}>
                      {step.label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
            <Grid item xs={12} md={9} padding={3}>
              <Box p={3}>
                {activeStep === 0 && (
                  <ProjectBasics
                    onNext={handleNext}
                    dispatch={dispatch}
                    state={state}
                  />
                )}
                {activeStep === 1 && (
                  <ProjectDetails
                    onBack={handleBack}
                    onNext={handleNext}
                    dispatch={dispatch}
                    state={state}
                  />
                )}
                {activeStep === 2 && (
                  <ProjectBudget
                    onBack={handleBack}
                    onNext={handleNext}
                    dispatch={dispatch}
                    state={state}
                  />
                )}
                {activeStep === 3 && (
                  <ProjectTags
                    onBack={handleBack}
                    onNext={handleComplete}
                    dispatch={dispatch}
                    state={state}
                  />
                )}
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Page>
  );
};

export default ProjectCreateView;
