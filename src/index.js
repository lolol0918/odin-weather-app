import { loadWeather } from "./modules/weatherController";
import { initFormHandler } from "./modules/formHandler";
import "./styles/style.css";

document.addEventListener("DOMContentLoaded", initFormHandler());
 
loadWeather("Arayat");


