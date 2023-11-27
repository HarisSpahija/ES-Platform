import { averageEnergyUsagePerMinute } from './constants'

const returnEstiamtedEnergyUsage = (minutes: number) => {
  // This function should probably fetch from some
  // Global API, but for now it will just
  // mock a random number based on the average
  // usage of 2,900 kWh a year in the NL

  // Average usage per minute
  return minutes * averageEnergyUsagePerMinute
}

export default returnEstiamtedEnergyUsage
