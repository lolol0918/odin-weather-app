export const transformWeatherData = (data) => {
    return {
        location: data.address,
        current: {
            temp: data.currentConditions.temp,
            condition: data.currentConditions.conditions,
            humidity: data.currentConditions.humidity,
            icon: data.currentConditions.icon,
        },
        forecast: data.days.slice(1, 6).map((day) => ({
            date: day.datetime,
            high: day.tempmax,
            low: day.tempmin,
            condition: day.conditions,
            icon: day.icon,
        }))
    };
};