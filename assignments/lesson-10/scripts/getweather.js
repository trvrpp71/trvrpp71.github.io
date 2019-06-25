function getWeather() {
    var n = Math.floor(Math.random()*120);
    var h = Math.round(n * 1.1);
    var s =Math.floor(Math.random()*21);
    var s_exp = Math.pow(s,.16);
    var hd = Math.round(Math.floor(Math.random()*101));

    if (n < 40 ){
        var wc =  Math.round(35.74+(0.6215*n)-(35.75*s_exp)+(0.4275*n*s_exp)); 
    } else {
        var wc = 0;
    }
    
    document.getElementById('current').innerHTML = "Currently: " + n + "&degF";
    document.getElementById('high').innerHTML = "High: " + h + "&degF";
    document.getElementById('chill').innerHTML = "Wind Chill: " + wc + "&degF";
    document.getElementById('humidity').innerHTML = "Humidity: " + hd + "%";
    document.getElementById('speed').innerHTML = "Wind Speed: " + s + " mph";
}