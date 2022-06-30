var countDownDate = new Date("June 2, 2022 11:30:00").getTime();

var countFunc = setInterval(function() {  
    var now = new Date().getTime();      
    var timeRemaining = countDownDate - now;   
       
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days+" Days ";
    document.getElementById("hours").innerHTML = hours+" Hours ";
    document.getElementById("mins").innerHTML = minutes+" Mins ";
    document.getElementById("secs").innerHTML = seconds+" Secs ";

   if (timeRemaining < 0) {
        clearInterval(countFunc);        
        document.getElementById("timeOut").innerHTML = "Time Out";      
   }
}, 1000);