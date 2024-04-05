//Card Weather

const apiKey = "28e56c3d9b71382bdff7c39f146efa9f"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png"
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png"
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/clear.png"
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/clear.png"
    }

    document.querySelector(".weather").style.display = "block"; 
    document.querySelector(".error").style.display = "none"; 
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

checkWeather();

//Dark Theme

var icon = document.getElementById("icon");

    icon.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
            icon.src = "images/sun.png";
        }else{
            icon.src = "images/moon.png";
        }
    }

// Language Change

const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const citynamEl = document.querySelector('.cityNam');
const errorEl = document.querySelector('.error');
const humidityEl = document.querySelector('.humiditytxt');
const windEl = document.querySelector('.windtxt');
const inputEl = document.querySelector('.text');


link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        citynamEl.textContent = dataLang[attr].cityNam;
        errorEl.textContent = dataLang[attr].error;
        humidityEl.textContent = dataLang[attr].humidity;
        windEl.textContent = dataLang[attr].wind;
        inputEl.textContent = dataLang[attr].input;
    });
    
});

var dataLang = {
    "english":
    {
        "cityNam": "Enter city name",
        "error": "Invalid city name, try again",
        "humidity": "Humidity",
        "wind": "Wind Speed"
    },
    "portuguese":
    {
        "cityNam": "Digite o nome da Cidade",
        "error": "O nome da cidade está inválido, tente novamente",
        "humidity": "Umidade",
        "wind": "Velocidade do Vento"
    }
}

