const Pixabay_API_KEY = "28114228-feb460adcbe14f5937e0a710f";
//const URL = "https://pixabay.com/api/?key=" + Pixabay_API_KEY + "&q=" + encodeURIComponent("하늘");
const URL = `https://pixabay.com/api/?key=${Pixabay_API_KEY}&q=`+encodeURIComponent("하늘")
fetch(URL).then(respons => respons.json()
.then(data=>{
  if (parseInt(data.totalHits) > 0) {
    const imgArray = data.hits;
    const random = imgArray[Math.floor(Math.random() * imgArray.length)];

    const body = document.body;

    body.style = `background : url(${random.largeImageURL}); background-size: cover;
    background-repeat: no-repeat; `;
  } else 
    console.log("No hits");
  }
))


const weater_API_KEY = "931cf418021445795381368f79037456"



function getWeather(positon){
  const lat = positon.coords.latitude;
  const lon = positon.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weater_API_KEY}`
  fetch(url).then(response => response.json().then(data=>{
      let weatherIcon =data.weather[0].icon;
      const weatherAria = document.querySelector(".weater-info");
      const IconAria = weatherAria.querySelector("img");
      const ExAria = weatherAria.querySelector(".weather-ex")
      const city = weatherAria.querySelector(".city-name")
      IconAria.src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
      ExAria.innerText= data.weather[0].description
      city.innerText = `${data.name}`
  }));
}
function fallWeather(){
  alert("Can't find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(getWeather,fallWeather);
