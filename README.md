## 1. Project Overview

## Project Name: Weather App

## Purpose:
A modern, interactive web application that fetches and displays real-time weather information for any city. Users can see temperature, humidity, wind speed, and weather conditions, with a dynamic background that reflects the current weather.

## Key Goals:

Provide accurate weather data using OpenWeatherMap API.

Deliver a visually appealing, user-friendly interface.

Make the app responsive for all devices.

Include dynamic backgrounds and animations to enhance user experience.

## 2. Features

City Search: Users can enter any city and fetch its weather data.

Weather Details Display: Shows:

Temperature (°C)

Humidity (%)

Wind speed (m/s)

Weather condition (e.g., clear, rainy, snowy)

Dynamic Backgrounds: Background images change according to the weather (sunny, rainy, cloudy, snowy).

Smooth Animations: Cards and background transitions are smooth, providing a polished UX.

Responsive Design: Works on desktop, tablet, and mobile devices.

## 3. Technologies Used

HTML5: Structure of the application.

CSS3: Styling, animations, glass card effects, responsive design.

JavaScript (ES6+): Fetching data from API, DOM manipulation, background switching, interactivity.

OpenWeatherMap API: Provides real-time weather data.

## 4. File Structure

weather-app/
├─ index.html          # Main HTML file
├─ styles.css          # Styling and animations
├─ script.js           # JavaScript for API calls and UI interactions
├─ images/             # Background images
│   ├─ sunny.jpg
│   ├─ rainy.jpg
│   ├─ cloudy.jpg
│   ├─ snowy.jpg
│   └─ default.jpg

## 5. How It Works

User Input:
The user types a city name into the input field and clicks the Search button.

API Request:
JavaScript fetchWeather() function calls the OpenWeatherMap API using the provided city name.

Data Handling:

The API returns weather data in JSON format.

displayWeather() updates the .weather-info card with temperature, humidity, wind speed, and condition.

Dynamic Background:

changeBackground() checks the weather condition (clear, rain, clouds, snow).

The body’s background class is updated to display the corresponding image.

Error Handling:

Alerts the user if the city is invalid or API fetch fails.

## 6. User Interface

Search Bar:
Located at the top center, allows city input.

Weather Info Card:
Glassy card with blurred background and shadow for readability.

Dynamic Backgrounds:
Full-page images change according to weather condition.

Responsive Layout:
Card and search bar adapt to screen size, ensuring readability.

## 7. Setup & Usage

Clone or download the repository.

Place your OpenWeatherMap API key in script.js:

const apiKey = 'YOUR_API_KEY_HERE';

Make sure the images/ folder contains all the background images (sunny.jpg, rainy.jpg, cloudy.jpg, snowy.jpg, default.jpg).

Open index.html in a web browser.

Enter a city name and click Search to see the weather and dynamic background.

## 8. Future Enhancements (Optional)

Add animated weather icons (sun, rain, snow).

Smooth crossfade transitions between weather images.

Multi-city search and save favorite cities.

Unit conversion (°C ↔ °F).

Show additional data: sunrise/sunset, pressure, visibility, etc.

## 9. Credits

OpenWeatherMap API for real-time weather data.

Background images sourced from local project folder (user-provided).

Designed and developed by AMPAIRE OWEN.

