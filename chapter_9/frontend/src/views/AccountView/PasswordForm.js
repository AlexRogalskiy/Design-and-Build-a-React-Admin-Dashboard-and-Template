import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormHelperText,
  Grid,
  TextField,
} from "@mui/material";
import wait from "utils/wait";

const PasswordForm = () => {
  return (
    <Formik
      initialValues={{
        passwordCurrent: "",
        password: "",
        passwordConfirm: "",
      }}
      validationSchema={Yup.object().shape({
        passwordCurrent: Yup.string().required("Required"),
        password: Yup.string()
          .min(6, "Must be at least 6 characters")
          .max(255)
          .required("Required"),
        passwordConfirm: Yup.string()
          .oneOf(
            [Yup.ref("password"), null],
            "Confirmation doesn't match the new password"
          )
          .required("Required"),
      })}
      onSubmit={async (values, { resetForm, setStatus }) => {
        try {
          // NOTE: Make API request
          await wait(500);
          resetForm();
        } catch (err) {
          console.error(err);
          setStatus(err.message);
        }
      }}
    >
      {({
        errors,
        status,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader title="Change Password" />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(
                      touched.passwordCurrent && errors.passwordCurrent
                    )}
                    fullWidth
                    helperText={
                      touched.passwordCurrent && errors.passwordCurrent
                    }
                    label="Current Password"
                    name="passwordCurrent"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.passwordCurrent}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <Box>
                    <TextField
                      error={Boolean(touched.password && errors.password)}
                      fullWidth
                      helperText={touched.password && errors.password}
                      label="New Password"
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="password"
                      value={values.password}
                      variant="outlined"
                    />
                  </Box>
                  <Box mt={2}>
                    <TextField
                      error={Boolean(
                        touched.passwordConfirm && errors.passwordConfirm
                      )}
                      fullWidth
                      helperText={
                        touched.passwordConfirm && errors.passwordConfirm
                      }
                      label="New Password Confirmation"
                      name="passwordConfirm"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="password"
                      value={values.passwordConfirm}
                      variant="outlined"
                    />
                  </Box>
                </Grid>
              </Grid>
              {status && (
                <Box mt={3}>
                  <FormHelperText error>{status}</FormHelperText>
                </Box>
              )}
            </CardContent>
            <Divider />
            <Box p={2} display="flex" justifyContent="flex-end">
              <Button
                color="secondary"
                disabled={isSubmitting}
                type="submit"
                variant="contained"
              >
                Confirm
              </Button>
            </Box>
          </Card>
        </form>
      )}
    </Formik>
  );
};

export default PasswordForm;
