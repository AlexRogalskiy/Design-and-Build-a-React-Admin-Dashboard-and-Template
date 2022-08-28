import { useRef, useState, memo } from "react";
import {
  ListItemIcon,
  ListItemText,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import RefreshIcon from "@mui/icons-material/Refresh";

const GenericMoreButton = (props) => {
  const moreRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <Tooltip title="More options">
        <IconButton onClick={handleMenuOpen} ref={moreRef} {...props}>
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={moreRef.current}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handleMenuClose}
        open={openMenu}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <RefreshIcon
              sx={{ color: (theme) => theme.palette.text.primary }}
            />
          </ListItemIcon>
          <ListItemText primary="Refresh" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <OpenInNewIcon
              sx={{ color: (theme) => theme.palette.text.primary }}
            />
          </ListItemIcon>
          <ListItemText primary="See more" />
        </MenuItem>
      </Menu>
    </>
  );
};

export default memo(GenericMoreButton);
