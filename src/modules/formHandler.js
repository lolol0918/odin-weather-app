import { loadWeather } from "./weatherController";

export function initFormHandler() {
    const form = document.getElementById("searchForm");
    const input = document.getElementById("cityInput");

    if (!form || !input) {
        console.error("Form or input element not found.");
        return;
    }

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const city = input.value.trim();

        if (!city) return;

        try {
            await loadWeather(city);
        } catch (error) {
            console.error("Failed to load weather:", error);
        }
    });
}