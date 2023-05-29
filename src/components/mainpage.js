import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getName } from '../Redux/Slices/mainpageSlice';
import Nav from './Nav';

const MainPage = () => {
    const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getName());

  }, [dispatch]);
  return<>
    <Nav />
    <h3>Countries</h3>
    <h3>Country</h3>
  </>
};

export default MainPage;
