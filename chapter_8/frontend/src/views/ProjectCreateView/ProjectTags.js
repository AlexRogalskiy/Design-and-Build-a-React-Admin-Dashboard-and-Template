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
import axios from "utils/axios";
import useAuth from "hooks/useAuth";
import formatDate from "utils/time";

const ProjectTags = ({ onBack, onNext, dispatch, state }) => {
  const { user } = useAuth();
  const [tag, setTag] = useState("");

  return (
    <Formik
      initialValues={{
        tags: state.tags || [],
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
          const response = await axios.post(
            process.env.REACT_APP_BACKEND_URL + "/api/projects",
            {
              ...state,
              image: "/static/images/projects/project_1.jpg",
              user,
              membersCount: 1,
              author: {
                name: user.name,
                avatar: user.avatar,
              },
              members: [
                {
                  avatar: user.avatar,
                  name: user.name,
                },
              ],
              activities: [
                {
                  _id: "e7ef-e190-4610-82ab-38e4-bdfe",
                  createdAt: formatDate(new Date()),
                  description: "created the project",
                  subject: "Project manager",
                  type: "item_created",
                },
              ],
            }
          );

          if (onNext && response.data) {
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
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};

export default ProjectTags;
