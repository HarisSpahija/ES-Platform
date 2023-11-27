import { daysThatHasPeak } from './constants'

const calculateMinutesBetween = (startDate: Date, endDate: Date) => {
  const differenceInMs = endDate.getTime() - startDate.getTime()
  const differenceInMinutes = differenceInMs / 1000 / 60
  return differenceInMinutes
}

const calculatePeakMinutes = (date: Date, durationInMinutes: number) => {
  let result = {
    peakMinutes: 0,
    offPeakMinutes: 0,
  }
  let dateCursor = new Date(date)
  dateCursor.setSeconds(0)
  dateCursor.setMilliseconds(0)
  let durationInMinutesCopy = durationInMinutes

  while (durationInMinutesCopy > 0) {
    // calculate if we are in peak or not
    const isPeak =
      dateCursor.getHours() >= 7 &&
      dateCursor.getHours() < 23 &&
      daysThatHasPeak.includes(dateCursor.getDay())

    // if we are in peak, find the next off peak start time
    if (isPeak) {
      const nextOffPeakStartTime = new Date(dateCursor)
      // Date cursor hours must be between 7 and 23
      nextOffPeakStartTime.setHours(23, 0, 0, 0)
      const minutesBetween = calculateMinutesBetween(
        dateCursor,
        nextOffPeakStartTime,
      )
      if (minutesBetween > durationInMinutesCopy) {
        result.peakMinutes += durationInMinutesCopy
        durationInMinutesCopy = 0
      } else {
        result.peakMinutes += minutesBetween
        durationInMinutesCopy -= minutesBetween
        dateCursor = new Date(nextOffPeakStartTime)
      }
    } else {
      // if we are not in peak find the next peak start time.
      const nextPeakStartTime = new Date(dateCursor)
      if (dateCursor.getHours() >= 23) {
        nextPeakStartTime.setDate(dateCursor.getDate() + 1)
      }
      nextPeakStartTime.setHours(7, 0, 0, 0)

      switch (dateCursor.getDay()) {
        case 6: // Saturday
          nextPeakStartTime.setDate(dateCursor.getDate() + 2)
          break
        case 7: // Sunday
          nextPeakStartTime.setDate(dateCursor.getDate() + 1)
          break
        default:
        // not a peak day so no action
      }
      const minutesBetween = calculateMinutesBetween(
        dateCursor,
        nextPeakStartTime,
      )
      if (minutesBetween > durationInMinutesCopy) {
        result.offPeakMinutes += durationInMinutesCopy
        durationInMinutesCopy = 0
      } else {
        result.offPeakMinutes += minutesBetween
        durationInMinutesCopy -= minutesBetween
        dateCursor = new Date(nextPeakStartTime)
      }
    }
  }

  return result
}

export default calculatePeakMinutes
