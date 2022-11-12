function formatDate(date) {
         
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

  let months= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let currentYear = date.getFullYear();
  let currentMonth = months[date.getMonth()];
  let currentDay = days[date.getDay()];
  let currentDate = date.getDate();
  
  
  let formattedDate =
     `Today's date is ${currentDay}, ${currentMonth},${currentDate}, ${currentYear}`;

   return formattedDate;
  }
 let date = new Date("2022/10/11");
 console.log(formatDate(date));
  