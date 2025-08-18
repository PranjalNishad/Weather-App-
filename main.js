const url = 'https://api.openweathermap.org/data/2.5/weather';
const geoUrl = 'https://api.openweathermap.org/geo/1.0/direct';
const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

// Default city when page loads
$(document).ready(function () {
  weatherFn('Pune');

  // Allow Enter key to trigger search
  $('#city-input').keypress(function (e) {
    if (e.which === 13) {
      $('#city-input-btn').click();
    }
  });

  // Click handler (instead of inline onclick in HTML)
  $('#city-input-btn').click(function () {
    const city = $('#city-input').val().trim();
    if (city) {
      weatherFn(city);
    } else {
      alert('Please enter a city name');
    }
  });
});

// fetching weather details(continue from here)

async function weatherFn(cName) {
  try {
    // 1. Get coordinates of the city
    const geoRes = await fetch(
      `${geoUrl}?q=${encodeURIComponent(cName)}&limit=1&appid=${apiKey}`,
      { cache: 'no-store' }
    );
    const geoData = await geoRes.json();
    if (!geoData.length) {
      return alert('City not found. Please try again.');
    }

    const { lat, lon, name, state, country } = geoData[0];

    // 2. Get weather using lat/lon (more accurate than city name only)
    const res = await fetch(
      `${url}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
      { cache: 'no-store' }
    );
    const data = await res.json();
    if (!res.ok) {
      return alert(data.message || 'Error fetching weather data');
    }

    // 3. Display results
    weatherShowFn(data, { name, state, country });
  } catch (error) {
    console.error('Error fetching weather data:', error);
    alert('Network error. Please try again later.');
  }
}

// Display weather data
function weatherShowFn(data, place = {}) {
  const label = [place.name, place.state, place.country].filter(Boolean).join(', ');
  $('#city-name').text(label || data.name);

  // Local time (using timezone offset from API)
//   const localTime = moment.unix(data.dt)
//     .utcOffset(data.timezone / 60)
//     .format('MMMM Do YYYY, h:mm A');
//   $('#date').text(localTime);

  // Temperature with feels-like
//   $('#temperature').html(
//     `${Math.round(data.main.temp)}°C (feels like ${Math.round(data.main.feels_like)}°C)`
//   );

  // Description, wind, humidity
//   $('#description').text(data.weather[0].description);
//   $('#wind-speed').html(`Wind: ${Math.round(data.wind.speed)} m/s`);
//   if (data.main.humidity !== undefined) {
//     $('#wind-speed').append(`<br>Humidity: ${data.main.humidity}%`);
//   }

  // Weather icon
//   $('#weather-icon')
//     .attr('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
//     .attr('alt', data.weather[0].description);

//   $('#weather-info').fadeIn();
}