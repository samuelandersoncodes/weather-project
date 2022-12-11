function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];


  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentYear = date.getFullYear();
  let currentDate = date.getDate();

  let formattedDate =
    `
    Today is 
    ${currentDay} 
    ${currentMonth}
    ${currentDate},
    ${currentYear}
    `;
  return formattedDate;
}

let date = new Date();
let dateElement = document.querySelector("#date");
dateElement.innerHTML = formatDate(date);

function formatTime(date) {
  let currentHour = date.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinute = date.getMinutes();
  if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }
  return `${currentHour} : ${currentMinute} `
}

let time = new Date();
let timeElement = document.querySelector("#time")
timeElement.innerHTML = formatTime(date);


function displayWeather(response) {
  let city = document.querySelector("#city");
  let temp = document.getElementById("temperature");
  let humidity = document.getElementById("humidity");
  let wind = document.getElementById("wind");
  let pressure = document.getElementById("pressure");
  let description = document.getElementById("description");
  // let dateHolder = document.getElementById("date");

  city.innerHTML = response.data.name;
  temp.innerHTML = Math.round(response.data.main.temp);
  humidity.innerHTML = Math.round(response.data.main.humidity);
  wind.innerHTML = Math.round(response.data.wind.speed);
  pressure.innerHTML = Math.round(response.data.main.pressure);
  description.innerHTML = response.data.weather[0].description;
  // dateHolder.innerHTML = formatDate(response.data.dt * 1000);
}

function search(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  search(cityInput.value);
  
}

search('Berlin');
let form = document.querySelector("#form");
form.addEventListener("submit", handleSubmit);




