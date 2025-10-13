import { loadWeather } from "./weatherController";

export async function initFormHandler() {
    const form = document.getElementById("searchForm");
    const input = document.getElementById("cityInput");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const city = input.value.trim();

        if (!city) return;

        loadWeather(city);
    }) 
}