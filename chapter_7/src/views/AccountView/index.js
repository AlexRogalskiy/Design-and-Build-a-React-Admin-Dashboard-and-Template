import { Grid, Container } from "@mui/material";
import useAuth from "hooks/useAuth";
import Page from "components/Page";
import Header from "./Header";
import Profile from "./Profile";
import ProfileSettings from "./ProfileSettings";
import PasswordForm from "./PasswordForm";

const AccountView = () => {
  const { user } = useAuth();

  return (
    <Page title="Kiki: Account">
      <Container maxWidth="xl">
        <Header />
        <Grid container spacing={3}>
          <Grid item xl={9} lg={8} md={12} sm={12} xs={12}>
            <ProfileSettings user={user} />
            <br />
            <PasswordForm />
          </Grid>
          <Grid item xl={3} lg={4} md={12} sm={12} xs={12}>
            <Profile user={user} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default AccountView;
