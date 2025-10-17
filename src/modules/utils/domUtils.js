export function createWeatherElement(tag, className, id, text = "", alt = "", src = "") {
    const el = document.createElement(tag);
    if (className) el.classList.add(className);
    if (id) el.id = id;
    if (text) el.textContent = text;
    if (tag === "img") {
        if (alt) el.alt = alt;
        if (src) el.src = src;
    }
    return el;
}

export function createForecastSection() {
  if (document.querySelector(".forecast-section")) return;

  const section = document.createElement("div");
  section.classList.add("forecast-section");

  const title = document.createElement("h2");
  title.textContent = "5-Day Forecast";

  const row = document.createElement("div");
  row.classList.add("forecast-row");

  section.appendChild(title);
  section.appendChild(row);

  const mainContainer = document.querySelector(".weather-container") || document.body;
  mainContainer.appendChild(section);
}