import { Card, CardContent, Stack, Typography } from "@mui/material";
import useCalendar from "../hooks/FetchCalendar";
import { defaultPadding, defaultSpacing } from "../styling/ThemeConstants";

function SportView() {
  const { events } = useCalendar();
  return (
    <Stack padding={defaultPadding} spacing={defaultSpacing}>
      {events.map((event) => (
        <Card key={event.title}>
          <CardContent>
            <Typography>{event.title}</Typography>
            <Typography>{event.start.toLocaleString("sv-se") + "-" + event.end.toLocaleTimeString("sv-se")}</Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  )
}
export default SportView;