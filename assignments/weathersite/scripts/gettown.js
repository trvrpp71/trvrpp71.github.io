function getTowns() {

    
    var requestURL ='https://byui-cit230.github.io/weather/data/towndata.json'
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var towns = request.response;
        console.log(towns);
        showTowns(towns);
    }

    function showTowns(jsonObj) {
        var towns = jsonObj['towns'];
        for (var i = 0; i < towns.length; i++) {
            if (i == 1 || i == 4 || i == 5) {
            
            /*----get town data----------*/
                /*----setup elements---*/
                var section = document.querySelector('.towns');
                var myDiv1 = document.createElement('div');
                var myDiv2 = document.createElement('div');
                var myH3 = document.createElement('h3');
                var myPara1 = document.createElement('p');
                var myPara2 = document.createElement('p');
                var myPara3 = document.createElement('p');
                var myPara4 = document.createElement('p');
                var myImg = document.createElement('img');
                myPara1.setAttribute("class","p1");
                myPara2.setAttribute("class","p2");
                myPara3.setAttribute("class","p3");
                myPara4.setAttribute("class","p4");
                myDiv1.setAttribute("class","container");
                myDiv2.setAttribute("class","box");
                
                /*---populate elements with town data----*/
                myH3.textContent = towns[i].name;
                myPara1.textContent = towns[i].motto;
                myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
                myPara3.textContent = 'Population:  ' + towns[i].currentPopulation;
                myPara4.textContent = 'Annual Rain Fall:  ' +towns[i].averageRainfall + '"';
                
                if (i==1){
                    myImg.src='images/fishhavensm.jpg';
                    myImg.setAttribute("alt","Fish Haven img");
                } else if (i==4) {
                    myImg.src='images/prestonsm.jpg';
                    myImg.setAttribute("alt","Preston img");
                } else {
                    myImg.src='images/sodaspringssm.jpg';
                    myImg.setAttribute("alt","Soda Springs img");
                }

                
                /*---create the div with the elements and data---*/
                myDiv2.appendChild(myH3);
                myDiv2.appendChild(myPara1);
                myDiv2.appendChild(myPara2);
                myDiv2.appendChild(myPara3);
                myDiv2.appendChild(myPara4);
                myDiv2.appendChild(myImg);
                myDiv1.appendChild(myDiv2);
                section.appendChild(myDiv1);
            }
        }
    }

    


}