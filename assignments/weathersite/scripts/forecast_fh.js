function fhforecast() {
    var fcSection = document.querySelector('.forecast');

    let weatherObject2 = new XMLHttpRequest();
    let forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?zip=83287&units=imperial&APPID=e9a8fc67ba9b237ce516dd7ae7f7d335';
    weatherObject2.open('GET',forecastURL, true);
    weatherObject2.send();


    weatherObject2.onload=function(){
        let forecastInfo=JSON.parse(weatherObject2.responseText);
        console.log(forecastInfo);

        for (let i = 0; i < 40; i++){
       
            /*----determine the day------*/
            var date = forecastInfo.list[i].dt_txt;
            var newDate = new Date(date);
            var weekday = new Array(7);
                weekday[0]="Sun";
                weekday[1]="Mon";
                weekday[2]="Tue";
                weekday[3]="Wed";
                weekday[4]="Thu";
                weekday[5]="Fri";
                weekday[6]="Sat";
            var day = weekday[newDate.getDay()];  
            
            /*-----determine the time for the 18:00 filter-----*/

            var time = newDate.getHours();

            if (time==18) {
                /*------create the elements and add classes---------*/
                var myDiv = document.createElement('div');
                var myH3 = document.createElement('h3');
                var myPara1 = document.createElement('p');
                var myPara2 = document.createElement('p2');
                var myIcon = document.createElement('img');

                myDiv.setAttribute("class","fc");
                myH3.setAttribute("class",'fcday');
                myPara1.setAttribute("class","p1");
                myIcon.setAttribute("class","icon");

                /*----set the content------*/
                myH3.textContent = day;
                myIcon.src = "http://openweathermap.org/img/w/" + forecastInfo.list[i].weather[0].icon + ".png";
                myPara1.textContent = Math.round(forecastInfo.list[i].main.temp) + "\u00B0" +"F";

                /*----add the content to the div-----*/
                myDiv.appendChild(myH3);
                myDiv.appendChild(myIcon);
                myDiv.appendChild(myPara1);
                fcSection.appendChild(myDiv); 
            }   
        }

    }

}
   

 