export const getWeather = async (city) => {

    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${process.env.VISUAL_CROSSING_KEY}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        return data;

    } catch (error) {
        console.error('Error: ', error);
        return null;
    }
}