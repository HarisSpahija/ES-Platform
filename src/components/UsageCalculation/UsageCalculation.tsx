import { Box, Typography } from '@mui/material'
import calculatePeakMinutes from '../../helpers/calculatePeakMinutes'
import { useCallback, useEffect, useState } from 'react'
import { PieChart } from '@mui/x-charts/PieChart'
import { kwhCostInCents, kwhCostInCentsPeak } from '../../helpers/constants'

interface IUsageCalculationProps {
  startDay: number // 1 - 7 where 1 is Monday
  startTime: string // HH:mm
  durationInMinutes: number
  energyUsage: number
}

const UsageCalculation = ({
  startDay,
  startTime,
  durationInMinutes,
  energyUsage,
}: IUsageCalculationProps) => {
  const [peakMinutes, setPeakMinutes] = useState<number>(0)
  const [offPeakMinutes, setOffPeakMinutes] = useState<number>(0)
  const [peakPrice, setPeakPrice] = useState<string>('0')
  const [offPeakPrice, setOffPeakPrice] = useState<string>('0')

  const pieParams = { height: 300 }
  const palette = ['#F47D20', '#e82c5f']

  const calcAndSetPeakMinutes = useCallback(() => {
    const startDateTime = new Date()
    startDateTime.setDate(
      startDateTime.getDate() + ((startDay + 7 - startDateTime.getDay()) % 7),
    )
    startDateTime.setHours(parseInt(startTime.split(':')[0]))
    startDateTime.setMinutes(parseInt(startTime.split(':')[1]))

    const result = calculatePeakMinutes(startDateTime, durationInMinutes)
    setPeakMinutes(result.peakMinutes)
    setOffPeakMinutes(result.offPeakMinutes)
  }, [startTime, startDay, durationInMinutes])

  const calcPeakPrice = useCallback(() => {
    const kwhInPeak = (peakMinutes / durationInMinutes) * energyUsage
    const costInPeak = (kwhInPeak * kwhCostInCentsPeak) / 100
    setPeakPrice(costInPeak.toFixed(2))
  }, [peakMinutes, durationInMinutes, energyUsage])

  const calcOffPeakPrice = useCallback(() => {
    const kwhInOffPeak = (offPeakMinutes / durationInMinutes) * energyUsage
    const costInOffPeak = (kwhInOffPeak * kwhCostInCents) / 100
    setOffPeakPrice(costInOffPeak.toFixed(2))
  }, [offPeakMinutes, durationInMinutes, energyUsage])

  useEffect(() => {
    calcAndSetPeakMinutes()
  }, [startDay, startTime, durationInMinutes, calcAndSetPeakMinutes])

  useEffect(() => {
    calcPeakPrice()
    calcOffPeakPrice()
  }, [
    peakMinutes,
    offPeakMinutes,
    energyUsage,
    calcPeakPrice,
    calcOffPeakPrice,
  ])

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ marginBottom: 4 }}>
        <PieChart
          colors={palette}
          series={[
            {
              arcLabel: (item) => `${item.label} (${item.value})`,
              data: [
                { value: parseFloat(offPeakPrice), label: 'Normal' },
                { value: parseFloat(peakPrice), label: 'Peak' },
              ],
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            },
          ]}
          {...pieParams}
        />
      </Box>
      <Typography variant='h3' component='div' sx={{ marginY: 2 }}>
        Total cost:{' '}
        {(parseFloat(offPeakPrice) + parseFloat(peakPrice)).toFixed(2)}
      </Typography>
      <Typography>Minutes during peak hours: {peakMinutes}</Typography>
      <Typography>Minutes not during peak hours: {offPeakMinutes}</Typography>
      <Typography>Total spent on Peak Hours : {offPeakPrice}</Typography>
      <Typography>Total spent on Normal Hours: {peakPrice}</Typography>
    </Box>
  )
}

export default UsageCalculation
