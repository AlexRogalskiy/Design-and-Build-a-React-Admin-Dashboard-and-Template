import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Page from "components/Page";

const NotAuthorizedView = () => {
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Page title="404: Not found">
      <Box sx={{ position: "relative", marginTop: "5%" }}>
        <Box display="flex" justifyContent="center">
          <Typography
            align="center"
            // variant={mobileDevice ? "h4" : "h1"}
            sx={{ fontSize: mobileDevice ? 75 : 150 }}
            color="textPrimary"
          >
            403
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography align="center" variant="body1" color="textSecondary">
            You are not allowed to access this page.
          </Typography>
        </Box>
        <Box mt={6} display="flex" justifyContent="center">
          <Button
            color="secondary"
            component={Link}
            to="/home"
            variant="outlined"
          >
            Back to home
          </Button>
        </Box>
      </Box>
    </Page>
  );
};

export default NotAuthorizedView;
