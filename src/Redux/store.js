import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './Slices/mainpageSlice';

const store = configureStore({
  reducer: {
    main: mainReducer,
  },
});

export default store;
