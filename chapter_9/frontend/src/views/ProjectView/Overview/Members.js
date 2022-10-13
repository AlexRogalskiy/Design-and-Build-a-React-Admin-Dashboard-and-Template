import PropTypes from "prop-types";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import getInitials from "utils/getInitials";

const Members = ({ members }) => {
  return (
    <Card>
      <CardHeader title="Members" variant="h5" />
      <Divider />
      <CardContent>
        <List>
          {members.map((member, index) => (
            <ListItem disableGutters key={index}>
              <ListItemAvatar>
                <Avatar alt="Author" src={member.avatar}>
                  {getInitials(member.name)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={member.name}
                primaryTypographyProps={{ variant: "body1" }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="secondary" type="submit" variant="contained" fullWidth>
          Manage members
        </Button>
      </CardActions>
    </Card>
  );
};

Members.propTypes = {
  members: PropTypes.array.isRequired,
};

export default Members;
