
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import App from '../components/App';

test('renders app title', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Factorial Calculator/i)).toBeInTheDocument();

});

