const weatherIcons = {
  thunderStorm: 'wi-thunderstorm',
  drizzle: 'wi-sleet',
  rain: 'wi-showers',
  snow: 'wi-snow',
  atmosphere: 'wi-fog',
  clear: 'wi-day-sunny',
  clouds: 'wi-cloudy'
};

const setWeatherIcon = weatherId => {
  let icon;
  switch (true) {
    case weatherId >= 200 && weatherId <= 232:
      icon = weatherIcons.thunderStorm;
      break;

    case weatherId >= 300 && weatherId <= 321:
      icon = weatherIcons.drizzle;
      break;

    case weatherId >= 500 && weatherId <= 531:
      icon = weatherIcons.rain;
      break;

    case weatherId >= 600 && weatherId <= 622:
      icon = weatherIcons.snow;
      break;

    case weatherId >= 701 && weatherId <= 781:
      icon = weatherIcons.atmosphere;
      break;

    case weatherId === 800:
      icon = weatherIcons.clear;
      break;

    case weatherId >= 801 && weatherId <= 804:
      icon = weatherIcons.clouds;
      break;

    default:
      icon = weatherIcons.clouds;
      break;
  }

  return icon;
};

export { setWeatherIcon };
