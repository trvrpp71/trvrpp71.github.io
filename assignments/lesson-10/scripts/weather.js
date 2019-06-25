const weatherObject = new XMLHttpRequest();
weatherObject.open("GET","//api.openweathermap.org/data/2.5/weather?id=2172797,&appid=e9a8fc67ba9b237ce516dd7ae7f7d335",true )
weatherObject.send();
weatherObject.onload = function() {
    let weatherinfo=JSON.parse(weatherObject.responseText);
    console.log(weatherinfo);

} //end of onload