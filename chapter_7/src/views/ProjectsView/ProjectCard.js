import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";
import numeral from "numeral";
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Divider,
  Link,
  SvgIcon,
  Typography,
} from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import getInitials from "utils/getInitials";

const ProjectCard = ({ project }) => {
  const url = `/projects/${project.id}`;
  
  return (
    <Card>
      <Box p={3}>
        <Link
          color="textPrimary"
          component={RouterLink}
          to={url}
          variant="h5"
        >
          <CardMedia
            sx={{
              height: 200,
              backgroundColor: (theme) => theme.palette.background.dark,
            }}
            image={project.image}
          />
        </Link>
        <Box display="flex" alignItems="center" mt={2}>
          <Avatar
            sx={{ width: 60, height: 60 }}
            alt="Author"
            src={project.author.avatar}
          >
            {getInitials(project.author.name)}
          </Avatar>
          <Box ml={2}>
            <Link
              color="textPrimary"
              component={RouterLink}
              to={url}
              variant="h5"
            >
              {project.title}
            </Link>
            <Typography variant="body2" color="textPrimary">
              Managed by{" "}
              <Link
                color="textSecondary"
                component={RouterLink}
                to="#"
                variant="h6"
              >
                {project.author.name}
              </Link>
            </Typography>
            <Typography
              sx={{ fontStyle: "italic" }}
              variant="body2"
              color="textSecondary"
            >
              Initiated {moment(project.createdAt).fromNow()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box pb={2} px={3}>
        <Typography color="textSecondary" variant="body2">
          {project.caption}
        </Typography>
      </Box>
      <Divider />
      <Box py={2} pl={2} pr={3} display="flex" alignItems="center">
        <Typography variant="subtitle2" color="textSecondary">
          {"Budget " +
            numeral(project.budget).format(`${project.currency}0,0.00`)}
        </Typography>{" "}
        <Box flexGrow={1} />{" "}
        <SvgIcon
          fontSize="small"
          color="action"
          sx={{
            marginLeft: (theme) => theme.spacing(2),
            marginRight: (theme) => theme.spacing(1),
          }}
        >
          <GroupIcon />
        </SvgIcon>
        <Typography variant="subtitle2" color="textSecondary">
          {project.membersCount}
        </Typography>
      </Box>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
