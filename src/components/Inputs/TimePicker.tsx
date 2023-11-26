import { InfoOutlined } from '@mui/icons-material'
import { Grid, TextField, TextFieldProps, Tooltip } from '@mui/material'

// TODO #10: Improve this component to use material ui time picker, perhaps DayJS

const TimePicker = (props: TextFieldProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs>
        <TextField
          {...props}
          InputLabelProps={{ shrink: true }}
          type='time'
          label='Pick a start time'
          fullWidth
        />
      </Grid>
      <Grid item>
        <Tooltip
          title='Every workday has peak prices between 7:00 and 21:00. 
        Please select a start time so peak hours and considered in the calculation'
        >
          <InfoOutlined />
        </Tooltip>
      </Grid>
    </Grid>
  )
}

export default TimePicker
