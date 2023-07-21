import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (forecastDay, index) {
            if (index > 0) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={forecast[index]} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "7bdf7162a6a99746bf19d90tod17b361";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
