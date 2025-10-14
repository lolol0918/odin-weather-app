import { toggleTemperatureUnit } from "./uiHandler";
export function initUnitToggle() {
    const toggleButton = document.getElementById("unitToggle");
    if (!toggleButton) return;

    toggleButton.addEventListener("click", () => {
        toggleTemperatureUnit();
    });
}