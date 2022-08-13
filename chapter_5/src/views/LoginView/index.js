import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import Page from "components/Page";
import JWTLogin from "./JWTLogin";


const LoginView = () => {
  return (
    <Page title="Login">
      <Box sx={{ maxWidth: 560, margin: "auto", marginTop: 5 }}>
        <Card>
          <CardContent
            sx={{
              padding: (theme) => theme.spacing(4),
              display: "flex",
              flexDirection: "column",
              minHeight: 400,
            }}
          >
            <Box
              alignItems="center"
              display="flex"
              justifyContent="space-between"
              mb={3}
            >
              <div>
                <Typography color="textPrimary" gutterBottom variant="h2">
                  Log in
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Log in to use Kiki
                </Typography>
              </div>
              <div
                style={{
                  height: 40,
                  "& > img": {
                    width: "auto",
                    maxHeight: "100%",
                  },
                }}
              >
                <img alt="Kiki" src="/static/images/logo.png" height="40" />
              </div>
            </Box>
            <Box flexGrow={1} mt={3}>
              <JWTLogin />
            </Box>
            <Box my={3}>
              <Divider />
            </Box>
            <Link
              component={RouterLink}
              to="/register"
              variant="body2"
              color="textSecondary"
            >
              Don't have an account yet?
            </Link>
          </CardContent>
        </Card>
      </Box>
    </Page>
  );
};

export default LoginView;
