import { render, screen } from '../../test/testUtils'
import TimePicker from './TimePicker'

describe('Time Picker', () => {
  it('should render', () => {
    render(<TimePicker />)
    expect(screen.getAllByText('Pick a start time')).toHaveLength(2)
    const input = screen.getByRole('time-picker')
    expect(input).toBeInTheDocument()
  })

  it('should render with the correct tooltip', () => {
    render(<TimePicker />)
    expect(screen.getAllByText('Pick a start time')).toHaveLength(2)
    const correctTooltip = screen.getByLabelText(
      'Every workday has peak prices between 7:00 and 23:00. Please select a start time so peak hours and considered in the calculation',
    )
    expect(correctTooltip).toBeInTheDocument()
  })
})
