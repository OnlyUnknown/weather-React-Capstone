import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Details from '../components/Details';
import store from '../Redux/store';

describe('Component render testing', () => {
  it('Line page renders correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Details />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
