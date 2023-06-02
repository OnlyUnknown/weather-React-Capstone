import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../components/Details';
import store from '../Redux/store';

describe('Component render testing', () => {
  it('Nav page renders correctly', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Nav />
        </Provider>
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
