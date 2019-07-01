function getEvents() {
    var section = document.querySelector('.events');
    var requestURL ='https://byui-cit230.github.io/weather/data/towndata.json'
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var towns = request.response;
        console.log(towns);
        getEvents(towns);
    }

    function getEvents(jsonObj) {
        var towns = jsonObj['towns'];
        
        for (var i = 0; i < towns.length; i++) {
            if (i == 1 || i == 4 || i == 5) {
                
                var myDiv = document.createElement('div');
                var myH3 = document.createElement('h3');
                var myList = document.createElement('ul');
                myDiv.setAttribute("class","box");
                myH3.textContent = towns[i].name;
                var events = towns[i].events;
                for (var j=0; j<events.length; j++){
                    var listItem = document.createElement('li');
                    listItem.textContent=events[j];
                    myList.appendChild(listItem);
                }
                          
                myDiv.appendChild(myH3);
                myDiv.appendChild(myList);
                section.appendChild(myDiv);
            
               
            }
        }

    }


}