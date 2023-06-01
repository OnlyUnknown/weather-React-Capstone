import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Details from '../components/Details';
import store from '../Redux/store';

describe('Component render testing', () => {
  it('Details page renders correctly', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Details />
        </Provider>
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
