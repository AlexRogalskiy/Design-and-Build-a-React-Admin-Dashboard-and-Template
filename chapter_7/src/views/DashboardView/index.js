import { Card, Avatar, Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Page from "components/Page";
import Header from "./Header";
import LatestProjects from "./LatestProjects";
import Projects from "./Projects";
import Revenue from "./Revenue";
import Analytics from "./Analytics";
import Balance from "./Balance";
import Progress from "./Progress";
import Activities from "./Activities";
import Earnings from "./Earnings";


export const CardLight = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const CardDark = styled(Card)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(3),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const AvatarLight = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.contrastText,
  color: theme.palette.secondary.main,
  height: 48,
  width: 48,
}));

export const AvatarDark = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  height: 48,
  width: 48,
}));


const DashboardView = () => {
  return (
    <Page title="Kiki: Dashboard">
      <Container maxWidth="xl">
        <Header />
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xs={12}>
            <Earnings />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Balance />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Progress />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Projects />
          </Grid>
          <Grid item lg={5} xs={12}>
            <Activities />
          </Grid>
          <Grid item lg={7} xs={12}>
            <Revenue />
          </Grid>
          <Grid item lg={7} xl={8} xs={12}>
            <LatestProjects />
          </Grid>
          <Grid item lg={5} xl={4} xs={12}>
            <Analytics />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default DashboardView;
