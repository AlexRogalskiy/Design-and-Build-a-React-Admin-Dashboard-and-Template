import { useState, useRef, memo } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Grid,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  Pagination,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ProjectCard from "./ProjectCard";

const TypographyCustomized = styled(Typography)(({ theme }) => ({
  position: "relative",
  "&:after": {
    position: "absolute",
    bottom: -8,
    left: 0,
    content: '" "',
    height: 3,
    width: 48,
    backgroundColor: theme.palette.primary.main,
  },
}));

const ButtonCustomized = styled(Button)(({ theme }) => ({
  textTransform: "none",
  letterSpacing: 0,
  marginRight: theme.spacing(2),
}));

const Results = ({ projects }) => {
  const sortRef = useRef(null);
  const [openSort, setOpenSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Most popular");

  const handleSortOpen = () => {
    setOpenSort(true);
  };

  const handleSortClose = () => {
    setOpenSort(false);
  };

  const handleSortSelect = (value) => {
    setSelectedSort(value);
    setOpenSort(false);
  };

  return (
    <div>
      <Menu
        anchorEl={sortRef.current}
        onClose={handleSortClose}
        open={openSort}
        elevation={1}
      >
        {["Most recent", "Start time", "Budget high", "Budget low"].map(
          (option) => (
            <MenuItem key={option} onClick={() => handleSortSelect(option)}>
              <ListItemText primary={option} />
            </MenuItem>
          )
        )}
      </Menu>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        mb={2}
      >
        <TypographyCustomized variant="h5" color="textPrimary">
          {projects.length} projects in total
        </TypographyCustomized>
        <Box display="flex" alignItems="center">
          <ButtonCustomized onClick={handleSortOpen} ref={sortRef}>
            {selectedSort}
            <ArrowDropDownIcon />
          </ButtonCustomized>
        </Box>
      </Box>
      <Grid container spacing={5}>
        {projects.map((project) => (
          <Grid item key={project.id} lg={4} md={6} sm={6} xs={12}>
            <ProjectCard project={project}/>
          </Grid>
        ))}
      </Grid>
      <Box mt={6} display="flex" justifyContent="center">
        <Pagination count={3} />
      </Box>
    </div>
  );
};

Results.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default memo(Results);
