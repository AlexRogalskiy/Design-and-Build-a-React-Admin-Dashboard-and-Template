import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Header = () => {
  return (
    <Grid container mt={3} mb={3} spacing={3} justifyContent="space-between">
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link color="inherit" to="/home" component={RouterLink}>
            Dashboard
          </Link>
          <Typography color="textPrimary">Account</Typography>
        </Breadcrumbs>
        <Typography mt={1} variant="h3" color="textPrimary">
          Account Setting
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
