import { Link as RouterLink } from "react-router-dom";
import { Breadcrumbs, Grid, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Header = () => {
  return (
    <Grid
      mt={3}
      mb={3}
      alignItems="center"
      container
      justifyContent="space-between"
      spacing={3}
    >
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            variant="body1"
            color="inherit"
            to="/home"
            component={RouterLink}
          >
            Dashboard
          </Link>
          <Link
            variant="body1"
            color="inherit"
            to="/projects"
            component={RouterLink}
          >
            Projects
          </Link>
          <Typography variant="body1" color="textPrimary">
            Project Creation
          </Typography>
        </Breadcrumbs>
        <Typography mt={1} variant="h3" color="textPrimary">
          Create a New Project
        </Typography>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default Header;
