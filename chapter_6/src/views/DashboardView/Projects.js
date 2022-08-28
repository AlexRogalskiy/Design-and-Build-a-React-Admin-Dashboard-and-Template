import { Box, Typography } from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { CardDark, AvatarLight } from ".";


const Projects = () => {
  const data = {
    value: 15,
  };

  return (
    <CardDark>
      <Box flexGrow={1}>
        <Typography
          component="h3"
          gutterBottom
          variant="overline"
          color="inherit"
        >
          Projects
        </Typography>
        <Box display="flex" alignItems="center" flexWrap="wrap">
          <Typography variant="h3" color="inherit">
            {data.value}
          </Typography>
        </Box>
      </Box>
      <AvatarLight>
        <FolderOpenIcon />
      </AvatarLight>
    </CardDark>
  );
};

export default Projects;
