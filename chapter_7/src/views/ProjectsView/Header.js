import { Link as RouterLink } from "react-router-dom";
import {
  Breadcrumbs,
  Button,
  Grid,
  Link,
  SvgIcon,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

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
          <Typography variant="body1" color="textPrimary">
            Projects
          </Typography>
        </Breadcrumbs>
        <Typography mt={1} variant="h3" color="textPrimary">
          Projects
        </Typography>
      </Grid>
      <Grid item>
        <Button
          color="secondary"
          component={RouterLink}
          to="/projects/create"
          variant="contained"
          startIcon={
            <SvgIcon fontSize="small">
              <ControlPointIcon />
            </SvgIcon>
          }
        >
          Add a new project
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
