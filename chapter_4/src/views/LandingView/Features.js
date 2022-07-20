import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ExtensionIcon from "@mui/icons-material/Extension";

const DivCustomized = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: "100vw",
  paddingTop: 128,
  paddingBottom: 128,
}));

const AvatarCustomized = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
}));

const Features = () => {
  return (
    <DivCustomized>
      <Container maxWidth="lg">
        <Typography component="p" variant="h6" color="secondary" align="center">
          EXPLORE KIKI
        </Typography>
        <Box mt={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box display="flex">
                <AvatarCustomized>
                  <AccountTreeIcon />
                </AvatarCustomized>
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Built to scale
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                    Kiki is built with the scalability in mind. Key
                    functionalities such as routing and authentication can be
                    easily extended.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box display="flex">
                <AvatarCustomized>
                  <FlashOnIcon />
                </AvatarCustomized>
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Optimized to perform
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                    As a lightweight admin template, Kiki is optimized in every
                    component, every rendering and every backend API call.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box display="flex">
                <AvatarCustomized>
                  <ExtensionIcon />
                </AvatarCustomized>
                <Box ml={2}>
                  <Typography variant="h4" gutterBottom color="textPrimary">
                    Support for plugins
                  </Typography>
                  <Typography variant="body1" color="textPrimary" gutterBottom>
                    Kiki supports multiple popular third-party plugins such as
                    React Router, Chart.js, and JSON Web Token.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </DivCustomized>
  );
};

export default Features;
