import getCurrentHHmm from './getCurrentHHmm'

describe('getCurrentHHmm', () => {
  it('should return the current time in HH:mm format', () => {
    const result = getCurrentHHmm()
    const [hours, minutes] = result.split(':')
    expect(hours.length).toEqual(2)
    expect(minutes.length).toEqual(2)
  })
})
