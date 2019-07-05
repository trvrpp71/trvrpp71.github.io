function getPRevents() {
    var section = document.querySelector('.preston_events');
    var requestURL ='https://byui-cit230.github.io/weather/data/towndata.json'
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var towns = request.response;
        getPreston(towns);
    }

    function getPreston(jsonObj) {
        var towns = jsonObj['towns']; 
        var myDiv = document.createElement('div');
        var myList = document.createElement('ul');
        myDiv.setAttribute("class","box");
        var events = towns[4].events;
        for (var j=0; j<events.length; j++){
            var listItem = document.createElement('li');
            listItem.textContent=events[j];
            myList.appendChild(listItem);
        }
        myDiv.appendChild(myList);
        section.appendChild(myDiv);


    }


}