function currentSlide(n) {

    showSlides(slideIndex = n);
    }

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;

    /*----add the information for the slide----*/

    var requestURL ='https://trvrpp71.github.io/assignments/templesite/scripts/temples.json'
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var temple = request.response;
        console.log(temple);
        console.log(n);
        showTemple(temple);
    } //end of request.onload funtion

  
    function showTemple(jsonObj) {
        /*first clear out any previous data*/
        document.getElementById("Clear1").innerHTML="";
        var towns = jsonObj['temples'];
        
        /*----setup elements---*/
        var infoSection = document.querySelector('.templeInfo');
        /*---create subcontainer---*/
        var article = document.createElement('article');

        /*address*/
        var adH3 = document.createElement('h3');
        var adList = document.createElement('ul');
        /*phone*/
        var phH3 = document.createElement('h3');
        var phP = document.createElement('p');
        /*email*/
        var emH3 = document.createElement('h3');
        var emP = document.createElement('p');
        /*services*/
        var srH3 = document.createElement('h3');
        var srList = document.createElement('ul');
        /*schedules*/
        var scH3 = document.createElement('h3');
        var scList = document.createElement('ul');
        /*closures*/
        var clH3 = document.createElement('h3');
        var clList = document.createElement('ul');


        /*var myImg = document.createElement('img');*/
    
        
        /*---populate elements with town data----*/
        adH3.textContent = "Address";
        /*----get the address info----*/
        var address = towns[n-1].address;
        for (var j=0; j<address.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = address[j];
            adList.appendChild(listItem);
        };
        /*---phone & email----*/
        phH3.textContent = "Telephone";
        phP.textContent = towns[n-1].phone;
        emH3.textContent = "Email";
        emP.textContent = "Please log into your LDS account to email the temple."
        srH3.textContent = "Services";
        /*---get the services info---*/
        var services = towns[n-1].services;
        for (var j=0; j<services.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = services[j];
            srList.appendChild(listItem);
        };
        scH3.textContent = "Ordinance Schedule";
        /*---get the schedules----*/
        var sched = towns[n-1].schedules;
        for (var j=0; j<sched.length; j++){
            var listItem = document.createElement('li');
            listItem.textContent = sched[j];
            scList.appendChild(listItem);
        };   
        clH3.textContent = "Closures";
        /*---closure info---*/
        var closures = towns[n-1].closures;
        for (var j=0; j<closures.length; j++){
            var listItem = document.createElement('li');
            listItem.textContent = closures[j];
            clList.appendChild(listItem);
        };
        
        /*---create the div with the elements and data---*/
        article.appendChild(adH3);
        article.appendChild(adList);
        article.appendChild(phH3);
        article.appendChild(phP);
        article.appendChild(emH3);
        article.appendChild(emP);
        article.appendChild(srH3);
        article.appendChild(srList);
        article.appendChild(scH3);
        article.appendChild(scList);
        article.appendChild(clH3);
        article.appendChild(clList);
        infoSection.appendChild(article);

    /*---add the weather summary----*/
        let weatherObject = new XMLHttpRequest();
        var weatherURL = "";
        switch (n) {
            case 1: //Cardston
                weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5916821&units=imperial&APPID=e9a8fc67ba9b237ce516dd7ae7f7d335';
                break;
            case 2: //Edmonton
                weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5946768&units=imperial&APPID=e9a8fc67ba9b237ce516dd7ae7f7d335';
                break;
            case 3: //Logan
                weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5777544&units=imperial&APPID=e9a8fc67ba9b237ce516dd7ae7f7d335';
                break;
            case 4: //Houston
                 weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=4699066&units=imperial&APPID=e9a8fc67ba9b237ce516dd7ae7f7d335';
                break;
        } //end of switch statement
        weatherObject.open('GET',weatherURL,true);
        weatherObject.send();
        weatherObject.onload=function(){

             /*first clear out any previous data*/
            document.getElementById("Clear2").innerHTML="";
            let weatherInfo=JSON.parse(weatherObject.responseText);
            /*----setup elements---*/
            var weatherSummary = document.querySelector('.weatherInfo');
            /*---create subcontainer---*/
            var article = document.createElement('article');
            /*address*/
            var wtH3 = document.createElement('h3');
            var wtP1 = document.createElement('p'); //temp
            var wtP2 = document.createElement('p'); //high
            var wtP3 = document.createElement('p'); //humidity
            var wtP4 = document.createElement('p'); //description

            wtP1.setAttribute('class','wtP1');
            wtP2.setAttribute('class','wtP2');
            wtP3.setAttribute('class','wtP3');
            wtP4.setAttribute('class','wtP4');

            wtH3.textContent = "Weather summary for the Area";
            wtP1.textContent = "Currently:" + Math.round(weatherInfo.main.temp)+ "\u00B0" +"F";
            wtP2.textContent = "High:" + Math.round(weatherInfo.main.temp_max) + "\u00B0" +"F";
            wtP3.textContent = "Humidity:" + weatherInfo.main.humidity + "%";
            wtP4.textContent = "Conditions:" + weatherInfo.weather[0].description;

            /*---create the div with the elements and data---*/
            article.appendChild(wtH3);
            article.appendChild(wtP1);
            article.appendChild(wtP2);
            article.appendChild(wtP3);
            article.appendChild(wtP4);
            weatherSummary.appendChild(article);

        } //end of weatherObject onload

    } //end of showTemple()
}//end of showSlides function