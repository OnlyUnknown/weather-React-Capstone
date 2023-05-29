import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



const url = "http://dataservice.accuweather.com/locations/v1/topcities/50/pFhiQ1OqX6cHW7AkQqb8k9CLpPeIL1LX"

// const apiKey = "pFhiQ1OqX6cHW7AkQqb8k9CLpPeIL1LX"

const getName = createAsyncThunk(
    "Country/FetchCountry", async () => {
        try{
            const response = await axios.get(url);
            return response.data
        } catch (err) {
            return err.message
        }
    }
)

const initialState = {
    countryList: [],
    countryKeys: [],
    isLoading: true,
    error: undefined,
}

const mainSlice = createSlice({
    name: "Main Page",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
        .addCase(getName.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(getName.fulfilled, (state, action) =>{
           return console.log(action.payload)
        })
        .addCase(getName.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message
        })
    }
});


export default mainSlice.reducer;