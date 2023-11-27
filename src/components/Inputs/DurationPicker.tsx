import { Add, Remove } from '@mui/icons-material'
import {
  Grid,
  Button,
  Typography,
  MenuItem,
  Select,
  SelectProps,
  InputLabel,
  FormControl,
} from '@mui/material'
import { durationOptions } from '../../helpers/constants'

interface IDurationPickerProps extends SelectProps {
  handleDurationStep?: (val: number) => void
}

const DurationPicker = (props: IDurationPickerProps) => {
  const { handleDurationStep, ...restProps } = props

  const findIndex = () => {
    return durationOptions.findIndex((element) => {
      return element.value === props.value
    })
  }
  const optionIndex = findIndex()

  const handleDecreaseDuration = () => {
    if (!handleDurationStep) return
    handleDurationStep(durationOptions[optionIndex - 1].value)
  }

  const handleIncreaseDuration = () => {
    if (!handleDurationStep) return
    handleDurationStep(durationOptions[optionIndex + 1].value)
  }

  return (
    <>
      <Typography sx={{ marginTop: 2 }}>
        For what timeframe should we estimate?
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Button
            variant='contained'
            onClick={handleDecreaseDuration}
            disabled={optionIndex <= 0}
          >
            <Remove />
          </Button>
        </Grid>
        <Grid item xs>
          <FormControl fullWidth>
            <InputLabel id='duration-picker'>Pick a duration</InputLabel>
            <Select
              {...restProps}
              labelId='duration-picker'
              label='Pick a duration'
              fullWidth
            >
              {durationOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Button
            variant='contained'
            disabled={optionIndex >= durationOptions.length - 1}
            onClick={handleIncreaseDuration}
          >
            <Add />
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default DurationPicker
