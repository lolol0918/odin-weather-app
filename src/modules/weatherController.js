import { getWeather } from "./weatherService";
import { displayWeatherCard } from "./uiHandler";

export async function loadWeather(city) {
    console.log("Loading weather for", city);
    console.time("weather fetch");
    const data = await getWeather(city);
    console.timeEnd("weather fetch");
    displayWeatherCard(data);
}