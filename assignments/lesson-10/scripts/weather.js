let weatherObject1 = new XMLHttpRequest();
let weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=e9a8fc67ba9b237ce516dd7ae7f7d335';

weatherObject1.open('GET',weatherURL,true);
weatherObject1.send();
weatherObject1.onload=function(){
    let weatherInfo=JSON.parse(weatherObject1.responseText);
    console.log(weatherInfo);

    var tmp = Math.round(weatherInfo.main.temp);
    var spd = Math.round(weatherInfo.wind.speed);
    var spd_exp = Math.pow(spd,.16);
    var wndchll =  Math.round(35.74+(0.6215*tmp)-(35.75*spd_exp)+(0.4275*tmp*spd_exp));
    var dir = weatherInfo.wind.deg;
    if (dir >337.5 && dir<=22.5){
        dir="N";
    } else if (dir >22.5 && dir<=67.5){
        dir="NE";
    } else if (dir > 67.5 && dir<=112.5){
        dir="E";
    } else if (dir >112.5 && dir <=157.5){
        dir="SE";
    } else if (dir >157.5 && dir <= 202.5){
        dir="S";
    } else if (dir > 202.5 && dir <= 247.5){
        dir="SW";
    } else if (dir > 247.5 && dir <= 292.5){
        dir="W";
    } else {
        dir="NW";
    };


    document.getElementById('temp').innerHTML = tmp;
    document.getElementById('temp_max').innerHTML = Math.round(weatherInfo.main.temp_max);
    document.getElementById('humidity').innerHTML = Math.round(weatherInfo.main.humidity);
    document.getElementById('speed').innerHTML = spd;
    document.getElementById('chill').innerHTML = wndchll;
    document.getElementById('dir').innerHTML = dir;
}//end of weatherObject1 onload