import { InfoOutlined } from '@mui/icons-material'
import {
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
  Tooltip,
} from '@mui/material'

interface IDayPickerProps extends SelectProps {}

const DayPicker = (props: IDayPickerProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs>
        <InputLabel id='day-picker'>Pick a day</InputLabel>
        <Select {...props} labelId='day-picker' label='Pick a day' fullWidth>
          <MenuItem value={0}>Monday</MenuItem>
          <MenuItem value={1}>Tuesday</MenuItem>
          <MenuItem value={2}>Wednesday</MenuItem>
          <MenuItem value={3}>Thursday</MenuItem>
          <MenuItem value={4}>Friday</MenuItem>
          <MenuItem value={5}>Saturday</MenuItem>
          <MenuItem value={6}>Sunday</MenuItem>
        </Select>
      </Grid>
      <Grid item>
        <Tooltip
          title='Every workday has peak prices between 7:00 and 21:00. 
        Please select a day and time so peak hours and considered in the calculation'
        >
          <InfoOutlined />
        </Tooltip>
      </Grid>
    </Grid>
  )
}

export default DayPicker
