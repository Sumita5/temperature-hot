const API_KEY = "ef77b02c3bfda8e9c593e7e580419762";

function getWeather(){
    const city = document.getElementById('input-city').value;



fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
.then(res => res.json())
.then(data => {
    console.log(data)
    document.getElementById('temperature').innerHTML = data.main.temp.toFixed(0) + ' ' + `&deg;C`;
    document.getElementById('city').innerHTML = data.name;
    document.getElementById('status').innerHTML = data.weather[0].main
    const icon = ("<img src ='https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png'>");
    document.getElementById('img').innerHTML = icon
}).catch(() =>{
    alert("please write the valid city name")
})
}