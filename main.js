const lat = "-90";
const long = "-250";
const url = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
let name = "";
let country = "";
let cels = "";
let icon = "";

fetch(url)
    .then(response => response.json())
    .then(data => {
        name = data.name;
        country = data.sys.country;
        cels = data.main.temp;
        icon = data.weather[0].icon;
        const weather = data.weather[0].main;
        document.querySelector('#weather-info').innerHTML = `
            <div class=name>
                <p>${name}, ${country}</p>
            </div>
            <div class="cells">
  	            <p>${cels} &deg;<a class="degreeType" href="#">C</a></p>  
            </div>
             <div class="weather">
                ${weather}
            </div>`

        if (weather.toLowerCase() === "clear") {
            document.getElementById('icon').innerHTML = `
                <div class="icon sunny">
                     <div class="sun">
                        <div class="rays"></div>
                    </div>
                </div>`;
        }
        else if (weather.toLowerCase() === "rain") {
            document.getElementById('icon').innerHTML = `
            <div class="icon rainy">
                <div class="cloud"></div>
                <div class="rain"></div>
            </div>`
        }else if (weather.toLowerCase() === "clouds") {
            document.getElementById('icon').innerHTML = `
            <div class="icon cloudy">
                <div class="cloud"></div>
                <div class="cloud"></div>
            </div>`
        }else if (weather.toLowerCase() === "thunderstorm") {
            document.getElementById('icon').innerHTML = `
            <div class="icon thunder-storm hidden">
                <div class="cloud"></div>
                <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                </div>
            </div>`
        }


    })
