import { Box, Card, FormControl, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { DayPicker, DurationPicker, TimePicker } from '../Inputs'

import '../../styles/form.scss'

/*
three input fields
1. day
2. start time
3. duration
4. energy usage estimate (number input)
*/

const EnergyForm = () => {
  const [formData, setFormData] = useState<any>({
    day: '',
    startTime: '',
  })

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    // Calculate the cost of energy usage
  }, [formData])

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
      Debug: {JSON.stringify(formData)}
      <Card sx={{ padding: 2 }}>
        <Typography variant='body1' component='p' sx={{ marginBottom: 2 }}>
          Every workday has peak prices between 7:00 and 21:00. Please select a
          day and time so peak hours and considered in the calculation
        </Typography>
        <FormControl
          onChange={handleChange}
          fullWidth
          className='form__container'
        >
          <DayPicker name='day' onChange={handleChange} value={formData.day} />
          <TimePicker
            name='startTime'
            onChange={handleChange}
            value={formData.startTime}
          />
          <DurationPicker />
        </FormControl>
      </Card>
    </>
  )
}

export default EnergyForm
