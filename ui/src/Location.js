export function hasLocationAccess() {
  if ("geolocation" in navigator) {
    // console.log("Available");
    return true;
  } else {
    console.log("Location Not Available");
    return false;
  }
}

export function getCurrentLocation() {
  let response = "x";
  navigator.geolocation.getCurrentPosition(
    function (position) {
      let lt = [];
      lt.push(position.coords.latitude);
      lt.push(position.coords.longitude);
      response = lt;
    },
    function (error) {
      console.error("Error Code = " + error.code + " - " + error.message);
    },
  );
  return response;
}
export function watchPosition() {
  navigator.geolocation.watchPosition(function (position) {
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
  });
}
