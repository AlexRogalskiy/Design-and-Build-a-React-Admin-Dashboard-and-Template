import { Link, useLocation } from "react-router-dom";
import { AppBar, Box, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { THEMES } from "theme";
import Logo from "components/Logo";
import useAuth from "hooks/useAuth";
import Settings from "./Settings";
import TopBarLink from "./TopBarLink";


const AppBarCustomized = styled(AppBar)(({ theme }) => ({
  minHeight: 65,
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

const TopBar = () => {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <AppBarCustomized>
      <Toolbar>
        <Link sx={{ display: { md: "none" } }} to="/">
          <Logo />
        </Link>
        <Box ml={2} flexGrow={1} />
        <Settings />
        <Box ml={2}>
          <TopBarLink user={user} login={location.pathname === "/login"} />
        </Box>
      </Toolbar>
    </AppBarCustomized>
  );
};
export default TopBar;
