export const transformWeatherData = (data) => {
    return {
        location: data.address,
        current: {
            temp: data.currentConditions.temp,
            condition: data.currentConditions.conditions,
            humidity: data.currentConditions.humidity,
            icon: data.currentConditions.icon,
        },
        forecast: data.days.slice(1,4).map((day) => ({
            date: day.time,
            temp: day.temp,
            condition: day.conditions,
            icon: day.icon,
        }))
    };
};