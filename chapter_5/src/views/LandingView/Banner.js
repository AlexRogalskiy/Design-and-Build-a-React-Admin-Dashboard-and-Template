import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const DivCustomized = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  paddingTop: 200,
  paddingBottom: 200,
  [theme.breakpoints.down("md")]: {
    paddingTop: 60,
    paddingBottom: 60,
  },
  width: "100vw",
}));

const ImgCustomized = styled("img")(({ theme }) => ({
  height: 30,
  margin: theme.spacing(1),
  display: "inline-block",
}));

const Banner = () => {
  return (
    <DivCustomized>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
            >
              <Typography variant="h1" color="textPrimary">
                Kiki: React Admin Template & Dashboard
              </Typography>
              <Box mt={3}>
                <Typography variant="body1" color="textSecondary">
                  A lightweight React admin template that comes with ready-to-use and extensible 
                  components. Help you build beautiful, professional and scalable web applications.
                </Typography>
              </Box>
              <Box mt={3}>
                <Grid container spacing={3}>
                  <Grid item>
                    <Typography variant="h1" color="secondary">
                      2
                    </Typography>
                    <Typography variant="overline" color="textSecondary">
                      Themes
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h1" color="secondary">
                      11
                    </Typography>
                    <Typography variant="overline" color="textSecondary">
                      Demo Pages
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h1" color="secondary">
                      100+
                    </Typography>
                    <Typography variant="overline" color="textSecondary">
                      Components
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box mt={3}>
                <ImgCustomized
                  alt="React"
                  src="/static/images/react.png"
                  sx={{marginLeft: 0}}
                />
                <ImgCustomized
                  alt="Material-UI"
                  src="/static/images/materialUI.png"
                />
                <ImgCustomized
                  alt="Web JSON Token"
                  src="/static/images/jwt.png"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box position="relative">
              <Box
                sx={{
                  perspectiveOrigin: "left center",
                  transformStyle: "preserve-3d",
                  perspective: 2000,
                  "& > img": {
                    maxWidth: "90%",
                    height: "auto",
                    transform: "rotateY(-30deg) ",
                    backfaceVisibility: "hidden",
                    boxShadow: (theme) => theme.shadows[10],
                  },
                }}
              >
                <img alt="Presentation" src="/static/images/banner.png" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </DivCustomized>
  );
};

export default Banner;
