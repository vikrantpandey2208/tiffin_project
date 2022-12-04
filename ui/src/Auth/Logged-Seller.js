import { setInStorage, getFromStorage } from "../storage";
import { Fetch, Get } from "../dbFetch.js";

export function GetLoggedUser() {
  const obj = getFromStorage("tiffin_app_user");

  if (obj && obj.token) {
    const { token, setupTime } = obj;
    var now = new Date().getTime();

    if (now - setupTime > 1 * 60 * 60 * 1000) {
      localStorage.removeItem("tiffin_app_user");

      const response = Get("/api/logout?token=" + token);

      return null;
    } else return obj;
  } else {
    return null;
  }
}
export function GetLoggedSeller() {
  const obj = getFromStorage("tiffin_app_seller");
  if (obj && obj.token) {
    const { token, setupTime } = obj;
    var now = new Date().getTime();

    if (now - setupTime > 1 * 60 * 60 * 1000) {
      localStorage.removeItem("tiffin_app_seller");

      const response = Get("/api/seller-logout?token=" + token);

      return null;
    } else return obj;
  } else {
    return null;
  }
}
