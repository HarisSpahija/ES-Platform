import { render, screen } from '../../test/testUtils'
import DurationPicker from './DurationPicker'

describe('Duration picker', () => {
  it('should render', () => {
    render(<DurationPicker value={15} />)
    // should have the text
    expect(
      screen.getByText('For what timeframe should we estimate?'),
    ).toBeInTheDocument()
    expect(screen.getAllByText('Pick a duration')).toHaveLength(2)
    expect(screen.getByText('15 minutes')).toBeInTheDocument()

    const input = screen.getByRole('textbox', {
      hidden: true,
    })
    expect(input).toBeInTheDocument()
  })
})
