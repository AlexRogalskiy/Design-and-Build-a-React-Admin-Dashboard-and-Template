import { Link, useLocation } from "react-router-dom";
import { AppBar, Box, IconButton, Toolbar, SvgIcon } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import useAuth from "hooks/useAuth";
import Logo from "components/Logo";
import TopBarLink from "./TopBarLink";
import Settings from "./Settings";
import { THEMES } from "theme";

const AppBarCustomized = styled(AppBar)(({ theme }) => ({
  minHeight: 64,
  zIndex: theme.zIndex.drawer + 100,
  ...(theme.name === THEMES.LIGHT
    ? {
        boxShadow: "none",
        backgroundColor: theme.palette.primary.main,
      }
    : {}),
  ...(theme.name === THEMES.DARK
    ? {
        backgroundColor: theme.palette.background.dark,
      }
    : {}),
}));

const TopBar = ({ onMobileNavOpen }) => {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <AppBarCustomized>
      <Toolbar sx={{ minHeight: (theme) => theme.spacing(8) }}>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <SvgIcon fontSize="small">
              <MenuIcon />
            </SvgIcon>
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Link to="/">
            <Logo />
          </Link>
        </Box>
        <Box sx={{ minHeight: (theme) => theme.spacing(0.25) }} flexGrow={1} />
        <Settings />
        <Box sx={{ minHeight: (theme) => theme.spacing(0.25) }}>
          <TopBarLink user={user} login={location.pathname === "/login"} />
        </Box>
      </Toolbar>
    </AppBarCustomized>
  );
};

TopBar.propTypes = {
  onMobileNavOpen: PropTypes.func,
};

export default TopBar;
