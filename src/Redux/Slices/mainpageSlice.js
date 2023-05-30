import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://dataservice.accuweather.com/locations/v1/topcities/50?apikey=pFhiQ1OqX6cHW7AkQqb8k9CLpPeIL1LX';

export const getName = createAsyncThunk(
  'Country/FetchCountry', async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      return err.message;
    }
  },
);


export const getDetails = createAsyncThunk(
  'Country/FetchDetails', async (key) => {
    try {
      const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=pFhiQ1OqX6cHW7AkQqb8k9CLpPeIL1LX`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  },
);


const initialState = {
  countryList: [],
  countryDetails: [],
  isLoading: true,
  error: undefined,
};

const mainSlice = createSlice({
  name: 'Main Page',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getName.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getName.fulfilled, (state, action) => {
        const everyC = [];
        action.payload.map((item) => {
          const country = {
            country: item.Country.EnglishName,
            city: item.LocalizedName,
            key: item.Key,
          };

          return everyC.push(country);
        });

        state.countryList = everyC;
        state.isLoading = false;
      })
      .addCase(getName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getDetails.fulfilled, (state,action) => {
        state.countryDetails = action.payload
        console.log(action.payload)
        console.log(state.countryDetails)
      })
  },
});

export default mainSlice.reducer;
