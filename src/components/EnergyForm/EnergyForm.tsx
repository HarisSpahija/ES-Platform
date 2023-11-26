import { Box, Card, FormControl, Typography } from '@mui/material'
import { DayPicker } from '../Inputs'

/*
three input fields
1. day
2. start time
3. duration
4. energy usage estimate (number input)
*/

const EnergyForm = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
        <Typography variant='h4' component='h1'>
          Energy Cost Estimation
        </Typography>
        <Typography variant='subtitle1' component='h2'>
          To calculate the cost of your energy usage, we need to know some
          information about your energy usage.
        </Typography>
      </Box>
      <Card sx={{ padding: 2 }}>
        <FormControl fullWidth sx={{ '& > * + *': { mt: 1 } }}>
          <DayPicker />
        </FormControl>
      </Card>
    </>
  )
}

export default EnergyForm
