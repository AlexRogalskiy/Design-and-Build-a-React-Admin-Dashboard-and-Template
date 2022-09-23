import { Link as RouterLink } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const ProjectSuccess = () => {
  return (
    <Card>
      <CardContent>
        <Box maxWidth={450} mx="auto">
          <Box display="flex" justifyContent="center">
            <Avatar>
              <StarIcon />
            </Avatar>
          </Box>
          <Box mt={2}>
            <Typography variant="h3" color="textPrimary" align="center">
              You are all set!
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              align="center"
            >
              Your project has been successfully created. You can click the
              button below to check your project.
            </Typography>
          </Box>
          <Box mt={2} display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="secondary"
              component={RouterLink}
              to="/projects"
            >
              View your project
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectSuccess;
