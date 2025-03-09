import { Card, CardContent, Stack, Typography } from "@mui/material";
import useCalendar from "./UseCalendar";
import { defaultPadding, defaultSpacing } from "../styling/ThemeConstants";

function SportView() {
  const { events } = useCalendar();
  return (
    <Stack padding={defaultPadding} spacing={defaultSpacing}>
      {events.map((event) => (
        <Card key={event.uid}>
          <CardContent>
            <Stack alignItems={"center"}>
              <Typography>{"🏎" + event.title + " - " + event.location}</Typography>
              <Typography>{event.localizedStart + "-" + event.localizedEnd}</Typography>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  )
}
export default SportView;