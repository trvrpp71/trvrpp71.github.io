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
        document.getElementsByClassName('templeInfo').innerHTML="";
        

        var towns = jsonObj['temples'];
        
                /*----setup elements---*/
                var section = document.querySelector('.templeInfo');
                var myDiv1 = document.createElement('div'); /*address*/
                var myDiv2 = document.createElement('div'); /*phone*/
                var myDiv3 = document.createElement('div'); /*email*/
                var myH31 = document.createElement('h3');
                var myH32 = document.createElement('h3');
                var myH33 = document.createElement('h3');
                var myPara1 = document.createElement('p');
                var myPara2 = document.createElement('p');
                var myPara3 = document.createElement('p');
                var myPara4 = document.createElement('p');
                var myImg = document.createElement('img');
                myPara1.setAttribute("class","p1");
                myPara2.setAttribute("class","p2");
                myPara3.setAttribute("class","p3");
                myPara4.setAttribute("class","p4");
                myH31.setAttribute("class", "th3");
                myH32.setAttribute("class","th3");
                myH33.setAttribute("class","th3");
                myDiv1.setAttribute("class","container");
                myDiv2.setAttribute("class","box");
                
                /*---populate elements with town data----*/
                myH31.textContent = "Address";
                myPara1.textContent = towns[n-1].address;
                myH32.textContent = "Telephone";
                myPara2.textContent = towns[n-1].phone;
                myH33.textContent = "Email";
                myPara3.textContent = "Please log into your LDS account to email the temple."
                
                
                /*---create the div with the elements and data---*/
                myDiv2.appendChild(myH31);
                myDiv2.appendChild(myPara1);
                myDiv2.appendChild(myH32);
                myDiv2.appendChild(myPara2);
                myDiv2.appendChild(myH33);
                myDiv2.appendChild(myPara3);
                myDiv1.appendChild(myDiv2);
                section.appendChild(myDiv1);
            }


}