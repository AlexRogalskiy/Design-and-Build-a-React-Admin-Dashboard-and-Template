import * as Yup from "yup";
import { Formik } from "formik";
import { Alert, Box, Button, TextField } from "@mui/material";
import useAuth from "hooks/useAuth";

const JWTLogin = () => {
  const { login } = useAuth();

  return (
    <Formik
      initialValues={{
        email: "demo@kiki.cat",
        password: "pasword123",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email("Must be a valid email").required("Required"),
        password: Yup.string().required("Required"),
      })}
      onSubmit={async (values) => {
        await login(values.email, values.password);
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <form onSubmit={handleSubmit}>
          <TextField
            error={Boolean(touched.email && errors.email)}
            fullWidth
            autoFocus
            helperText={touched.email && errors.email}
            label="Email Address"
            margin="normal"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            value={values.email}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.password && errors.password)}
            fullWidth
            helperText={touched.password && errors.password}
            label="Password"
            margin="normal"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <Box mt={2}>
            <Button
              color="secondary"
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Log In
            </Button>
          </Box>
          <Box mt={2}>
            <Alert severity="info">
              <div>
                Use <b>demo@kiki.cat</b> and password <b>pasword123</b>
              </div>
            </Alert>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default JWTLogin;
