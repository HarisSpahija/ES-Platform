const returnEstiamtedEnergyUsage = (minutes: number) => {
  // This function should probably fetch from some
  // Global API, but for now it will just
  // mock a random number based on the average
  // usage of 2,900 kWh a year in the NL

  // Average usage per minute
  const averageEnergyUsagePerMinute = 0.005517503805175
  return minutes * averageEnergyUsagePerMinute
}

export default returnEstiamtedEnergyUsage
