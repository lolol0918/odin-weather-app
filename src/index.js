import { getWeather } from "./modules/weatherService";
import { transformWeatherData } from "./modules/transformWeatherData";
import { displayWeatherCard } from "./modules/uiHandler";
import "./styles/style.css";

async function loadWeather(city) {
    const data = await getWeather(city);
    const transformedData = transformWeatherData(data);
    displayWeatherCard(transformedData);
}


