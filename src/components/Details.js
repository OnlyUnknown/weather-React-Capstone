import NavDetails from './Navdetails';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Details = () => {
   const dispatch = useDispatch()
  const {
    countryDetails
  } = useSelector((store) => store.main);
  useEffect(() => {


  }, [dispatch]);
  return <>
    <NavDetails />
    <h3>Name of the country</h3>
    <div>Country</div>
    <div>Temprature</div>
    <div>Wind</div>
    <div>Time</div>
  </>
};

export default Details;
