import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MainPage from '../components/mainpage';
import store from '../redux/store';

describe('Component render testing', () => {
  it('Line page renders correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MainPage />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
