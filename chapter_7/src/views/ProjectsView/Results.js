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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ProjectCard from "./ProjectCard";


const Results = ({ projects, setProjects }) => {
  const buttonRef = useRef(null);
  const [openSort, setOpenSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Most recent");

  const handleSortOpen = () => {
    setOpenSort(true);
  };

  const handleSortClose = () => {
    setOpenSort(false);
  };

  const handleSortSelect = (value) => {
    if (value === selectedSort) return;

    setSelectedSort(value);

    const newProjects = structuredClone(projects);
    if (value === "Most recent")
      newProjects.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
      });
    else if (value === "Budget high")
      newProjects.sort((a, b) => {
        return b.budget - a.budget;
      });
    else
      newProjects.sort((a, b) => {
        return a.budget - b.budget;
      });

    setProjects(newProjects);

    setOpenSort(false);
  };

  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        mb={2}
      >
        <Typography
          sx={{
            position: "relative",
            "&:after": {
              position: "absolute",
              bottom: -8,
              left: 0,
              content: '" "',
              height: 3,
              width: 48,
              backgroundColor: (theme) => theme.palette.primary.main,
            },
          }}
          variant="h5"
          color="textPrimary"
        >
          {projects.length} projects in total
        </Typography>
        <Button
          sx={{
            textTransform: "none",
            letterSpacing: 0,
            marginRight: (theme) => theme.spacing(2),
          }}
          onClick={handleSortOpen}
          ref={buttonRef}
        >
          {selectedSort}
          <ArrowDropDownIcon />
        </Button>
        <Menu
          anchorEl={buttonRef.current}
          onClose={handleSortClose}
          open={openSort}
          elevation={1}
        >
          {["Most recent", "Budget high", "Budget low"].map((option) => (
            <MenuItem key={option} onClick={() => handleSortSelect(option)}>
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Grid container spacing={5}>
        {projects.map((project) => (
          <Grid item key={project.id} lg={4} md={6} sm={6} xs={12}>
            <ProjectCard project={project} />
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
  setProjects: PropTypes.func.isRequired,
};

export default memo(Results);
