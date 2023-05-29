import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"




const url = "http://dataservice.accuweather.com/locations/v1/topcities/50?apikey=pFhiQ1OqX6cHW7AkQqb8k9CLpPeIL1LX"



export const getName = createAsyncThunk(
    "Country/FetchCountry", async () => {
        try{
            const response = await axios.get(url );
            return response.data
        } catch (err) {
            return err.message
        }
    }
)

const initialState = {
    countryList: [],
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
           console.log(action.payload)
           const everyC = []
           action.payload.map((item) => {
            const country = {
                country: item.Country.EnglishName,
                city: item.LocalizedName,
                Key: item.Key
           }
        
           return everyC.push(country)
           })
           
            state.countryList = everyC
            console.log(state.countryList)
            state.isLoading = false
        })
        .addCase(getName.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message
        })
    }
});


export default mainSlice.reducer;