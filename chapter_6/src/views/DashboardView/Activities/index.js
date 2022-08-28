import { useState, useEffect } from "react";
import { Box, Card, CardHeader, Divider, List } from "@mui/material";
import axios from "utils/axios";
import useIsMountedRef from "hooks/useIsMountedRef";
import GenericMoreButton from "components/GenericMoreButton";
import ActivityItem from "./ActivityItem";

const Activities = () => {
  const isMountedRef = useIsMountedRef();
  const [activities, setActivities] = useState([]);

  const getActivities = async () => {
    try {
      const response = await axios.get("/api/latest-activities");
      setActivities(response.data.activities);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (isMountedRef.current) getActivities();
  }, []);

  return (
    <Card>
      <CardHeader action={<GenericMoreButton />} title="Activities" />
      <Divider />

      <Box minWidth={400}>
        <List>
          {activities.map((activity, i) => (
            <ActivityItem
              divider={i < activities.length - 1}
              key={activity.id}
              activity={activity}
            />
          ))}
        </List>
      </Box>
    </Card>
  );
};

export default Activities;
