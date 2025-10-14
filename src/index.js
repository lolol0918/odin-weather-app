import { initFormHandler } from "./modules/formHandler";
import { loadWeather } from "./modules/weatherController";
import { initUnitToggle } from "./modules/unitToggle";
import "./styles/style.css";

document.addEventListener("DOMContentLoaded", () => {
    initFormHandler();
    initUnitToggle();
    loadWeather("Arayat");
});