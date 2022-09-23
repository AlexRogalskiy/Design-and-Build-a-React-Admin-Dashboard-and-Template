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
import JWTRegister from "./JWTRegister";



const RegisterView = () => {
  return (
    <Page title="Kiki: Login">
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
                  Register
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Register an account to use Kiki
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
              <JWTRegister />
            </Box>
            <Box my={3}>
              <Divider />
            </Box>
            <Link
              component={RouterLink}
              to="/login"
              variant="body2"
              color="textSecondary"
            >
              Already having an account?
            </Link>
          </CardContent>
        </Card>
      </Box>
    </Page>
  );
};

export default RegisterView;
