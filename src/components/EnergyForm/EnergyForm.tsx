import {
  Box,
  Button,
  Card,
  FormGroup,
  Grid,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { DayPicker, DurationPicker, TimePicker } from '../Inputs'

import '../../styles/form.scss'
import getCurrentHHmm from '../../helpers/getCurrentHHmm'
import { InfoOutlined } from '@mui/icons-material'
import returnEstiamtedEnergyUsage from '../../helpers/returnEsimatedEnergyUsage'

/*
three input fields
1. day
2. start time
3. duration
4. energy usage estimate (number input)
*/

const EnergyForm = () => {
  const [startDay, setStartDay] = useState<number>(new Date().getDay())
  const [startTime, setStartTime] = useState<string>(getCurrentHHmm())
  const [durationInMinutes, setDuration] = useState<number>(60)
  const [energyUsage, setEnergyUsage] = useState<number>(0)

  const handleDayChange = (e: any) => {
    setStartDay(e.target.value)
  }
  const handleDurationChange = (e: any) => {
    setDuration(e.target.value)
  }
  const handleStartTimeChange = (e: any) => {
    setStartTime(e.target.value)
  }
  const handleEnergyUsageChange = (e: any) => {
    setEnergyUsage(e.target.value)
  }
  const setEstimatedEnergyUsage = () => {
    const averageUsage = returnEstiamtedEnergyUsage(durationInMinutes)
    setEnergyUsage(averageUsage)
  }

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
      Debug: {startDay} {startTime} {durationInMinutes}
      <Card sx={{ padding: 2 }}>
        <Typography variant='body1' component='p' sx={{ marginBottom: 2 }}>
          Every workday has peak prices between 7:00 and 21:00. Please select a
          day and time so peak hours and considered in the calculation
        </Typography>
        <FormGroup className='form__container'>
          <DayPicker name='day' onChange={handleDayChange} value={startDay} />
          <TimePicker
            name='startTime'
            onChange={handleStartTimeChange}
            value={startTime}
          />
          <DurationPicker
            name='duration'
            onChange={handleDurationChange}
            value={durationInMinutes}
            handleDurationStep={setDuration}
          />
          <Typography sx={{ marginTop: 2 }}>
            How much kw/H do you estimate to use during this time?
          </Typography>
          <Button variant='outlined' onClick={setEstimatedEnergyUsage}>
            Estimate for me!
          </Button>
          <Grid container spacing={2}>
            <Grid item xs>
              <TextField
                InputLabelProps={{ shrink: true }}
                onChange={handleEnergyUsageChange}
                value={energyUsage}
                type='number'
                label='Estimate kw/h usage during this time'
                fullWidth
              />
            </Grid>
            <Grid item>
              <Tooltip title='The average household uses 3.500 kw/h per year. Check your meter to see the usage of the last hour'>
                <InfoOutlined />
              </Tooltip>
            </Grid>
          </Grid>
        </FormGroup>
      </Card>
    </>
  )
}

export default EnergyForm
