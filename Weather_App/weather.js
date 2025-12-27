import { API_KEY } from "./config.js";

const apiKey = API_KEY;
const cityInput = document.querySelector('.city-name-input');
const weatherInfo = document.querySelector('.weather-details');

document.querySelector('.submit').addEventListener('click',async event=>{
    event.preventDefault();
    const cityName = cityInput.value;
    if(cityName){
        try{
            const weatherInfo = await getWeatherInfo(cityName);
            dispWeatherInfo(weatherInfo);
        }
        catch(error){
            dispError(error);
        }
    }
    else{
        dispError("Enter a City Name!!");
    }
})

async function getWeatherInfo(cityName){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Couldn't Fetch City!!");
    }
    return await response.json();
}

function dispWeatherInfo(data){

    const {name: cityName,
           main: {humidity, temp},
           weather: [{description, id}]
            } = data;

    weatherInfo.textContent = " ";
    weatherInfo.style.display = "block";

    let cityNameDisp = document.createElement('p');
    let tempDisp = document.createElement('p');
    let humidityDisp = document.createElement('p');
    let weatherTypeDisp = document.createElement('p');
    let weatherImgDisp = document.createElement('p');

    cityNameDisp.textContent = cityName;
    tempDisp.textContent = `${(temp-273).toFixed(2)} °C`;
    humidityDisp.textContent = `Humidity: ${humidity}%`;
    weatherTypeDisp.textContent = description;
    weatherImgDisp.textContent = getWeatherImg(id);

    cityNameDisp.classList.add("city-name");
    tempDisp.classList.add("temp");
    weatherTypeDisp.classList.add("weather-type");
    humidityDisp.classList.add("humidity");
    weatherImgDisp.classList.add("weather-emoji");

    weatherInfo.appendChild(cityNameDisp);
    weatherInfo.appendChild(tempDisp);
    weatherInfo.appendChild(humidityDisp);
    weatherInfo.appendChild(weatherTypeDisp);
    weatherInfo.appendChild(weatherImgDisp);
}

function getWeatherImg(weatherId){
    switch(true){
        case (weatherId >= 200 && weatherId < 300): return "⛈";
        case (weatherId >= 300 && weatherId < 400): return "🌧";
        case (weatherId >= 500 && weatherId < 600): return "🌧";
        case (weatherId >= 600 && weatherId < 700): return "❄";
        case (weatherId >= 700 && weatherId < 800): return "🌫";
        case (weatherId == 800): return "☀";
        case (weatherId >= 801 && weatherId < 810): return "☁";
        default: return "?";

    }
}

function dispError(message){
    const errorMsg = document.createElement('p');
    errorMsg.textContent = message;
    errorMsg.classList.add("error-display");

    weatherInfo.textContent = " ";
    weatherInfo.style.display = "block";
    weatherInfo.appendChild(errorMsg);
}