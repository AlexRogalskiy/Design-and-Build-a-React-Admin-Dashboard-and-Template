import { useCallback, useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Divider,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import axios from "utils/axios";
import getInitials from "utils/getInitials";
import useIsMountedRef from "hooks/useIsMountedRef";
import GenericMoreButton from "components/GenericMoreButton";

const LatestProjects = () => {
  const isMountedRef = useIsMountedRef();
  const [projects, setProjects] = useState([]);

  const getProjects = useCallback(async () => {
    try {
      const response = await axios.get("/api/latest-projects");
      return response.data.projects;
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  const setProjectState = async () => {
    let pts = await getProjects();
    setProjects(pts);
  };

  useEffect(() => {
    if (isMountedRef.current) {
      setProjectState();
    }
  }, []);

  return (
    <Card>
      <CardHeader action={<GenericMoreButton />} title="Projects" />
      <Divider />

      <Box minWidth={900}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Budget</TableCell>
              <TableCell>Manager</TableCell>
              <TableCell align="right" sortDirection="desc">
                <Tooltip enterDelay={300} title="Sort">
                  <TableSortLabel active direction="desc">
                    Created
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow hover key={project.id}>
                <TableCell>{project.title}</TableCell>
                <TableCell>
                  {numeral(project.budget).format(`${project.currency}0,0.00`)}
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar alt="Author" src={project.author.avatar}>
                      {getInitials(project.author.name)}
                    </Avatar>
                    <Box sx={{ marginLeft: (theme) => theme.spacing(1) }}>
                      {project.author.name}
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  {moment(project.createdAt).format("DD MMM, YYYY")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      <Box p={2} display="flex" justifyContent="flex-end">
        <Button
          component={RouterLink}
          size="small"
          to="/app/projects"
          endIcon={<NavigateNextIcon />}
          color="secondary"
        >
          See all
        </Button>
      </Box>
    </Card>
  );
};

export default LatestProjects;
