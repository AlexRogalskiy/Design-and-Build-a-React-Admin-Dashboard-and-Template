import PropTypes from "prop-types";
import moment from "moment";
import {
  Avatar,
  AvatarGroup,
  IconButton,
  ListItem,
  ListItemText,
  Tooltip,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Fragment } from "react";

const ActivityItem = ({ activity }) => {
  let time = "N/A";

  if (activity.time) {
    const now = moment();
    const deadlineMoment = moment(activity.time);
    time = `${now.diff(deadlineMoment, "day")} days ago`;
  }

  return (
    <ListItem divider={true}>
      <ListItemText
        primary={activity.title}
        primaryTypographyProps={{ variant: "h6", noWrap: true }}
        secondary={
          <Fragment>
            <i>{time}</i>
            <br />
            {activity.project.name}
          </Fragment>
        }
      />
      <AvatarGroup max={3}>
        {activity.members.map((member) => (
          <Tooltip key={member.name} title="View">
            <Avatar src={member.avatar} />
          </Tooltip>
        ))}
      </AvatarGroup>
      <Tooltip title="View activity">
        <IconButton sx={{ marginLeft: (theme) => theme.spacing(2) }} edge="end">
          <OpenInNewIcon
            fontSize="small"
            sx={{ color: (theme) => theme.palette.text.primary }}
          />
        </IconButton>
      </Tooltip>
    </ListItem>
  );
};

ActivityItem.propTypes = {
  activity: PropTypes.object.isRequired,
};

export default ActivityItem;
