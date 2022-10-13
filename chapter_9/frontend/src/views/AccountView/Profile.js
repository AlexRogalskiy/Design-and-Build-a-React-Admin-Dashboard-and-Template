import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

const Profile = ({ user }) => {
  return (
    <Card>
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          textAlign="center"
        >
          <Avatar sx={{ width: 100, height: 100 }} src={user.avatar} />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="body1"
            sx={{ marginTop: (theme) => theme.spacing(1) }}
          >
            {user.name}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="secondary"
          type="submit"
          variant="contained"
          fullWidth
        >
          Update picture
        </Button>
      </CardActions>
    </Card>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Profile;
