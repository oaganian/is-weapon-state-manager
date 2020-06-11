export const userLoginApi = data => {
  fetch(`http://localhost:5000/api/users/login`, {
    method: "POST",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((response) => {
    return response.json();
  }).then((data) => {
    return data;
  })
}