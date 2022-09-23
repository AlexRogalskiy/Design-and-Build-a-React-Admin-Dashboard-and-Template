import { Grid } from "@mui/material";
import Brief from "./Brief";
import Members from "./Members";

const Overview = ({ project }) => {
  return (
    <Grid container spacing={3}>
      <Grid item lg={8} xl={9} xs={12}>
        <Brief project={project} />
      </Grid>
      <Grid item lg={4} xl={3} xs={12}>
        <Members members={project.members} />
      </Grid>
    </Grid>
  );
};

export default Overview;
