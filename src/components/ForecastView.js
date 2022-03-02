import Fallback from "./Fallback";
import Tabnav from "./Tabnav";

export default function ForecastView({ forecast, name }) {
  return (
    <main>
      {!forecast && <Fallback />}
      {forecast && (
        <>
          <h2>{name}</h2>
          <ul>
            <li>{`Temp: ${forecast.temp}`}</li>
            <li>{`Feels Like: ${forecast.feels_like}`}</li>
            <li>{`Humidity: ${forecast.humidity}`}</li>
            <li>{`Sunrise: ${forecast.sunrise}`}</li>
            <li>{`Sunset: ${forecast.sunset}`}</li>
          </ul>

          <Tabnav />
        </>
      )}
    </main>
  );
}
