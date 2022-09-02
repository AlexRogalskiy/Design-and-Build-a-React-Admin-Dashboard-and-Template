import { useState } from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  Chip,
  FormHelperText,
  IconButton,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const ProjectTags = ({ onBack, onNext, dispatch, state }) => {
  const [tag, setTag] = useState("");

  return (
    <Formik
      initialValues={{
        tags: state.tags || [],
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        tags: Yup.array(),
      })}
      onSubmit={async (values, { setStatus }) => {
        try {
          // dispatch
          dispatch({
            type: "TAGS",
            payload: {
              tags: values.tags,
            },
          });

          // make API call

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
        status,
        errors,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        touched,
        values,
      }) => (
        <form onSubmit={handleSubmit}>
          <Typography variant="h3" color="textPrimary">
            Project tags
          </Typography>
          <Box mt={2}>
            <Typography variant="subtitle1" color="textSecondary">
              Please provide the project tags.
            </Typography>
          </Box>
          <Box mt={2}>
            <Box mt={3} display="flex" alignItems="center">
              <TextField
                error={Boolean(touched.tags && errors.tags)}
                fullWidth
                label="Tags"
                name="tags"
                value={tag}
                onChange={(event) => setTag(event.target.value)}
                variant="outlined"
              />
              <IconButton
                sx={{ marginLeft: (theme) => theme.spacing(2) }}
                onClick={() => {
                  if (!tag) {
                    return;
                  }

                  setFieldValue("tags", [...values.tags, tag]);
                  setTag("");
                }}
              >
                <SvgIcon>
                  <AddCircleIcon />
                </SvgIcon>
              </IconButton>
            </Box>
            <Box mt={2}>
              {values.tags.map((tag, i) => (
                <Chip
                  variant="outlined"
                  key={i}
                  label={tag}
                  sx={{
                    "& + &": {
                      marginLeft: (theme) => theme.spacing(1),
                    },
                  }}
                  onDelete={() => {
                    const newTags = values.tags.filter((t) => t !== tag);

                    setFieldValue("tags", newTags);
                  }}
                />
              ))}
            </Box>
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
              Complete
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

ProjectTags.propTypes = {
  onNext: PropTypes.func,
  onBack: PropTypes.func,
};

ProjectTags.defaultProps = {
  onNext: () => {},
  onBack: () => {},
};

export default ProjectTags;
