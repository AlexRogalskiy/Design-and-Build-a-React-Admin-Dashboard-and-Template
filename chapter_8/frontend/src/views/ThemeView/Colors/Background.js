import { Grid } from "@mui/material";
import useSetting from "hooks/useSetting";
import {PaperCustomized, ColorText} from "views/ThemeView";

const Background = () => {
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
            backgroundColor: (theme) => theme.palette.background.default,
          }}
        >
          {settings.theme === "LIGHT" ? "#E8EAF6" : "#616161"}
        </PaperCustomized>
        <ColorText variant="h6" color="textSecondary">
          Background Default
        </ColorText>
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <PaperCustomized
          sx={{
            backgroundColor: (theme) => theme.palette.background.dark,
          }}
        >
          {settings.theme === "LIGHT" ? "#f4f6f8" : "#424242"}
        </PaperCustomized>
        <ColorText variant="h6" color="textSecondary">
          Background Dark
        </ColorText>
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <PaperCustomized
          sx={{
            backgroundColor: (theme) => theme.palette.background.paper,
          }}
        >
          {settings.theme === "LIGHT" ? "#fff" : "#757575"}
        </PaperCustomized>
        <ColorText variant="h6" color="textSecondary">
          Background Paper
        </ColorText>
      </Grid>
    </Grid>
  );
};

export default Background;
