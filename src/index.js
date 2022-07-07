import {getCurrentGeoPos} from "./geo";
import {getWeatherByGeoCoord, getWeatherBycity} from "./weather";
import {loadCityHistory, saveCityToHistory} from "./localStorage";

function subscribe() {
  const btn = document.getElementById("btnGetWeather");
  btn.addEventListener("click", async () => {
    const city = document.getElementById("inputCity").value;
    if (city === null) {
      return;
    }
    const weather = await getWeatherBycity(city);
    const weatherInfoElem = document.querySelector("#weather-info-in-city");
    weatherInfoElem.innerHTML = `<li>Введенный город: ${city}</li>
                                <li>Температура: ${weather["main"]["temp"]} C°</li>`;

    saveCityToHistory(city);
    createCityList();
  });
}

async function main() {
  const position = await getCurrentGeoPos();

  const weather = await getWeatherByGeoCoord(position["latitude"], position["longitude"]);
  const weatherInfoElem = document.querySelector("#weather-info");
  weatherInfoElem.innerHTML = `<li>Ваш город: ${weather["name"]}</li>
                               <li>Температура: ${weather["main"]["temp"]} C°</li>
                               <li><i>Место под иконку</i></li>`;
}

function createCityList() {
  const cityList = loadCityHistory();
  if (cityList.length === null) {
    return;
  }
  const list = document.querySelector("#city-history");
  list.innerHTML = "";

  cityList.forEach((city, index)=> {
    const li = document.createElement("li");
    li.innerText = city;
    li.addEventListener("click", async () => {
      const weather = await getWeatherBycity(city);
      const weatherInfoElem = document.querySelector("#weather-info-in-city");
      weatherInfoElem.innerHTML = `<li>Введенный город: ${city}</li>
                                  <li>Температура: ${weather["main"]["temp"]} C°</li>`;
    });
    list.appendChild(li);
  });
}

subscribe();
main();
createCityList();
