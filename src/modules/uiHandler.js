import { createWeatherElement } from "./utils/domUtils";
import { createForecastSection } from "./utils/domUtils";
import { toCelsius } from "./utils/unitConverter";

let currentUnit = "F"; // default value from the API
let latestWeatherData = null; // remember last data

export function displayWeatherCard(weatherData, unit = "F") {
  latestWeatherData = weatherData;
  currentUnit = unit;

  const container = document.getElementById("weatherContainer");
  container.innerHTML = "";

  const card = createWeatherElement("div", "weather-card", "weatherCard");

  const locationEl = createWeatherElement("div", "location", "location", weatherData.location);
  const imgEl = createWeatherElement("img", "icon", "icon", "", "Weather Icon");
  const tempEl = createWeatherElement("div", "temp", "temp");
  const conditionEl = createWeatherElement("div", "condition", "condition", weatherData.current.condition);
  const humidityEl = createWeatherElement("div", "humidity", "humidity", `Humidity: ${weatherData.current.humidity}%`);

  const tempValue =
    unit === "C"
      ? `${toCelsius(weatherData.current.temp).toFixed(1)}°C`
      : `${weatherData.current.temp.toFixed(1)}°F`;
  tempEl.textContent = tempValue;

  imgEl.src = new URL(
    `../assets/icons/WeatherIcons/SVG/${weatherData.current.icon || "default"}.svg`,
    import.meta.url
  );

  card.append(locationEl, imgEl, tempEl, conditionEl, humidityEl);
  container.appendChild(card);

}

export function displayForecast(forecastData, unit = "F") {
  createForecastSection();

  console.log(forecastData);

  const forecastContainer = document.querySelector(".forecast-row");
  forecastContainer.innerHTML = ""; // Clear previous forecasts

  forecastData.slice(0, 5).forEach((day) => {
    const item = createWeatherElement("div", "forecast-item");
    const dateEl = createWeatherElement("div", "date", null, day.date);
    const tempText =
      unit === "C"
        ? `${toCelsius(day.high).toFixed(1)}°C`
        : `${day.high.toFixed(1)}°F`;
    const tempEl = createWeatherElement("div", "forecast-temp", null, tempText);

    const iconEl = createWeatherElement("img", "forecast-icon");
    iconEl.src = new URL(
      `../assets/icons/WeatherIcons/SVG/${day.icon || "default"}.svg`,
      import.meta.url
    );
    iconEl.alt = `Forecast Icon for ${day.date}`;

    item.append(dateEl, tempEl, iconEl);
    forecastContainer.appendChild(item);
  });
}

export function toggleTemperatureUnit() {
  currentUnit = currentUnit === "F" ? "C" : "F";
  if (latestWeatherData) {
    displayWeatherCard(latestWeatherData, currentUnit);
    displayForecast(latestWeatherData.forecast, currentUnit);
  }
}