function getTown() {
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
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myImg = document.createElement('img');
        

        myH2.textContent = towns[i].name;
        myPara1.textContent = towns[i].motto;
        myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
        myPara3.textContent = 'Population:  ' + towns[i].currentPopulation;
        myPara4.textContent = 'Annual Rain Fall:  ' +towns[i].averageRainfall + '"';
        if (i==1){
            var myImg - new Image (100, 200) 
            myImg.src='fishhaven.jpg';
        } else {
            var myImg - new Image (100, 200) 
            myImg.src='holder.gif';
        }
            
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myImg);
        section.appendChild(myArticle);
        }
    }
    }


}