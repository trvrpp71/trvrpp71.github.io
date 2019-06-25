function getTowns() {
    var section = document.querySelector('section');
    var requestURL ='https://byui-cit230.github.io/weather/data/towndata.json'
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var towns = request.response;
        showTowns(towns);
    }

    function showTowns(jsonObj) {
        var towns = jsonObj['towns'];
        for (var i = 0; i < towns.length; i++) {
            if (i == 1 || i == 4 || i == 5) {
            var myArticle = document.createElement('article');
            var myDiv = document.createElement('div');
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
            myDiv.setAttribute("class","box");

            myH3.textContent = towns[i].name;
            myPara1.textContent = towns[i].motto;
            myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
            myPara3.textContent = 'Population:  ' + towns[i].currentPopulation;
            myPara4.textContent = 'Annual Rain Fall:  ' +towns[i].averageRainfall + '"';
            if (i==1){
                myImg.src='images/fishhavensm.jpg';
            } else if (i==4) {
                myImg.src='images/prestonsm.jpg';
            } else {
                myImg.src='images/sodaspringssm.jpg';
            }
                
            myDiv.appendChild(myH3);
            myDiv.appendChild(myPara1);
            myDiv.appendChild(myPara2);
            myDiv.appendChild(myPara3);
            myDiv.appendChild(myPara4);
            myDiv.appendChild(myImg);
            myArticle.appendChild(myDiv);
            section.appendChild(myArticle);
            }
        }
    }


}