function getWeather() {

    const city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_API_KEY_HERE";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temp").innerText = "Temperature: " + data.main.temp + "°C";
        document.getElementById("condition").innerText = "Condition: " + data.weather[0].main;

    })
    .catch(error => {
        alert("City not found!");
    });

}
