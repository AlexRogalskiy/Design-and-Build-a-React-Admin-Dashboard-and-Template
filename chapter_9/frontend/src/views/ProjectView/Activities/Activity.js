import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";
import { Avatar, Card, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import UpdateIcon from "@mui/icons-material/Update";
import PersonAddIcon from "@mui/icons-material/PersonAddOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DashboardIcon from "@mui/icons-material/DashboardOutlined";

const RootDiv = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: theme.spacing(2),
}));

const avatarsMap = {
  update_project: UpdateIcon,
  join_project: PersonAddIcon,
  budget_change: AttachMoneyIcon,
  item_created: DashboardIcon,
};

const Activity = ({ activity }) => {
  const ActivityAvatar = avatarsMap[activity.type];

  return (
    <RootDiv>
      <Avatar
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          color: (theme) => theme.palette.secondary.contrastText,
        }}
      >
        <ActivityAvatar />
      </Avatar>
      <Card
        sx={{
          marginLeft: (theme) => theme.spacing(2),
          flexGrow: 1,
          display: "flex",
          padding: (theme) => theme.spacing(2),
          alignItems: "center",
        }}
      >
        <Typography variant="body1" color="textPrimary">
          <Link color="textPrimary" component={RouterLink} to="#" variant="h6">
            {activity.subject}
          </Link>{" "}
          {activity.description}
        </Typography>
        <Typography
          sx={{ marginLeft: "auto", flexShrink: 0 }}
          variant="caption"
        >
          {moment(activity.createdAt).fromNow()}
        </Typography>
      </Card>
    </RootDiv>
  );
};

Activity.propTypes = {
  activity: PropTypes.object.isRequired,
};

export default Activity;
