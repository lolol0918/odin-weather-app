import { getWeather } from "./weatherService.js";
import { displayWeatherCard, displayForecast } from "./uiHandler.js";
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

    toggleUnit() {
        this.state.currentUnit = this.state.currentUnit === "F" ? "C" : "F";
        if (this.state.weatherData) {
            displayWeatherCard(this.state.weatherData, this.state.currentUnit);
            this.displayForecast(this.state.weatherData.forecast, this.state.currentUnit);
        }
    },
};
