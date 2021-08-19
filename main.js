//define vars to hold time values
let hours = 0;
let sec = 0;
let min = 0;

//define vars to hold display value
let displaySec = 0;
let displayMin = 0;
let displayHours = 0;

//var to hold setInterval() function
let interval = null;
let stopped = true;

// logic to determine when to increment next value
function stopwatch() {
  sec++;

  if (sec / 60 === 1) {
    sec = 0;
    min++;

    if (min / 60 === 1) {
      min = 0;
      hours++;
    }
  }

  if (sec < 10) {
    displaySec = "0" + sec.toString();
  } else {
    displaySec = sec;
  }

  if (min < 10) {
    displayMin = "0" + min.toString();
  } else {
    displayMin = min;
  }

  if (hours === 0) {
    displayHours = "00";
  } else if (hours < 10) {
    displayHours = "0" + hours.toString();
  } else {
    displayHours = hours;
  }

  // display updated values to user
  document.getElementById("display").innerHTML =
    displayHours + ":" + displayMin + ":" + displaySec;
}

function startStop() {
  if (stopped) {
    interval = window.setInterval(stopwatch, 1000);
    document.getElementById("start").innerHTML = "stop";
    stopped = false;
  } else {
    window.clearInterval(interval);
    document.getElementById("start").innerHTML = "start";
    stopped = true;
  }
}

function reset() {
  window.clearInterval(interval);
  sec = 0;
  min = 0;
  hours = 0;
  document.getElementById("display").innerHTML = "00:00:00";
  document.getElementById("startStop").innerHTML = "start";
}
