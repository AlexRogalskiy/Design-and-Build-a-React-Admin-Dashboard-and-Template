import { useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { Button, Collapse, List, ListItem, ListSubheader } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: theme.spacing(1.25),
  justifyContent: "flex-start",
  textTransform: "none",
  letterSpacing: 0,
  width: "100%",
  fontWeight: theme.typography.fontWeightMedium,
}));

const NavList = ({ section }) => {
  const [open, setOpen] = useState(
    section.header === "Dashboard" ? true : false
  );

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <List
      key={section.header}
      subheader={
        <ListSubheader disableGutters disableSticky>
          <NavButton onClick={handleToggle}>
            {section.header}
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </NavButton>
        </ListSubheader>
      }
    >
      <Collapse in={open}>
        <List disablePadding>
          {section.items.map((item) => {
            return (
              <ListItem
                sx={{ display: "flex", paddingTop: 0, paddingBottom: 0 }}
                disableGutters
                key={item.title}
              >
                <NavButton
                  component={RouterLink}
                  to={item.href}
                  sx={{
                    paddingLeft: (theme) => theme.spacing(3),
                  }}
                >
                  <span>{item.title}</span>
                </NavButton>
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </List>
  );
};

export default NavList;
