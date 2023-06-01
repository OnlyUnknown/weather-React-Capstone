import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CloudySun from '../PNG/danieledesantis-weather-icons-cloudy.png';
import Sunny from '../PNG/danieledesantis-weather-icons-sunny.png';
import MostlyCloudy from '../PNG/danieledesantis-weather-icons-cloudy-3.png';
import Showers from '../PNG/danieledesantis-weather-icons-rainy-2.png';
import Cloudy from '../PNG/danieledesantis-weather-icons-cloudy-2.png';
import ThunderStorm from '../PNG/danieledesantis-weather-icons-stormy.png';
import Rain from '../PNG/danieledesantis-weather-icons-rainy.png';
import CloudyN from '../PNG/danieledesantis-weather-icons-night-cloudy.png';
import ClearN from '../PNG/danieledesantis-weather-icons-night-clear.png';
import CloudsN from '../PNG/danieledesantis-weather-icons-night-cloudy-2.png';
import ShowersN from '../PNG/danieledesantis-weather-icons-night-rainy-2.png';
import ThunderStormN from '../PNG/danieledesantis-weather-icons-night-stormy.png';
import RainN from '../PNG/danieledesantis-weather-icons-night-rainy.png';
// eslint-disable-next-line
const NavDetails = () => (
  <>
    <ul>
      <Link to="/"><li>Home</li></Link>
      <li>Mic</li>
      <li>Setting</li>
    </ul>
  </>

);
const Details = () => {
  const {
    countryDetails, isLoading, countryList, KeyN,
  } = useSelector((store) => store.main);

  if (isLoading === true) {
    return <>Loading</>;
  }
  if (isLoading === false) {
    return (
      <>
        <NavDetails />
        <h2>
          {countryList.map((item) => {
            if (item.key === countryDetails.KeyN) {
              return (
                <div key={item.key}>

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
                  /
                  {item.city}
                </div>
              );
            }
            return (
              <div key="::::::::" />
            );
          })}
        </h2>
        <h3>Daily Forecasts</h3>
        <div>

          {countryDetails.DailyForecasts.map((item) => (
            <div key={KeyN}>
              <div>
                Day:
                {item.Day}
              </div>
              <div>
                Date:
                {item.Date}
              </div>
              <div>
                Day Time:
                {item.DayW}
              </div>
              <div />

              {(() => {
                if (item.DayW === 'Intermittent clouds' || item.DayW === 'Partly sunny') {
                  return (
                    <img className="DayIcon" alt={item.NightW} src={CloudySun} />
                  );
                } if (item.DayW === 'Mostly sunny'
                || item.DayW === 'Sunny' || item.DayW === 'Hot'
              || item.DayW === 'Hazy sunshine') {
                  return (
                    <img className="DayIcon" alt={item.NightW} src={Sunny} />
                  );
                } if (item.DayW === 'Mostly cloudy') {
                  return (
                    <img className="DayIcon" alt={item.NightW} src={MostlyCloudy} />
                  );
                } if (
                  item.DayW === 'Showers' || item.DayW === 'Partly sunny w/ showers' || item.DayW === 'Mostly cloudy w/ showers' || item.DayW === 'Dreary') {
                  return (
                    <img className="DayIcon" alt={item.NightW} src={Showers} />
                  );
                } if (item.DayW === 'Cloudy') {
                  return (
                    <img className="DayIcon" alt={item.NightW} src={Cloudy} />
                  );
                } if (item.DayW === 'Partly sunny w/ t-storms' || item.DayW === 'Thunderstorms' || item.DayW === 'Mostly cloudy w/ t-storms') {
                  return (
                    <img className="DayIcon" alt={item.NightW} src={ThunderStorm} />
                  );
                } if (item.DayW === 'Rain') {
                  return (
                    <img className="DayIcon" alt={item.NightW} src={Rain} />
                  );
                }
                return (
                  <div>
                    {' '}
                    {item.NightW}
                  </div>
                );
              })()}
              <div>
                Night Time:
                {item.NightW}
              </div>
              {(() => {
                if (item.NightW === 'Intermittent clouds' || item.NightW === 'Partly cloudy') {
                  return (
                    <img className="DayIcon" alt={item.NightW} src={CloudyN} />
                  );
                } if (item.NightW === 'Clear'
          || item.NightW === 'Clear' || item.NightW === 'Mostly clear') {
                  return (
                    <img className="DayIcon" alt={item.NightW} src={ClearN} />
                  );
                } if (item.NightW === 'Mostly cloudy w/ showers'
              || item.NightW === 'Showers' || item.NightW === 'Partly cloudy w/ showers') {
                  return (
                    <img className="DayIcon" alt={item.NightW} src={ShowersN} />
                  );
                } if (
                  item.NightW === 'Showers' || item.NightW === 'Partly sunny w/ showers' || item.NightW === 'Mostly cloudy w/ showers') {
                  return (
                    <img className="DayIcon" alt={item.NightW} src={Showers} />
                  );
                } if (item.NightW === 'Cloudy' || item.NightW === 'Mostly cloudy') {
                  return (
                    <img className="DayIcon" alt={item.NightW} src={CloudsN} />
                  );
                } if (item.NightW === 'Partly cloudy w/ t-storms' || item.NightW === 'Thunderstorms' || item.NightW === 'Mostly cloudy w/ t-storms') {
                  return (
                    <img className="DayIcon" alt={item.NightW} src={ThunderStormN} />
                  );
                } if (item.NightW === 'Rain') {
                  return (
                    <img className="DayIcon" alt={item.NightW} src={RainN} />
                  );
                }
                return (
                  <div>{item.NightW}</div>
                );
              })()}
              <h5>Temperature:</h5>
              <div>
                Max:
                {item.Temperature.Max.Value}
                /
                {item.Temperature.Max.Unit}
              </div>
              <div>
                Min:
                {item.Temperature.Min.Value}
                /
                {item.Temperature.Min.Unit}
              </div>
            </div>

          ))}
        </div>

      </>
    );
  }
  return <div>error</div>;
};

export default Details;
