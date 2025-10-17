export function createWeatherElement(tag, className, id, text = "", alt = "") {
    const el = document.createElement(tag);
    if (className) el.classList.add(className);
    if (id) el.id = id;
    if (text) el.textContent = text;
    if (tag === "img" && alt) el.alt = alt;
    return el;
}