function currentSlide(n) {

    getInfo(slideIndex = n);
    }



function getInfo(n) {

    
    var requestURL ='https://github.com/trvrpp71/trvrpp71.github.io/assignments/templesite/scripts/temples.json'
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var temple = request.response;
        console.log(temple);
    /*   showTemple(temple);*/
    }

    function showTemple(jsonObj) {
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
                myPara1.textContent = towns[n].address;
                myH32.textContent = "Telephone";
                myH33.textContent = "Email";
                
                
                /*---create the div with the elements and data---*/
                myDiv2.appendChild(myH31);
                myDiv2.appendChild(myH32);
                myDiv2.appendChild(myH33);
                myDiv2.appendChild(myPara1);
                myDiv1.appendChild(myDiv2);
                section.appendChild(myDiv1);
            }
        }
    