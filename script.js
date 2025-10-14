// Fetching weather data based on city name
async function fetchWeather(city) {
    console.log(`Fetching weather for ${city}`);
    const apiKey = '84593b7035ae3cd556327fe4546f973c'; // OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Added units=metric for Celsius

    try {
        const response = await fetch(apiUrl); // for making an api call
        if (!response.ok) {
            throw new Error('Failed to fetch weather data'); //  to handle non-200 response
        }
        const data = await response.json(); // parsing JSON response
        displayWeather(data); //  to pass data to display
        changeBackground(data.weather[0].main); //  to change background based on weather condition
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again later.');
    }
}


// Displaying weather data on the page
function displayWeather(data) {
    const weatherInfo = document.querySelector('.weather-info');
    weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Condition: ${data.weather[0].description}</p>
    `;
}

//  To change background based on the weather condition
function changeBackground(weatherCondition) {
    const body = document.body;

    //To remove any existing background classes
    body.classList.remove('sunny', 'rainy', 'cloudy', 'snowy');

    // To add a class based on the weather condition
    switch (weatherCondition.toLowerCase()) {
        case 'clear':
            body.classList.add('sunny');
            break;
        case 'rain':
            body.classList.add('rainy');
            break;
        case 'clouds':
            body.classList.add('cloudy');
            break;
        case 'snow':
            body.classList.add('snowy');
            break;
        default:
            body.classList.add('default');
    }
}

// Event Listener for search button
document.getElementById('searchButton').addEventListener('click', () => {
    const cityInput = document.getElementById('cityInput').value;
    if (cityInput) {
        fetchWeather(cityInput);
    } else {
        alert('Please enter a city name.');
    }
});
