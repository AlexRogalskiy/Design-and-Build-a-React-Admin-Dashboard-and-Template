import { Box, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { CardDark, AvatarLight } from ".";


const Balance = () => {
  const data = {
    value: "2,537",
    currency: "$",
  };

  return (
    <CardDark>
      <Box flexGrow={1}>
        <Typography
          color="inherit"
          component="h3"
          gutterBottom
          variant="overline"
        >
          Balance
        </Typography>
        <Box display="flex" alignItems="center" flexWrap="wrap">
          <Typography color="inherit" variant="h3">
            {data.currency}
            {data.value}
          </Typography>
        </Box>
      </Box>
      <AvatarLight>
        <AttachMoneyIcon />
      </AvatarLight>
    </CardDark>
  );
};

export default Balance;
