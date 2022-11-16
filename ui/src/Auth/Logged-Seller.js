import { setInStorage, getFromStorage } from "../storage";
import { Fetch, Get } from "../dbFetch.js";

export function GetLoggedSeller() {
  const obj = getFromStorage("tiffin_app_seller");

  if (obj && obj.token) {
    const { token, setupTime } = obj;
    var now = new Date().getTime();

    if (now - setupTime > 1 * 1 * 50 * 1000) {
      localStorage.removeItem("tiffin_app_seller");

      const response = Get("/api/seller-logout?token=" + token);

      return null;
    } else return token;
  } else {
    return null;
  }
}
