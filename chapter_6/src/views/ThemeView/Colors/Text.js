import { Grid } from "@mui/material";
import { PaperCustomized, ColorText } from "views/ThemeView";
import useSetting from "hooks/useSetting";

const Text = () => {
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
            backgroundColor: (theme) => theme.palette.text.primary,
            ...(settings.theme === "LIGHT"
              ? { color: "white" }
              : { color: "black" }),
          }}
        >
          {settings.theme === "LIGHT" ? "#263238" : "#e6e5e8"}
        </PaperCustomized>
        <ColorText variant="h6" color="textSecondary">
          Text Primary
        </ColorText>
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <PaperCustomized
          sx={{
            backgroundColor: (theme) => theme.palette.text.secondary,
            ...(settings.theme === "LIGHT"
              ? { color: "white" }
              : { color: "black" }),
          }}
        >
          {settings.theme === "LIGHT" ? "#546e7a" : "#adb0bb"}
        </PaperCustomized>
        <ColorText variant="h6" color="textSecondary">
          Text Secondary
        </ColorText>
      </Grid>
      <Grid item xs={2} sm={4} md={4}></Grid>
    </Grid>
  );
};

export default Text;
