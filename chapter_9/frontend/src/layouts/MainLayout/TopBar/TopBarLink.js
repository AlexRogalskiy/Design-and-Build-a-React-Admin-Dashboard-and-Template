import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import Account from "./Account";

const LinkCustomized = styled(Link)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  color: "white",
  "& + &": {
    marginLeft: theme.spacing(2),
  },
}));

const TopBarLink = ({ user = null, login = false }) => {
  if (user) return <Account />;

  if (!login)
    return (
      <LinkCustomized
        color="textSecondary"
        component={RouterLink}
        to="/login"
        underline="none"
        variant="h4"
      >
        Login
      </LinkCustomized>
    );

  return (
    <LinkCustomized
      color="textSecondary"
      component={RouterLink}
      to="/register"
      underline="none"
      variant="h4"
    >
      Register
    </LinkCustomized>
  );
};

export default TopBarLink;
