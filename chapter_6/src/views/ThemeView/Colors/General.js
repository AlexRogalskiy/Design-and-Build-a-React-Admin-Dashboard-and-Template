import { Grid } from "@mui/material";
import useSetting from "hooks/useSetting";
import {PaperCustomized, ColorText} from "views/ThemeView";

const General = () => {
  const { settings } = useSetting();

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={2} sm={4} md={4}>
        <PaperCustomized
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            color: "white"
          }}
        >
          {settings.theme === "LIGHT" ? "#3949ab" : "#7986CB"}
        </PaperCustomized>
        <ColorText variant="h6" color="textSecondary">
          Primary
        </ColorText>
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <PaperCustomized
          sx={{
            backgroundColor: (theme) => theme.palette.secondary.main,
            color: "white"
          }}
        >
          {settings.theme === "LIGHT" ? "#5850EC" : "#B388FF"}
        </PaperCustomized>
        <ColorText variant="h6" color="textSecondary">
          Secondary
        </ColorText>
      </Grid>
      <Grid item xs={2} sm={4} md={4}></Grid>
    </Grid>
  );
};

export default General;
