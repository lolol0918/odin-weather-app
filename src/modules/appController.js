import { getWeather } from "./weatherService.js";
import { displayWeatherCard, displayForecast, toggleTemperatureUnit } from "./uiHandler.js";
import { initFormHandler } from "./formHandler.js";

export const App = {
    state: {
        currentCity: "Arayat",
        currentUnit: "F",
        weatherData: null,
    },

    async init() {
        console.log("Initializing Weather App...");
        await this.loadWeather(this.state.currentCity);
        initFormHandler(this);

        const toggleBtn = document.querySelector("#unitToggle");
        if (toggleBtn) {
            toggleBtn.addEventListener("click", () => toggleTemperatureUnit());
        }
    },

    async loadWeather(city) {
        try {
            const data = await getWeather(city);
            console.log("Weather data:", data); // 👈 add this
            this.state.weatherData = data;
            this.state.currentCity = city;

            displayWeatherCard(data, this.state.currentUnit);
            displayForecast(data.forecast, this.state.currentUnit);
        } catch (err) {
            console.error("Error loading weather:", err);
        }
    },
};
