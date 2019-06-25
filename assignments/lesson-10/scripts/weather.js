/*const weatherObject = new XMLHttpRequest();
weatherObject.open("GET","//api.openweathermap.org/data/2.5/weather?id=5604473,&appid=e9a8fc67ba9b237ce516dd7ae7f7d335",true )
weatherObject.send();
weatherObject.onload = function() {
    let weatherinfo=JSON.parse(weatherObject.responseText);
    console.log(weatherinfo);

} //end of onload*/

let weatherObject = new XMLHttpRequest();
let apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=e9a8fc67ba9b237ce516dd7ae7f7d335';
weatherObject.open('GET',apiURL,true);
weatherObject.send();