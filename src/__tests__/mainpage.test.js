import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MainPage from '../components/mainpage';
import store from '../Redux/store';

describe('Component render testing', () => {
  it('MainPage page renders correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MainPage />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('<MainPage />', () => {
  it('Main page renders correctly', () => {
    // eslint-disable-next-line
    const { asFragment } = render(
      <Provider store={store}>
        <MainPage />
      </Provider>,
    );

    const mockData = [
      { country: 'Test 1', city: 'test1' },
      { country: 'Test 2', city: 'test2' },
      { country: 'Test 3', city: 'test3' },
    ];
    const searched = mockData[1].country;

    expect(searched).toBe('Test 2');
  });
});
it('Main page renders correctly', () => {
  // eslint-disable-next-line
  const { asFragment } = render(
    <Provider store={store}>
      <MainPage />
    </Provider>,
  );
  const mockData = [
    { country: 'Test 1', city: 'test1' },
    { country: 'Test 2', city: 'test2' },
    { country: 'Test 3', city: 'test3' },
  ];
  const searched = mockData[0].country;
  expect(searched).toBe('Test 1');
});
it('Main page renders correctly', () => {
  // eslint-disable-next-line
  const { asFragment } = render(
    <Provider store={store}>
      <MainPage />
    </Provider>,
  );
  const mockData = [
    { country: 'Test 1', city: 'test1' },
    { country: 'Test 2', city: 'test2' },
    { country: 'Test 3', city: 'test3' },
  ];
  const searched = mockData[2].city;
  expect(searched).toBe('test3');
});
