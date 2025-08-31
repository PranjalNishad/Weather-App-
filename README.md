🌦 **Weather App**

A simple and responsive Weather Forecast Web Application built with HTML, CSS, JavaScript, jQuery, and OpenWeatherMap API.
The app allows users to search for any city worldwide and view real-time weather details such as temperature, feels-like temperature, weather description, wind speed, humidity, and local date & time.

🚀 Features

    🌍 Search weather by city name
    
    📍 Fetch accurate coordinates (lat/lon) using OpenWeather Geocoding API
    
    🌡 Shows temperature & feels-like values in °C
    
    🌤 Displays weather condition, wind speed, and humidity
    
    ⏰ Shows local date & time of the searched city
    
    🎨 Modern & responsive UI design with animations and background image
    
    ⌨️ Press Enter key or click button to search
    
    🖼 Dynamic weather icon support (ready in code, can be uncommented)

🛠️ Technologies Used

    HTML5 – Structure of the app
    
    CSS3 – Styling with animations & responsive design
    
    JavaScript (ES6) – Core logic
    
    jQuery – DOM manipulation & event handling
    
    Moment.js – Local date & time formatting
    
    OpenWeatherMap API – Real-time weather data

⚙️ Setup & Installation

  Clone this repository:
    
    git clone https://github.com/your-username/weather-app.git
    cd weather-app
    
    
  Open index.html in your browser.
    
  Replace the API key inside main.js with your own from OpenWeatherMap :
    
    const apiKey = "YOUR_API_KEY_HERE";
    
    
  (Optional) Uncomment weather icon lines in main.js if you want icons to display:
    
    $('#weather-icon')
      .attr('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
      .attr('alt', data.weather[0].description);
    
    $('#weather-info').fadeIn();


📂 Project Structure

    weather-app/
    │── index.html        # Main HTML structure
    │── style.css         # Styling and responsive design
    │── main.js           # JavaScript logic & API handling
    │── image/            # Background image(s)
    

🌐 Live Demo

    (You can deploy this project easily on GitHub Pages, Netlify, or Vercel and add your live link here.)

📌 Future Improvements

    🌡 Add 7-day weather forecast
    
    📍 Detect user's current location automatically
    
    🎨 Allow theme switching (light/dark)
    
    📊 Add more weather stats (pressure, sunrise/sunset, etc.)
