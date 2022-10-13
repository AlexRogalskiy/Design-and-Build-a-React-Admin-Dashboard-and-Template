import { Box, Card, LinearProgress, Typography } from "@mui/material";


const Progress = () => {
  const data = {
    value: 72,
  };

  return (
    <Card sx={{ padding: 3 }}>
      <Typography
        component="h3"
        gutterBottom
        variant="overline"
        color="textSecondary"
      >
        Progress
      </Typography>
      <Box display="flex" alignItems="center" flexWrap="wrap">
        <Typography variant="h3" color="textPrimary">
          {data.value}%
        </Typography>
        <LinearProgress
          value={data.value}
          color="secondary"
          variant="determinate"
          sx={{
            margin: (theme) => theme.spacing(0, 1),
            flexGrow: 1,
          }}
        />
      </Box>
    </Card>
  );
};

export default Progress;
