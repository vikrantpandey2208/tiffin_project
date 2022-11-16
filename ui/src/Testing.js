export function hasLocationAccess() {
  if ("geolocation" in navigator) {
    console.log("Available");
  } else {
    console.log("Not Available");
  }
}

export function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      console.log("Position is ", position);
    },
    function (error) {
      console.error("Error Code = " + error.code + " - " + error.message);
    },
  );
}
export function watchPosition() {
  navigator.geolocation.watchPosition(function (position) {
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
  });
}
