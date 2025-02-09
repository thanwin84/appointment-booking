import moment from 'moment';

import { Box, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

import { useSlots } from '@/api/queries';

export const BookSlotPage = () => {
  const { selectedDate, setSelectedDate, slots } = useSlots();

  return (
    <Box>
      <Typography variant="subtitle1">Book An Appointment</Typography>
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4">
            Choose a date and time to book an appointment
          </Typography>
          <DatePicker
            value={moment(selectedDate)}
            onChange={(value) => setSelectedDate(value ? value.toDate() : null)}
          />
        </Box>
        <Box>
          <Typography>Available slots:</Typography>
          <Box>
            {slots.map((slot) => (
              <Box key={slot._id}>
                <Typography>{slot.name}</Typography>
                <Typography>{slot.startTime}</Typography>
                <Typography>{slot.duration} minutes</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
