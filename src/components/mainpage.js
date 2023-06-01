import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDetails, getName } from '../Redux/Slices/mainpageSlice';
import Nav from './Nav';

const MainPage = () => {
  const dispatch = useDispatch();

  const {
    countryList, isLoading, error,
  } = useSelector((store) => store.main);
  useEffect(() => {
    dispatch(getName());
  }, [dispatch]);

  const [finder, setFinder] = useState('');

  const handleSearch = (e) => {
    setFinder(e.target.value);
  };

  const displaycity = countryList.filter((country) => {
    const lowercaseName = country.city.toLowerCase();
    const lowercaseCountry = country.country.toLowerCase();
    const lowercaseFinder = finder.toLowerCase();
    return lowercaseName.includes(lowercaseFinder) + lowercaseCountry.includes(lowercaseFinder);
  });

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
        <div className='Search-Background'>
          <div className='search-barH'>
        <input
          type="text"
          className="search-bar"
          placeholder="search city name or country name"
          onChange={handleSearch}
        />
        </div>
        </div >
        <div className='grid-Country'>
        {displaycity.map((item) => (
          <Link to={`/details/${item.country}/${item.city}`} key={item.key}>
            <div className='countryC' role="button" onClick={() => { dispatch(getDetails(item.key)); }} onKeyDown="" tabIndex={0}>
              {(() => {
                if (item.country === 'Iraq') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/iq.svg" alt={item.country} />
                  );
                } if (item.country === 'Bangladesh') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/bd.svg" alt={item.country} />
                  );
                } if (item.country === 'DRC') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/cd.svg" alt={item.country} />
                  );
                } if (item.country === 'Chile') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/cl.svg" alt={item.country} />
                  );
                } if (item.country === 'China') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/cn.svg" alt={item.country} />
                  );
                } if (item.country === 'Colombia') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/co.svg" alt={item.country} />
                  );
                } if (item.country === 'Germany') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/de.svg" alt={item.country} />
                  );
                } if (item.country === 'Egypt') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/eg.svg" alt={item.country} />
                  );
                } if (item.country === 'Spain') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/es.svg" alt={item.country} />
                  );
                } if (item.country === 'United Kingdom') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/gb.svg" alt={item.country} />
                  );
                } if (item.country === 'Greece') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/gr.svg" alt={item.country} />
                  );
                } if (item.country === 'Hong Kong') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/hk.svg" alt={item.country} />
                  );
                } if (item.country === 'Indonesia') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/id.svg" alt={item.country} />
                  );
                } if (item.country === 'Japan') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/jp.svg" alt={item.country} />
                  );
                } if (item.country === 'South Korea') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/kr.svg" alt={item.country} />
                  );
                } if (item.country === 'Mexico') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/mx.svg" alt={item.country} />
                  );
                } if (item.country === 'Peru') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/pe.svg" alt={item.country} />
                  );
                } if (item.country === 'Russia') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/ru.svg" alt={item.country} />
                  );
                } if (item.country === 'Saudi Arabia') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/sa.svg" alt={item.country} />
                  );
                } if (item.country === 'Singapore') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/sg.svg" alt={item.country} />
                  );
                } if (item.country === 'Thailand') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/th.svg" alt={item.country} />
                  );
                } if (item.country === 'Vietnam') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/vn.svg" alt={item.country} />
                  );
                } if (item.country === 'Australia') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/au.svg" alt={item.country} />
                  );
                } if (item.country === 'India') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/in.svg" alt={item.country} />
                  );
                } if (item.country === 'Pakistan') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/pk.svg" alt={item.country} />
                  );
                } if (item.country === 'Türkiye') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/tr.svg" alt={item.country} />
                  );
                } if (item.country === 'United States') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/um.svg" alt={item.country} />
                  );
                } if (item.country === 'Afghanistan') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/af.svg" alt={item.country} />
                  );
                } if (item.country === 'Argentina') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/ar.svg" alt={item.country} />
                  );
                } if (item.country === 'Cuba') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/cu.svg" alt={item.country} />
                  );
                } if (item.country === 'France') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/fr.svg" alt={item.country} />
                  );
                } if (item.country === 'Iran') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/ir.svg" alt={item.country} />
                  );
                } if (item.country === 'Philippines') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/ph.svg" alt={item.country} />
                  );
                } if (item.country === 'Serbia') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/rs.svg" alt={item.country} />
                  );
                } if (item.country === 'Senegal') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/sn.svg" alt={item.country} />
                  );
                } if (item.country === 'Taiwan') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/tw.svg" alt={item.country} />
                  );
                } if (item.country === 'South Africa') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/za.svg" alt={item.country} />
                  );
                } if (item.country === 'Brazil') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/br.svg" alt={item.country} />
                  );
                } if (item.country === 'Canada') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/ca.svg" alt={item.country} />
                  );
                } if (item.country === 'Netherlands') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/nl.svg" alt={item.country} />
                  );
                } if (item.country === 'Sweden') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/se.svg" alt={item.country} />
                  );
                } if (item.country === 'Iceland') {
                  return (
                    <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/is.svg" alt={item.country} />
                  );
                }
                return (
                  <img className="Flag" src="https://flagicons.lipis.dev/flags/4x3/ps.svg" alt={item.country} />
                );
              })()}
              <div className='CountryN'>
                {item.country}
                </div>
                <div className='CityN'>
                {item.city}
              </div>
            </div>
          </Link>
        ))}
        </div>
      </div>
    );
  }
  return <div>{error}</div>;
};

export default MainPage;
