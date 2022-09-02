import { Link as RouterLink } from "react-router-dom";
import { Button, Breadcrumbs, Grid, Link, SvgIcon, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ShareIcon from "@mui/icons-material/Share";

const Header = ({ project }) => {
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
            {project.title}
          </Typography>
        </Breadcrumbs>
        <Typography mt={1} variant="h3" color="textPrimary">
          {project.title}
        </Typography>
      </Grid>
      <Grid item>
        {" "}
        <Button
          color="secondary"
          variant="contained"
          startIcon={
            <SvgIcon fontSize="small">
              <ShareIcon />
            </SvgIcon>
          }
        >
          Share
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
