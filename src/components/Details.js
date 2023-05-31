import NavDetails from './Navdetails';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CloudySun from "../PNG/danieledesantis-weather-icons-cloudy.png"
import Sunny from "../PNG/danieledesantis-weather-icons-sunny.png"
import Dreary from "../PNG/danieledesantis-weather-icons-rainy-2.png"
import MostlyCloudy from "../PNG/danieledesantis-weather-icons-cloudy-3.png"
import Showers from "../PNG/danieledesantis-weather-icons-rainy-2.png"
import Cloudy from "../PNG/danieledesantis-weather-icons-cloudy-2.png"
import ThunderStorm from "../PNG/danieledesantis-weather-icons-stormy.png"
import Rain from "../PNG/danieledesantis-weather-icons-rainy.png"
import CloudyN from "../PNG/danieledesantis-weather-icons-night-cloudy.png"
import ClearN from "../PNG/danieledesantis-weather-icons-night-clear.png"
import CloudsN from "../PNG/danieledesantis-weather-icons-night-cloudy-2.png"
import ShowersN from "../PNG/danieledesantis-weather-icons-night-rainy-2.png"
import ThunderStormN from "../PNG/danieledesantis-weather-icons-night-stormy.png"
import RainN from "../PNG/danieledesantis-weather-icons-night-rainy.png"

const Details = () => {
   const dispatch = useDispatch()
  const {
    countryDetails,isLoading,countryList
  } = useSelector((store) => store.main);

  if(isLoading === true){
    return <>Loading</>
  }
  if(isLoading === false){
    let num = 1;
  return <>
    <NavDetails />
    <h2>{countryList.map((item) => {
        if(item.key === countryDetails.KeyN){
            return <div> {(() => {
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
            })()}/{item.city}</div>
        }
    })}</h2>
    <h3>Daily Forecasts</h3>
    <div>
      
      {countryDetails.DailyForecasts.map((item) => (

<div>
<div>Day: {item.Day}</div>
<div>Date: {item.Date}</div>
      <div>Day Time: {item.DayW}</div>
    <div></div>

{(() => {
if (item.DayW === "Intermittent clouds" || item.DayW === "Partly sunny") {
  return (
    <img className='DayIcon' src={CloudySun} />
  )
} else if (item.DayW === "Mostly sunny" || 
item.DayW === "Sunny" || item.DayW === "Hot" ||
 item.DayW === "Hazy sunshine") {
  return (
    <img className='DayIcon' src={Sunny}/>
  )
} else if (item.DayW === "Dreary") {
  return (
    <img className='DayIcon' src={Dreary}/>
  )
} else if (item.DayW === "Mostly cloudy") {
  return (
    <img className='DayIcon' src={MostlyCloudy}/>
  )
} else if (
  item.DayW === "Showers" || item.DayW === "Partly sunny w/ showers" || item.DayW  === "Mostly cloudy w/ showers" ) {
  return (
    <img className='DayIcon' src={Showers}/>
  )
} else if (item.DayW === "Cloudy") {
  return (
    <img className='DayIcon' src={Cloudy}/>
  )
} else if (item.DayW === "Partly sunny w/ t-storms" || item.DayW === "Thunderstorms" || item.DayW === "Mostly cloudy w/ t-storms") {
  return (
    <img className='DayIcon' src={ThunderStorm}/>
  )
} else if (item.DayW === "Rain") {
  return (
    <img className='DayIcon' src={Rain}/>
  )
} else if (item.DayW === "Shs") {
  return (
    <img className='DayIcon' src={Showers}/>
  )
} 
})()}
      <div>Night Time: {item.NightW}</div>
      {(() => {
if (item.NightW === "Intermittent clouds" || item.NightW === "Partly cloudy") {
  return (
    <img className='DayIcon' src={CloudyN} />
  )
} else if (item.NightW === "Clear" || 
item.NightW === "Clear" || item.NightW === "Mostly clear" ) {
  return (
    <img className='DayIcon' src={ClearN}/>
  )
} else if (item.NightW === "Dreary") {
  return (
    <img className='DayIcon' src={Dreary}/>
  )
} else if (item.NightW === "Mostly cloudy w/ showers" || 
item.NightW === "Showers" || item.NightW === "Partly cloudy w/ showers") {
  return (
    <img className='DayIcon' src={ShowersN}/>
  )
} else if (
  item.NightW === "Showers" || item.NightW === "Partly sunny w/ showers" || item.NightW  === "Mostly cloudy w/ showers" ) {
  return (
    <img className='DayIcon' src={Showers}/>
  )
} else if (item.NightW === "Cloudy" || item.NightW === "Mostly cloudy") {
  return (
    <img className='DayIcon' src={CloudsN}/>
  )
} else if (item.NightW === "Partly cloudy w/ t-storms" || item.NightW === "Thunderstorms" || item.NightW === "Mostly cloudy w/ t-storms") {
  return (
    <img className='DayIcon' src={ThunderStormN}/>
  )
} else if (item.NightW === "Rain") {
  return (
    <img className='DayIcon' src={RainN}/>
  ) 
} 
})()}
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
