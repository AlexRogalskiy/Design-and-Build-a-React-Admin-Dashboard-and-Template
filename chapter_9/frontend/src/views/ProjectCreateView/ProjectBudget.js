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

const ProjectBudget = ({ onBack, onNext, dispatch, state }) => {
  return (
    <Formik
      initialValues={{
        budget: state.budget || 0,
      }}
      validationSchema={Yup.object().shape({
        budget: Yup.number().positive().required("Required"),
      })}
      onSubmit={async (values, { setStatus }) => {
        try {
          // dispatch
          dispatch({
            type: "BUDGET",
            payload: {
              budget: Number(values.budget),
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
            Project budget
          </Typography>
          <Box mt={2}>
            <Typography variant="subtitle1" color="textSecondary">
              Please provide the project budget.
            </Typography>
          </Box>
          <Box mt={2}>
            <TextField
              error={Boolean(touched.budget && errors.budget)}
              fullWidth
              helperText={touched.budget && errors.budget}
              label="Project budget"
              name="budget"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.budget}
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

ProjectBudget.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};

export default ProjectBudget;
