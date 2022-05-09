//INDIA:--
let country1 = document.getElementById("india");
country1.addEventListener("click", function() {
  document.getElementById("info").classList.add("hide");
  document.getElementById("dropdownMenuButton1").innerHTML = country1.innerHTML;
  let interval = setInterval(function clock() {
    let weeks = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = new Date();
    let hr = day.getHours();
    let min = day.getMinutes();
    let sec = day.getSeconds();
    let weekno = day.getDay();
    let week = weeks[weekno];
    let monthno = day.getMonth();
    let month = months[monthno];

    if (hr < 10) {
      hr = "0" + hr;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (hr > 12) {
      document.getElementById("meridian").innerHTML = "Pm";
    }
    if (hr == 12) {
      document.getElementById("meridian").innerHTML = "Pm";
    }
    if (hr < 12) {
      document.getElementById("meridian").innerHTML = "Am";
    }

    document.getElementById("hour").innerHTML = hr;
    document.getElementById("minute").innerHTML = ":" + min + ":";
    document.getElementById("second").innerHTML = sec;
    document.getElementById("day").innerHTML = week + ",";
    document.getElementById("month").innerHTML = month;

    if (document.getElementById("dropdownMenuButton1").innerHTML == "AMERICA") {
      clearInterval(interval);
    }
    if (document.getElementById("dropdownMenuButton1").innerHTML == "SINGAPORE") {
      clearInterval(interval);
    }

  }, 1000);
  clock();

});

//AMERICA(NEWYORK CITY):-
let country2 = document.getElementById("america");
country2.addEventListener("click", function() {
  document.getElementById("info").classList.add("hide");
  document.getElementById("dropdownMenuButton1").innerHTML = country2.innerHTML;
  let interval = setInterval(function watch() {
    let weeks = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var americaday = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York"
    });
    americaday = new Date(americaday);
    let hr = americaday.getHours();
    let min = americaday.getMinutes();
    let sec = americaday.getSeconds();
    let weekno = americaday.getDay();
    let week = weeks[weekno];
    let monthno = americaday.getMonth();
    let month = months[monthno];

    if (hr < 10) {
      hr = "0" + hr;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (hr > 12) {
      document.getElementById("meridian").innerHTML = "Pm";
    }
    if (hr == 12) {
      document.getElementById("meridian").innerHTML = "Pm";
    }
    if (hr < 12) {
      document.getElementById("meridian").innerHTML = "Am";
    }

    document.getElementById("hour").innerHTML = hr;
    document.getElementById("minute").innerHTML = ":" + min + ":";
    document.getElementById("second").innerHTML = sec;
    document.getElementById("day").innerHTML = week + ",";
    document.getElementById("month").innerHTML = month;


    if (document.getElementById("dropdownMenuButton1").innerHTML == "INDIA") {
      clearInterval(interval);
    }
    if (document.getElementById("dropdownMenuButton1").innerHTML == "SINGAPORE") {
      clearInterval(interval);
    }


  }, 1000);
  watch();

});

//china

let country3 = document.getElementById("singapore");
country3.addEventListener("click", function() {
  document.getElementById("info").classList.add("hide");
  document.getElementById("dropdownMenuButton1").innerHTML = country3.innerHTML;
  let interval = setInterval(function time() {
    let weeks = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var chinaday = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Singapore"
    });
    chinaday = new Date(chinaday);
    let hr = chinaday.getHours();
    let min = chinaday.getMinutes();
    let sec = chinaday.getSeconds();
    let weekno = chinaday.getDay();
    let week = weeks[weekno];
    let monthno = chinaday.getMonth();
    let month = months[monthno];

    if (hr < 10) {
      hr = "0" + hr;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (hr > 12) {
      document.getElementById("meridian").innerHTML = "Pm";
    }
    if (hr == 12) {
      document.getElementById("meridian").innerHTML = "Pm";
    }
    if (hr < 12) {
      document.getElementById("meridian").innerHTML = "Am";
    }

    document.getElementById("hour").innerHTML = hr;
    document.getElementById("minute").innerHTML = ":" + min + ":";
    document.getElementById("second").innerHTML = sec;
    document.getElementById("day").innerHTML = week + ",";
    document.getElementById("month").innerHTML = month;


    if (document.getElementById("dropdownMenuButton1").innerHTML == "INDIA") {
      clearInterval(interval);
    }

    if (document.getElementById("dropdownMenuButton1").innerHTML == "AMERICA") {
      clearInterval(interval);
    }

  }, 1000);
  time();

});

//dark mode and light mode:-
function dmode() {
  var element = document.body;
  element.classList.add("dark-mode");
  document.getElementById("tit").classList.add("title");
  document.getElementById("clock").classList.add("round");

}

function lmode() {
  var element = document.body;
  element.classList.remove("dark-mode");
  document.getElementById("tit").classList.remove("title");
  document.getElementById("clock").classList.remove("round");
}
