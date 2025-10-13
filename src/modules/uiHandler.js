export function displayWeatherCard(weatherData) {
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
    tempEl.textContent = `${weatherData.current.temp}°C`;
    conditionEl.textContent = weatherData.current.condition;
    humidityEl.textContent = `Humidity: ${weatherData.current.humidity}%`;
    imgEl.src = new URL(
        `../assets/icons/WeatherIcons/SVG/${weatherData.current.icon || "default"}.svg`,
        import.meta.url
    );


    card.append(locationEl, imgEl, tempEl, conditionEl, humidityEl);
    container.appendChild(card);
}
