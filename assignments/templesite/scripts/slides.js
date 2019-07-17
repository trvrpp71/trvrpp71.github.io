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
        showTemple(temple);
    }

    function showTemple(jsonObj) {
        /*first clear out any previous data*/
        document.getElementById("toClear").innerHTML="";
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
        }
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
        }
        scH3.textContent = "Ordinance Schedule"
        /*---get the schedules----*/
        var sched = towns[n-1].schedules;
        for (var j=0; j<sched.length; j++){
            var listItem = document.createElement('li');
            scList.textContent = sched[j];
        }   
        clH3.textContent = "Closures";
        /*---closure info---*/
        var closures = towns[n-1].closures;
        for (var j=0; j<closures.length; j++){
            var listItem = document.createElement('li');
            listItem.textContent = closures[j];
            clList.appendChild(listItem);
        }
        
        /*---create the div with the elements and data---*/
        article.appendChild(adH3);
        article.appendChild(adList);
        article.appendChild(phH3);
        article.appendChild(phP);
        article.appendChild(emH3);
        article.appendChild(emP);
        article.appendChild(srH3);
        article.appendChild(srList);
        article.appendChild(scList);
        article.appendChild(clH3);
        article.appendChild(clList);
        infoSection.appendChild(article);
    }


        
}