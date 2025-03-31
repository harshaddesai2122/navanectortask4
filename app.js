// app.js

document.addEventListener('DOMContentLoaded', () => {
    // Replace with your Fitness API key
    const apiKey = 'YOUR_API_KEY';

    // Fetch weather and fitness data
    fetchWeatherData();
    fetchFitnessData();

    function fetchWeatherData() {
        const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London`; // Example location
        fetch(weatherUrl)
            .then(response => response.json())
            .then(data => displayWeatherData(data))
            .catch(error => console.error('Error fetching weather data:', error));
    }

    function displayWeatherData(data) {
        const weatherDiv = document.getElementById('weather-data');
        weatherDiv.innerHTML = `
            <p><strong>Location:</strong> ${data.location.name}, ${data.location.country}</p>
            <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
            <p><strong>Condition:</strong> ${data.current.condition.text}</p>
            <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
        `;
    }

    function fetchFitnessData() {
        const fitnessUrl = `https://api.fitnessapi.com/v1/activity?key=${apiKey}`;
        fetch(fitnessUrl)
            .then(response => response.json())
            .then(data => displayFitnessData(data))
            .catch(error => console.error('Error fetching fitness data:', error));
    }

    function displayFitnessData(data) {
        const fitnessDiv = document.getElementById('fitness-data');
        fitnessDiv.innerHTML = `
            <p><strong>Steps:</strong> ${data.steps}</p>
            <p><strong>Calories Burned:</strong> ${data.calories_burned} kcal</p>
            <p><strong>Distance:</strong> ${data.distance} km</p>
        `;
    }
});
