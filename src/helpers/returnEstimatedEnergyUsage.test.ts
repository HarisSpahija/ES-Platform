import returnEstimatedEnergyUsage from './returnEstimatedEnergyUsage'
import { averageEnergyUsagePerMinute } from './constants'

describe('returnEstimatedEnergyUsage', () => {
  it('should return the value times the averageEnergyUsagePerMinute constant', () => {
    const minutes = 10
    const result = returnEstimatedEnergyUsage(minutes)
    expect(result).toEqual(minutes * averageEnergyUsagePerMinute)
  })
})
