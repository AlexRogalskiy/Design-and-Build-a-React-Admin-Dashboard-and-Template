import { useState } from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Chip,
  Card,
  CardContent,
  Typography,
  Button,
  FormHelperText,
  IconButton,
  SvgIcon,
  TextField,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckIcon from "@mui/icons-material/Check";

const Brief = ({ project }) => {
  const [updateIcon, setUpdateIcon] = useState(false);
  const [tag, setTag] = useState("");

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        title: project.title || "",
        description: project.description || "",
        budget: project.budget || "",
        tags: project.tags || [],
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(255)
          .required("Required"),
        description: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(255)
          .required("Required"),
        budget: Yup.number().positive().required("Required"),
        tags: Yup.array(),
      })}
      onSubmit={async (values, { setStatus }) => {
        try {
          // update icon
          setUpdateIcon(true);
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
        setFieldValue,
        touched,
        values,
      }) => (
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Typography variant="h3" color="textPrimary">
                Project information
              </Typography>
              {updateIcon && (
                <Box mt={2} mb={2}>
                  <Typography variant="subtitle1" color="textSecondary">
                    <CheckIcon color="green" /> Updated{" "}
                  </Typography>
                </Box>
              )}
              <Box mt={2}>
                <Typography variant="subtitle1" color="textSecondary">
                  You can update the project information below
                </Typography>
              </Box>
              <Box mt={2}>
                <TextField
                  error={Boolean(touched.title && errors.title)}
                  fullWidth
                  helperText={touched.title && errors.title}
                  label="Project title"
                  name="title"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.title}
                  variant="outlined"
                />
              </Box>
              <Box mt={2}>
                <TextField
                  error={Boolean(touched.description && errors.description)}
                  fullWidth
                  helperText={touched.description && errors.description}
                  label="Project description"
                  name="description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.description}
                  variant="outlined"
                  multiline
                  rows={7}
                />
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
              </Box>
              <Box mt={3} display="flex" alignItems="center">
                <TextField
                  fullWidth
                  label="Tags"
                  name="tags"
                  value={tag}
                  onChange={(event) => setTag(event.target.value)}
                  onKeyPress={(event) => {
                    if (!tag || event.key !== "Enter") {
                      return;
                    }

                    setFieldValue("tags", [...values.tags, tag]);
                    setTag("");
                  }}
                  variant="outlined"
                />
                <IconButton
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
              <Box mt={6} display="flex">
                <Box flexGrow={1} />
                <Button
                  color="secondary"
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                  size="large"
                >
                  Update
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      )}
    </Formik>
  );
};

Brief.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Brief;
