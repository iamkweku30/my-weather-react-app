import { render } from '@testing-library/react';
import App from './App';

test('renders Weather App title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/weather app/i);
  expect(titleElement).toBeInTheDocument();
});
