const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore"



const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")


async function checkweather(city)
{
    const response = await fetch(apiUrl + city + `&apiid=${apiKey}`);
    var data = await response.json();

    console.log(data)


    if(response.status == 404)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else
    {
        var data = await response.json();
    }


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


    if(data.weather[0].main == "Clouds")
    {
        weatherIcon.src = "photu/clouds.png"
    }
    else if(data.weather[0].main == "Clear")
    {
        weatherIcon.src = "photu/clear.png"
    }
    else if(data.weather[0].main == "Rain")
    {
        weatherIcon.src = "photu/rain.png"
    }
    else if(data.weather[0].main == "Drizzle")
    {
         weatherIcon.src = "photu/drizzle.png"
    }
    else if(data.weather[0].main == "Mist")
    {
        weatherIcon.src = "photu/mist.png"
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"
}



searchBtn.addEventListener("click", ()=>
{
    checkweather(searchBox.value);
})

checkweather();