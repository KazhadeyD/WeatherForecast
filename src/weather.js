const API_KEY = "c1d953812265ca6dc359df36112a41c6";

export async function getWeatherByGeoCoord(lat, lon) {
  const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=en&units=metric&appid=${API_KEY}`;
  const res = await fetch(path);
  return await res.json();
}

export async function getWeatherBycity(cityName) {
  const path = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=en&units=metric&appid=${API_KEY}`;
  const res = await fetch(path);
  return await res.json();
}
