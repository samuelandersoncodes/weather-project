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
    Today's date is 
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
