import { Link } from "react-router-dom";
import { Box, Container, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { THEMES } from "theme";


const DivCustomized = styled("div")(({ theme }) => ({
  color: "white",
  paddingTop: 100,
  paddingBottom: 100,
  ...(theme.name === THEMES.LIGHT
    ? {
        boxShadow: "none",
        backgroundColor: theme.palette.primary.main,
      }
    : {}),
  ...(theme.name === THEMES.DARK
    ? {
        backgroundColor: theme.palette.background.dark,
      }
    : {}),
  width: "100vw",
}));

const BoxBoldCustomized = styled(Box)(({theme}) => ({
  fontWeight: "bold",
  margin: theme.spacing(0.5),
}));

const BoxLightCustomized = styled(Box)(({theme}) => ({
  fontWeight: "lighter",
  margin: theme.spacing(0.5),
}));

const LinkCustomized = styled(Link)(() => ({
  color: "white",
  textDecoration: "none !important",
  fontWeight: "light",
}));

const ACustomized = styled("a")(() => ({
  color: "white",
  textDecoration: "none !important",
  fontWeight: "light",
}));

const FootBar = () => {
  return (
    <DivCustomized>
      <Container maxWidth="lg">
        <Box color="white">
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              <BoxBoldCustomized>Products</BoxBoldCustomized>
              <BoxLightCustomized>Product 1</BoxLightCustomized>
              <BoxLightCustomized>Product 2</BoxLightCustomized>
              <BoxLightCustomized>Product 3</BoxLightCustomized>
            </Grid>
            <Grid item xs={6} md={4}>
              <BoxBoldCustomized>Trust</BoxBoldCustomized>
              <BoxLightCustomized>
                <LinkCustomized to="#">Terms and Conditions</LinkCustomized>
              </BoxLightCustomized>
              <BoxLightCustomized>
                <LinkCustomized to="#">Privacy Policy</LinkCustomized>
              </BoxLightCustomized>
            </Grid>
            <Grid item xs={6} md={4}>
              <BoxBoldCustomized>Connect</BoxBoldCustomized>
              <BoxLightCustomized>
                <ACustomized
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </ACustomized>
              </BoxLightCustomized>
              <BoxLightCustomized>
                <ACustomized
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </ACustomized>
              </BoxLightCustomized>
              <BoxLightCustomized>
                <ACustomized
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </ACustomized>
              </BoxLightCustomized>
            </Grid>
          </Grid>
          <Typography variant="caption" display="block" sx={{margin: (theme) => theme.spacing(0.5)}}>
            2022 © Kiki
          </Typography>
        </Box>
      </Container>
    </DivCustomized>
  );
};

export default FootBar;
