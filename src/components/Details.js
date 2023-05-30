import NavDetails from './Navdetails';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Details = () => {
   const dispatch = useDispatch()
  const {
    countryDetails,isLoading
  } = useSelector((store) => store.main);
  useEffect(() => {


  }, [dispatch]);
  if(isLoading === true){
    return <>Loading</>
  }
  if(isLoading === false){
    let num = 1;
  return <>
    <NavDetails />
    <div>
        <h3>Headline:</h3>
        <div>Weather:{countryDetails.Headline.Category}</div>
        <div>Start: {countryDetails.Headline.EffectiveDate}</div>
        <div>end: {countryDetails.Headline.EndDate}</div>
        </div>
    <h3>Daily Forecasts</h3>
    <div>
    {countryDetails.DailyForecasts.map((item) => (

        <div>
      <div>Day: {item.Day}</div>
      <div>Date: {item.Date}</div>
      <div>Day Time: {item.DayW}</div>
      <div>Night Time: {item.NightW}</div>
      <h5>Temperature:</h5>
      <div>Max: {item.Temperature.Max.Value}/{item.Temperature.Max.Unit}</div>
      <div>Min: {item.Temperature.Min.Value}/{item.Temperature.Min.Unit}</div>
      </div>
     
    ))}
    </div>
   
  </>
  }
};

export default Details;
