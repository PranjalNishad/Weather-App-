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
	const temp =`${url}?q=${cName}&appid=${apiKey}&units=metric`;

// fetch request to api , converts api response to json format (light weight data change format which is easy to read for humans)

	try {
		const res = await fetch(temp);
		const data = await res.json();
		if (res.ok) {
			weatherShowFn(data);
		} else {
			alert('City not found. Please try again.');
		}
	} catch (error) {
		console.error('Error fetching weather data:', error);
	}
}

// displaying weather data , moment library

function weatherShowFn(data) {
	$('#city-name').text(data.name);
	$('#date').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
	$('#temperature').html(`${data.main.temp}°C`);
	$('#description').text(data.weather[0].description);
	$('#wind-speed').html(`Wind Speed: ${data.wind.speed} m/s`);
	$('#weather-icon').attr('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
	$('#weather-icon').attr('alt', data.weather[0].description);
	$('#weather-info').fadeIn();
}