// src/components/WeatherDetails.jsx
const WeatherDetails = ({ weather }) => {
    return (
      <section>
        <h2>Weather Details</h2>
        {weather.location ? (
          <>
            <p>Location: {weather.location}</p>
            <p>Temperature: {weather.temperature}°F</p>
            <p>Condition: {weather.condition}</p>
          </>
        ) : (
          <p>No weather data available. Please search for a city.</p>
        )}
      </section>
    );
};
  
export default WeatherDetails;