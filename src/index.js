import {getCurrentGeoPos} from "./geo";
import {getWeatherByGeoCoord, getWeatherBycity} from "./weather";

function subscribe() {
  const btn = document.getElementById("btnGetWeather");
  btn.addEventListener("click", () => getWeatherBycity(document.getElementById("inputCity").value));
}

async function main() {
  const position = await getCurrentGeoPos();

  const weather = await getWeatherByGeoCoord(position["latitude"], position["longitude"]);
  const weatherInfoElem = document.querySelector("#weather-info");
  weatherInfoElem.innerHTML = `<li>Ваш город: ${weather["name"]}</li>
                               <li>Температура: ${weather["main"]["temp"]} C°</li>
                               <li><i>Место под иконку</i></li>`;
}

subscribe();
main();
