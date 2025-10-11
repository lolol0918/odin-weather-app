import { getWeather } from "./modules/weather";
import { transformWeatherData } from "./modules/transformWeatherData";

const text = document.getElementById("text");
const data = await getWeather("Arayat");
const transformedData = transformWeatherData(data);

console.log(transformedData);

text.innerText = JSON.stringify(transformedData.current);