import PropTypes from "prop-types";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  FormHelperText,
} from "@mui/material";
import wait from "utils/wait";

const ProfileSettings = ({ user }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().max(255).required("Required"),
        email: Yup.string()
          .email("Must be a valid email")
          .required("Required"),
        phone: Yup.string(),
      })}
      onSubmit={async (values, { resetForm, setStatus }) => {
        try {
          // NOTE: make an API request
          await wait(200);
          resetForm();
        } catch (err) {
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
            <CardHeader title="Profile Setting" />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <Box>
                    <TextField
                      error={Boolean(touched.name && errors.name)}
                      fullWidth
                      helperText={touched.name && errors.name}
                      label="Name"
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      variant="outlined"
                    />
                  </Box>
                  <Box mt={2}>
                    <TextField
                      error={Boolean(touched.phone && errors.phone)}
                      fullWidth
                      helperText={touched.phone && errors.phone}
                      label="Phone Number"
                      name="phone"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.phone}
                      variant="outlined"
                    />
                  </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={
                      touched.email && errors.email
                        ? errors.email
                        : "We will use this email to contact you"
                    }
                    label="Email Address"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    type="email"
                    value={values.email}
                    variant="outlined"
                  />
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
                Update
              </Button>
            </Box>
          </Card>
        </form>
      )}
    </Formik>
  );
};

ProfileSettings.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ProfileSettings;
