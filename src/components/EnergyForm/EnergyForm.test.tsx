import { render, screen } from '../../test/testUtils'
import EnergyForm from './EnergyForm'

describe('Duration picker', () => {
  // Would be better to use a snapshot test here
  it('should render', () => {
    render(<EnergyForm />)
    expect(screen.getByText('Energy Cost Estimation')).toBeInTheDocument()
    expect(
      screen.getByText(
        'To calculate the cost of your energy usage, we need to know some information about your energy usage.',
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'Every workday has peak prices between 7:00 and 23:00. Please select a day and time so peak hours and considered in the calculation',
      ),
    ).toBeInTheDocument()
  })

  it('should render without debug text', () => {
    render(<EnergyForm />)
    expect(screen.queryByText('Debug' || 'debug')).not.toBeInTheDocument()
  })
})
