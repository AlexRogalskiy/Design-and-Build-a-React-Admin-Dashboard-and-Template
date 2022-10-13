import { Box, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Label from "components/Label";
import { CardLight, AvatarDark } from ".";

const Earnings = () => {
  const data = {
    value: "3,428",
    currency: "$",
    difference: -7.3,
  };

  return (
    <CardLight>
      <Box flexGrow={1}>
        <Typography
          component="h3"
          gutterBottom
          variant="overline"
          color="textSecondary"
        >
          Earnings
        </Typography>
        <Box display="flex" alignItems="center" flexWrap="wrap">
          <Typography
            variant="h3"
            color="textPrimary"
            sx={{ marginRight: (theme) => theme.spacing(1) }}
          >
            {data.currency}
            {data.value}
          </Typography>
          <Label color={data.difference > 0 ? "success" : "error"}>
            {data.difference > 0 ? "+" : ""}
            {data.difference}%
          </Label>
        </Box>
      </Box>
      <AvatarDark>
        <AttachMoneyIcon />
      </AvatarDark>
    </CardLight>
  );
};

export default Earnings;
