import PropTypes from "prop-types";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormHelperText,
} from "@mui/material";

const ProjectBasics = ({ onNext, dispatch, state }) => {
  return (
    <Formik
      initialValues={{
        title: state.title || "",
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(255)
          .required("Required"),
      })}
      onSubmit={async (values, { setStatus }) => {
        try {
          // dispatch
          dispatch({
            type: "TITLE",
            payload: {
              title: values.title,
            },
          });

          if (onNext) {
            onNext();
          }
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
          <Typography variant="h3" color="textPrimary">
            Basic project information
          </Typography>
          <Box mt={2}>
            <Typography variant="subtitle1" color="textSecondary">
              Please provide the project title.
            </Typography>
          </Box>
          <Box mt={2}>
            <TextField
              error={Boolean(touched.title && errors.title)}
              fullWidth
              helperText={touched.title && errors.title}
              label="Project Title"
              name="title"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.title}
              variant="outlined"
            />
            {status && (
              <Box mt={2}>
                <FormHelperText error>{status}</FormHelperText>
              </Box>
            )}
          </Box>
          <Box mt={6} display="flex">
            <Box flexGrow={1} />
            <Button
              color="secondary"
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              size="large"
            >
              Next
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

ProjectBasics.propTypes = {
  onNext: PropTypes.func,
};

ProjectBasics.defaultProps = {
  onNext: () => {},
};

export default ProjectBasics;
