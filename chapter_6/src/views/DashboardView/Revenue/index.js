import { useState, useEffect } from "react";
import { Box, Card, CardHeader, CardContent, Divider } from "@mui/material";
import GenericMoreButton from "components/GenericMoreButton";
import useIsMountedRef from "hooks/useIsMountedRef";
import axios from "utils/axios";
import Chart from "./Chart";

const Revenue = () => {
  const isMountedRef = useIsMountedRef();
  const [revenue, setRevenue] = useState({ data: [], labels: [] });

  const getRevenue = async () => {
    try {
      const response = await axios.get("/api/revenue");
      if (isMountedRef.current) setRevenue(response.data.revenue);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getRevenue();
  }, []);

  return (
    <Card>
      <CardHeader action={<GenericMoreButton />} title="Revenue over time" />
      <Divider />
      <CardContent>
        <Box height={433} minWidth={500}>
          <Chart dataProp={revenue.data} labels={revenue.labels} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Revenue;
