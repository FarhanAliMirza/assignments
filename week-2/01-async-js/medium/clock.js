function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds + " " + ampm;
    console.log(timeString);

    setTimeout(displayTime, 1000);
}

var displayTimeout = setTimeout(displayTime, 0);
setTimeout(function () {
    console.log("Time display stopped.");
    clearTimeout(displayTimeout);
}, 20000);
