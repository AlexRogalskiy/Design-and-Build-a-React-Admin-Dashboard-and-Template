import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import useIsMountedRef from "hooks/useIsMountedRef";
import axios from "utils/axios";
import Chart from "./Chart";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Analytics = () => {
  const isMountedRef = useIsMountedRef();
  const [data, setData] = useState({ visitors: [], pages: [] });

  const getData = async () => {
    try {
      const response = await axios.get("/api/analytics");
      setData(response.data.analytics);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (isMountedRef.current) getData();
  }, []);

  const updateData = () => {
    setTimeout(() => {
      setData((prevData) => {
        const newVisitors = [...prevData.visitors];
        newVisitors[newVisitors.length-1] = getRandomInt(50, 150);

        const newPages = [...prevData.pages];
        const randomPage = getRandomInt(0, newPages.length - 1);
        newPages[randomPage].views = getRandomInt(1, 30);

        return { visitors: newVisitors, pages: newPages };
      });
    }, 1600);
  };

  useEffect(() => {
    if (isMountedRef.current) setInterval(() => updateData(), 1600);
  }, []);

  return (
    <Card sx={{ minHeight: 547, marginBottom: (theme) => theme.spacing(3) }}>
      <CardHeader
        action={
          <Typography color="inherit" variant="h3">
            {data.visitors[data.visitors.length - 1]}
          </Typography>
        }
        sx={{
          marginRight: (theme) => theme.spacing(0.5),
        }}
        subheader="Real-time visitors"
        subheaderTypographyProps={{ color: "textSecondary", variant: "body2" }}
        title="Analytics"
        titleTypographyProps={{ color: "textPrimary", variant: "h5" }}
      />
      <Chart dataProp={data.visitors} labels={data.visitors.map((value, i) => i)} />
      <List>
        {data.pages.map((page) => (
          <ListItem divider key={page.pathname}>
            <ListItemText
              primary={page.pathname}
              primaryTypographyProps={{
                color: "textSecondary",
                variant: "body2",
              }}
            />
            <Typography color="inherit">{page.views}</Typography>
          </ListItem>
        ))}
      </List>
      <Box display="flex" justifyContent="flex-end">
        <Button
          component={RouterLink}
          color="secondary"
          size="small"
          to="#"
          endIcon={<NavigateNextIcon />}
        >
          See all
        </Button>
      </Box>
    </Card>
  );
};

export default Analytics;
