import { toCelsius } from "./utils/unitConverter";

let currentUnit = "F"; // default value from the API
let latestWeatherData = null; // remember last data

export function displayWeatherCard(weatherData, unit = "F") {
    latestWeatherData = weatherData; // store for toggling
    currentUnit = unit;

    const container = document.getElementById("weatherContainer");
    container.innerHTML = ""; // clear old cards

    const card = document.createElement("div");
    card.classList.add("weather-card");
    card.id = "weatherCard";

    const locationEl = document.createElement("div");
    locationEl.classList.add("location");
    locationEl.id = "location";

    const imgEl = document.createElement("img");
    imgEl.classList.add("icon");
    imgEl.id = "icon";
    imgEl.alt = "Weather Icon";

    const tempEl = document.createElement("div");
    tempEl.classList.add("temp");
    tempEl.id = "temp";

    const conditionEl = document.createElement("div");
    conditionEl.classList.add("condition");
    conditionEl.id = "condition";

    const humidityEl = document.createElement("div");
    humidityEl.classList.add("humidity");
    humidityEl.id = "humidity";

    // fill the content
    locationEl.textContent = weatherData.location;

    // for toggling fahrenheit to celsius
    const tempValue =
        unit === "C"
            ? `${toCelsius(weatherData.current.temp).toFixed(1)}°C`
            : `${weatherData.current.temp.toFixed(1)}°F`;
    tempEl.textContent = tempValue;
    conditionEl.textContent = weatherData.current.condition;
    humidityEl.textContent = `Humidity: ${weatherData.current.humidity}%`;
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