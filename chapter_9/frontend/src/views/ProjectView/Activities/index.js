import PropTypes from "prop-types";
import moment from "moment";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Activity from "./Activity";

const TypographyCustomized = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const GroupDiv = styled("div")(({ theme }) => ({
  "& + &": {
    marginTop: theme.spacing(4),
  },
}));

const ActivityCustomized = styled(Activity)(({ theme }) => ({
  position: "relative",
  "& + &": {
    marginTop: theme.spacing(3),
    "&:before": {
      position: "absolute",
      content: '" "',
      height: 20,
      width: 1,
      top: -20,
      left: 20,
      backgroundColor: theme.palette.divider,
    },
  },
}));

const Activities = ({ activities }) => {
  const todayItems = [];
  const lastWeekItems = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const activity of activities) {
    if (moment(activity.createdAt).isSame(moment(), "week")) {
      todayItems.push(activity);
    } else {
      lastWeekItems.push(activity);
    }
  }

  return (
    <div>
      <TypographyCustomized variant="h3" color="textPrimary">
        This week
      </TypographyCustomized>
      <GroupDiv>
        {todayItems.map((activity) => (
          <ActivityCustomized activity={activity} key={activity.id} />
        ))}
      </GroupDiv>
      <GroupDiv>
        <TypographyCustomized variant="h3" color="textPrimary">
          Last week
        </TypographyCustomized>
        {lastWeekItems.map((activity) => (
          <ActivityCustomized activity={activity} key={activity.id} />
        ))}
      </GroupDiv>
    </div>
  );
};

Activities.propTypes = {
  activities: PropTypes.array.isRequired,
};

export default Activities;
