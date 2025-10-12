import { getWeather } from "./modules/weather";
import { transformWeatherData } from "./modules/transformWeatherData";
import "./styles/style.css";


const data = await getWeather("Arayat");
const transformedData = transformWeatherData(data);

console.log(transformedData);

