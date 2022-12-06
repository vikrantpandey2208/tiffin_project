import { getFromStorage } from "../storage";

export function GetLoggedUser() {
  const obj = getFromStorage("tiffin_app_user");

  if (obj && obj.token) {
    const { setupTime } = obj;
    var now = new Date().getTime();

    if (now - setupTime > 1 * 60 * 60 * 1000) {
      localStorage.removeItem("tiffin_app_user");

      return null;
    } else return obj;
  } else {
    return null;
  }
}
export function GetLoggedSeller() {
  const obj = getFromStorage("tiffin_app_seller");
  if (obj && obj.token) {
    const { setupTime } = obj;
    var now = new Date().getTime();

    if (now - setupTime > 1 * 60 * 60 * 1000) {
      localStorage.removeItem("tiffin_app_seller");

      return null;
    } else return obj;
  } else {
    return null;
  }
}
