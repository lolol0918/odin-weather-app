import { getWeather } from "./weatherService";
import { displayWeatherCard } from "./uiHandler";

export async function loadWeather(city) {
    const data = await getWeather(city);
    displayWeatherCard(data);
}