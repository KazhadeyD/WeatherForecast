export async function getCurrentGeoPos() {
  const value = await fetch(
      "https://get.geojs.io/v1/ip/geo.json",
  );

  const res = await value.json();
  const position = {};
  position["longitude"] = res["longitude"];
  position["latitude"] = res["latitude"];

  return position;
}
