import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getDetails, getName } from '../Redux/Slices/mainpageSlice';
import Nav from './Nav';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const dispatch = useDispatch();
  const {
    countryList, isLoading, error,
  } = useSelector((store) => store.main);
  useEffect(() => {
    dispatch(getName());

  }, [dispatch]);

  if (isLoading === true) {
    return (
      <>
        <Nav />
        <div>Loading</div>

      </>
    );
  } if (isLoading === false) {
    return (
      <div>
        <Nav />
        {countryList.map((item) => (
          <Link to="/details"><div onClick={() => { dispatch(getDetails(item.key))}} key={item.key}>
            {(() => {
        if (item.country === "Iraq") {
          return (
            <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/iq.svg' />
          )
        } else if (item.country === "Bangladesh") {
          return (
            <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/bd.svg'/>
          )
        } else if (item.country === "Democratic Republic of the Congo") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/cd.svg'/>
            )
          } else if (item.country === "Chile") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/cl.svg'/>
            )
          } else if (item.country === "China") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/cn.svg'/>
            )
          } else if (item.country === "Colombia") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/co.svg'/>
            )
          } else if (item.country === "Germany") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/de.svg'/>
            )
          } else if (item.country === "Egypt") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/eg.svg'/>
            )
          } else if (item.country === "Spain") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/es.svg'/>
            )
          } else if (item.country === "United Kingdom") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/gb.svg'/>
            )
          } else if (item.country === "Greece") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/gr.svg'/>
            )
          } else if (item.country === "Hong Kong") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/hk.svg'/>
            )
          } else if (item.country === "Indonesia") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/id.svg'/>
            )
          } else if (item.country === "Japan") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/jp.svg'/>
            )
          } else if (item.country === "South Korea") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/kr.svg'/>
            )
          } else if (item.country === "Mexico") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/mx.svg'/>
            )
          } else if (item.country === "Peru") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/pe.svg'/>
            )
          } else if (item.country === "Russia") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/ru.svg'/>
            )
          } else if (item.country === "Saudi Arabia") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/sa.svg'/>
            )
          } else if (item.country === "Singapore") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/sg.svg'/>
            )
          } else if (item.country === "Thailand") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/th.svg'/>
            )
          } else if (item.country === "Vietnam") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/vn.svg'/>
            )
          } else if (item.country === "Australia") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/au.svg'/>
            )
          } else if (item.country === "India") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/in.svg'/>
            )
          } else if (item.country === "Pakistan") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/pk.svg'/>
            )
          } else if (item.country === "Türkiye") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/tr.svg'/>
            )
          } else if (item.country === "United States") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/um.svg'/>
            )
          } else if (item.country === "Afghanistan") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/af.svg'/>
            )
          } else if (item.country === "Argentina") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/ar.svg'/>
            )
          } else if (item.country === "Cuba") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/cu.svg'/>
            )
          } else if (item.country === "France") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/fr.svg'/>
            )
          } else if (item.country === "Iran") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/ir.svg'/>
            )
          } else if (item.country === "Philippines") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/ph.svg'/>
            )
          } else if (item.country === "Serbia") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/rs.svg'/>
            )
          } else if (item.country === "Senegal") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/sn.svg'/>
            )
          } else if (item.country === "Taiwan") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/tw.svg'/>
            )
          } else if (item.country === "South Africa") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/za.svg'/>
            )
          } else if (item.country === "Brazil") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/br.svg'/>
            )
          } else if (item.country === "Canada") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/ca.svg'/>
            )
          } else if (item.country === "Netherlands") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/nl.svg'/>
            )
          } else if (item.country === "Sweden") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/se.svg'/>
            )
          } else if (item.country === "Iceland") {
            return (
              <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/is.svg'/>
            )
          } else {
          return (
            <img className='Flag' src='https://flagicons.lipis.dev/flags/4x3/ps.svg'/>
          )
        }
      })()}
            <div>
              {item.country}
              /
              {item.city}
            </div>
            <div>
              {item.key}
            </div>
          </div>
          </Link>
        ))}
      </div>
    );
  }
  return <div>{error}</div>;
};

export default MainPage;
