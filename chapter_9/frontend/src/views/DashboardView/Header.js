import { useRef, useState } from "react";
import {
  Button,
  Grid,
  Menu,
  MenuItem,
  SvgIcon,
  Typography,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const timeRanges = [
  {
    value: "today",
    text: "Today",
  },
  {
    value: "last_30_days",
    text: "Last 30 days",
  },
  {
    value: "last_year",
    text: "Last year",
  },
];

const Header = () => {
  const actionRef = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [timeRange, setTimeRange] = useState(timeRanges[2].text);

  return (
    <Grid container mt={3} mb={3} spacing={3} justifyContent="space-between">
      <Grid item>
        <Typography variant="h3" color="textPrimary">
          Dashboard
        </Typography>
      </Grid>
      <Grid item>
        <Button
          ref={actionRef}
          onClick={() => setMenuOpen(true)}
          startIcon={
            <SvgIcon fontSize="small">
              <CalendarTodayIcon />
            </SvgIcon>
          }
        >
          {timeRange}
        </Button>
        <Menu
          anchorEl={actionRef.current}
          onClose={() => setMenuOpen(false)}
          open={isMenuOpen}
          getcontentanchorel={null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          {timeRanges.map((_timeRange) => (
            <MenuItem
              key={_timeRange.value}
              onClick={() => setTimeRange(_timeRange.text)}
            >
              {_timeRange.text}
            </MenuItem>
          ))}
        </Menu>
      </Grid>
    </Grid>
  );
};

export default Header;
