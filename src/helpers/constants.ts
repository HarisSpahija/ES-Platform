export const kwhCostInCents = 18 // 0,18€
export const kwhCostInCentsPeak = 20 // 0,20€
export const startTimePeak = 7 // 7:00 AM
export const endTimePeak = 23 // 23:00 PM
export const meterInterValInMs = 1000 * 60 * 15 // 1 hour
export const daysThatHasPeak = [1, 2, 3, 4, 5] // Monday to Friday

export const averageEnergyUsagePerMinute = 0.005517503805175

export type durationOptionType = { value: number; label: string }
export const durationOptions: durationOptionType[] = [
  { value: 15, label: '15 minutes' },
  { value: 30, label: '30 minutes' },
  { value: 45, label: '45 minutes' },
  { value: 60, label: '1 hour' },
  { value: 75, label: '1 hour 15 minutes' },
  { value: 90, label: '1 hour 30 minutes' },
  { value: 180, label: '3 hours' },
  { value: 360, label: '6 hours' },
  { value: 720, label: '12 hours' },
  { value: 1440, label: '1 day' },
  { value: 2880, label: '2 days' },
  { value: 4320, label: '3 days' },
  { value: 5760, label: '4 days' },
  { value: 7200, label: '5 days' },
  { value: 8640, label: '6 days' },
  { value: 10080, label: '1 week' },
]
