// src/services/weatherService.js
const BASE_URL = `http://localhost:3000/weather/`;

const show = async (city) => {
    try {
      console.log(`Requesting weather data for ${city}...`); // Log the city being requested
      const res = await fetch(BASE_URL + city);
      const data = await res.json();
      console.log('Data received:', data); // Log the data received from the server
      return data;
    } catch (err) {
      console.error('Error in weatherService:', err); // Log any errors
    }
};

export { show };