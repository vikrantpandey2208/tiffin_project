export async function Fetch(path, data, isFullUrl = false) {
  try {
    let url = path;
    if (!isFullUrl) {
      const endpoint = "http://localhost:8000";
      url = endpoint.concat(path);
    }

    console.log("URL ", url);

    const response = await fetch(url, {
      method: "POST",
      headers: {},

      body: data,
    });
    const body = await response.text();
    console.log(body);
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
  const res = await fetch(endpoint + query);
  const body = await res.text();
  const response = JSON.parse(body);
  return response;
}
