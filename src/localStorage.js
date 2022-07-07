const HISTORY_KEY = "cityHistory";

export function loadCityHistory() {
  const cityString = localStorage.getItem(HISTORY_KEY);
  if (cityString === null) {
    console.log("No city found");
    return null;
  }

  return cityString.split(",");
}

export function saveCityToHistory(cityName) {
  if (cityName === null) {
    return;
  }

  const cityList = loadCityHistory() ?? [];
  if (cityList.length > 9) {
    cityList.shift();
  }
  cityList.push(cityName);

  localStorage.setItem(HISTORY_KEY, cityList.join(","));
}
