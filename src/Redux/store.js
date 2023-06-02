import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import mainReducer from './Slices/mainpageSlice';

const store = configureStore({
  reducer: {
    main: mainReducer,
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = () => useSelector;
export default store;
