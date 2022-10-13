import { Link as RouterLink } from "react-router-dom";
import { Avatar, Box, Divider, Link } from "@mui/material";
import useAuth from "hooks/useAuth";
import NavData from "./NavData";
import NavList from "./NavList";

const Content = () => {
  const { user } = useAuth();

  return (
    <Box
      sx={{
        width: 256,
        marginTop: (theme) => theme.spacing(8),
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box p={2}>
        <Box display="flex" justifyContent="center">
          <RouterLink to="/account">
            <Avatar
              alt="User"
              sx={{
                cursor: "pointer",
                width: 64,
                height: 64,
              }}
              src={user.avatar}
            />
          </RouterLink>
        </Box>
        <Box
          sx={{ marginTop: (theme) => theme.spacing(0.25) }}
          textAlign="center"
        >
          <Link
            component={RouterLink}
            to="/account"
            variant="h5"
            color="textPrimary"
            underline="none"
          >
            {user.name}
          </Link>
        </Box>
      </Box>
      <Divider />
      <Box p={2}>
        {NavData.map((section, index) => (
          <NavList section={section} key={index}/>
        ))}
      </Box>
    </Box>
  );
};

export default Content;
