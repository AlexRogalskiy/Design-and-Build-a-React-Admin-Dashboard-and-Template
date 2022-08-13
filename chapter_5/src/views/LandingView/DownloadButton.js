import { Box, Button, Container, Typography } from "@mui/material";
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

const DownloadButton = () => {
  return (
    <DivCustomized>
      <Container maxWidth="lg">
        <Typography
          component="p"
          variant="h6"
          color="secondary"
          align="center"
        >
          READY TO BUILD?
        </Typography>
        <Typography variant="h2" align="center" color="textPrimary">
          Kiki Helps You Build Faster
        </Typography>
        <Box mt={6} display="flex" justifyContent="center" alignItems="center">
          <Button color="secondary" component="a" href="#" variant="contained">
            Download Kiki
          </Button>
        </Box>
      </Container>
    </DivCustomized>
  );
};

export default DownloadButton;
