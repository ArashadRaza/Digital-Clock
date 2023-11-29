function timeCount(){
    var date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    session = "AM";

    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h-12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    // console.log(m);

    time = "<span>" + h + "</span>:<span>" + m + "</span>:<span>" + s + "<span>" + session;

    document.getElementById('digiClock').innerHTML = time;
    setTimeout(timeCount,1000);
}

timeCount()