export function getMap(lat, lon) {
  const mapEl = document.querySelector("#map");
  mapEl.src = `https://static-maps.yandex.ru/1.x/?ll=${lon},${lat}&z=10&l=map&pt=${lon},${lat},flag`;
}
