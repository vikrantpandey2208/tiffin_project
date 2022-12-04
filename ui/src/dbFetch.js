export async function Fetch(path, data) {
  try {
    // const endpoint = "http://192.168.43.23:8000";
    const endpoint = "http://localhost:8000";
    const response = await fetch(endpoint.concat(path), {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    });
    const body = await response.text();
    const result = JSON.parse(body);
    return result;
  } catch (e) {
    return {
      success: false,
      message: "Internal Server Error",
    };
  }

  return null;
}
export async function UploadImage(path, data, isFullUrl = false) {
  try {
    let url = path;

    const response = await fetch(url, {
      method: "POST",
      headers: {},

      body: data,
    });
    const body = await response.text();
    // console.log(body);
    const result = JSON.parse(body);
    return result;
  } catch (e) {
    console.log(e);
    alert(`Error in sending data to server: ${e.message}`);
  }

  return null;
}

export async function Get(query) {
  const endpoint = "http://localhost:8000";
  // const endpoint = "http://192.168.43.23:8000";
  const res = await fetch(endpoint + query);
  const body = await res.text();
  const response = JSON.parse(body);
  return response;
}
