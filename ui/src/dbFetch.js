export default async function Fetch(path, variables = {}) {
  try {
    const response = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        variables,
      }),
    });
    const body = await response.text();

    return body;
  } catch (e) {
    alert(`Error in sending data to server: ${e.message}`);
  }

  return null;
}
