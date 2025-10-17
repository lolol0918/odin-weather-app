import { createWeatherElement } from "./utils/domUtils";
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

export function toggleTemperatureUnit() {
    currentUnit = currentUnit === "F" ? "C" : "F";
    if (latestWeatherData) {
        displayWeatherCard(latestWeatherData, currentUnit);
    }
}