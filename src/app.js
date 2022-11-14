function displayTemperature(reposnse) {
  console.log(response.data);
}

let apiKey = "19a7287a43046ce253c65a1908dfe8b1";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
