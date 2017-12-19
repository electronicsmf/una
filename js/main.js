function tellTime(){
    var time = new Date();
    var hour = time.getHours(),
    ampm;
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var week = time.getDay();
    var day = time.getDate();
    var month = time.getMonth();
    var year = time.getFullYear();
   

    var phour = document.getElementById("hour");
    var pampm = document.getElementById('ampm');
    var pminutes = document.getElementById("minutes");
    var pseconds = document.getElementById("seconds");
    var pweek = document.getElementById("week");
    var pday = document.getElementById("day");
    var pmonth = document.getElementById("month");
    var pyear = document.getElementById("year");
   
    var weeks = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    pweek.textContent = weeks[week];

    pday.textContent = day;

    var months = ['January','February','March','April','May','June','July','August','September','Octuber','November','December'];
    pmonth.textContent = months[month];

    pyear.textContent = year;

    if(hour >=12){
       hour = hour -12;
       ampm = "PM";
    }else{
        ampm="AM";
    }
    if(hour == 0){
        hour == 12;
    };

    phour.textContent = hour;
    pampm.textContent = ampm;
    pminutes.textContent = minutes;
    pseconds.textContent = seconds;

}
 
setInterval(tellTime,1000);

