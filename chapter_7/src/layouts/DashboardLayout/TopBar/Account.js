import { useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  ButtonBase,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import useAuth from "hooks/useAuth";


const Account = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const { user, logout } = useAuth();
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      handleClose();
      await logout();
      navigate("/login", { replace: true });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpen}
        ref={ref}
      >
        <Avatar
          sx={{ height: 32, width: 32, marginRight: (theme) => theme.spacing(1) }}
          alt="User"
          src={user.avatar}
        />

        <Typography
          variant="h6"
          color="inherit"
          sx={{ display: { sm: "none", md: "block" } }}
        >
          {user.name ? user.name : user.email}
        </Typography>
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        keepMounted
        getcontentanchorel={null}
        anchorEl={ref.current}
        open={isOpen}
      >
        <MenuItem component={Link} to="/account">
          Account
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Account;
