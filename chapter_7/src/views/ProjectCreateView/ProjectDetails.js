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

const ProjectDetails = ({ onBack, onNext, dispatch, state }) => {
  return (
    <Formik
      initialValues={{
        description: state.description || "",
      }}
      validationSchema={Yup.object().shape({
        description: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(255)
          .required("Required"),
      })}
      onSubmit={async (values, { setStatus }) => {
        try {
          // dispatch
          dispatch({
            type: "DESCRIPTION",
            payload: {
              description: values.description,
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
            Detailed project description
          </Typography>
          <Box mt={2}>
            <Typography variant="subtitle1" color="textSecondary">
              Please provide the project description.
            </Typography>
          </Box>
          <Box mt={2}>
            <TextField
              error={Boolean(touched.description && errors.description)}
              fullWidth
              multiline
              rows={4}
              helperText={touched.description && errors.description}
              label="Project description"
              name="description"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.description}
              variant="outlined"
            />
            {status && (
              <Box mt={2}>
                <FormHelperText error>{status}</FormHelperText>
              </Box>
            )}
          </Box>
          <Box mt={6} display="flex">
            {onBack && (
              <Button
                onClick={onBack}
                color="secondary"
                disabled={isSubmitting}
                type="submit"
                variant="contained"
                size="large"
              >
                Previous
              </Button>
            )}
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

ProjectDetails.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};

export default ProjectDetails;
