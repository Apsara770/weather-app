function getWeather() {

    const city = document.getElementById("cityInput").value;
    const apiKey = "c048a8b270f379cc5e5f3da023d456b2";

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
