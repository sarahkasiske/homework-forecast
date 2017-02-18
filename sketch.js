var canvas;
var base_url = "http://api.openweathermap.org/data/2.5/forecast/daily";
var city_url = "?q=Miami";
var app_id = "&appid=11885e8ddabb968a184d363d43705b5f";
var units = "&units=imperial";
var temp;
var currentWeather;
var city;
var cityName;
var hoursNeeded;
var daysDue;
var weatherHolder;

function setup() {
  cityName = createInput();
  cityName.parent('input');

  var searchButton = createButton('Search');
  hoursNeeded = document.getElementById('input2');
  daysDue = document.getElementById('input3');
  searchButton.parent('submit');
  searchButton.mousePressed(weatherLookup);
  canvas = createCanvas(450, 250);
  canvas.parent('canvas');
}

function weatherLookup() {
  city_url = "?q=" + cityName.value();
  var url = base_url + city_url + app_id + units;
  daysDue = select('#daysDue').value();
  hoursNeeded = select('#hoursNeeded').value();
  loadJSON(url, gotWeather);
  $( "#form" ).hide();
  $( "#newsearch" ).show();
  var newButton = createButton('New Search');
  newButton.parent('newsearch');
  newButton.mousePressed(reload);
}

function reload() {
    location.reload();
}

function draw(x,y) {
    textSize(30);
    textAlign(CENTER, CENTER);
    fill('#fff');

    if (city) {
      text(city, 225,210);
     }

    if (currentWeather == 'Clear') {
      sunShape();
     }

    if (currentWeather == 'Clouds') {
      cloudShape();
     }

    if (currentWeather =='Drizzle') {
      drizzleShape();
     }

    if (currentWeather =='Rain') {
      rainShape();
     }

    if (currentWeather == 'Thunder') {
       stormShape();
     }

    if (currentWeather == 'Snow') {
       snowShape();
     }

    if (currentWeather == 'Atmosphere') {
      text(currentWeather, 225,110);
     }

    if (currentWeather == 'Extreme') {
      extremeShape();
     }

    if (currentWeather == 'Additional') {
       AdditionalShape();
     }
}

function sunShape() {
  noFill();
  stroke('#FFEE61');
  strokeWeight(5.0);
  ellipse(225, 100, 120, 120);
  fill('#FFEE61');
  noStroke();
  ellipse(225, 100, 100, 100);
}

function cloudShape() {
  noStroke();
  ellipse(200, 90, 60, 55);
  ellipse(225, 85, 80, 70);
  ellipse(250, 90, 60, 55);
}

function drizzleShape() {
  noStroke();
  ellipse(200, 90, 60, 55);
  ellipse(225, 85, 80, 70);
  ellipse(250, 90, 60, 55);
  ellipse(225, 143, 2, 7);
  ellipse(199, 145, 2, 7);
  ellipse(255, 130, 2, 7);
  ellipse(215, 133, 2, 7);
  ellipse(190, 130, 2, 7);
  ellipse(240, 133, 2, 7);
  ellipse(248, 145, 2, 7);
}

function rainShape() {
  noStroke();
  ellipse(200, 90, 60, 55);
  ellipse(225, 85, 80, 70);
  ellipse(250, 90, 60, 55);
  ellipse(218, 168, 2, 7);
  ellipse(221, 150, 2, 7);
  ellipse(230, 134, 2, 7);
  ellipse(199, 145, 2, 7);
  ellipse(211, 160, 2, 7);
  ellipse(252, 163, 2, 7);
  ellipse(205, 164, 2, 7);
  ellipse(215, 140, 2, 7);
  ellipse(190, 134, 2, 7);
  ellipse(240, 145, 2, 7);
  ellipse(188, 153, 2, 7);
  ellipse(228, 165, 2, 7);
  ellipse(262, 132, 2, 7);
  ellipse(250, 149, 2, 7);
  ellipse(262, 165, 2, 7);
  ellipse(268, 147, 2, 7);
  ellipse(203, 133, 2, 7);
  ellipse(240, 168, 2, 7);
}

function stormShape() {
  noStroke();
  fill('#000');
  ellipse(200, 90, 60, 55);
  ellipse(225, 85, 80, 70);
  ellipse(250, 90, 60, 55);
  ellipse(218, 168, 2, 7);
  ellipse(221, 150, 2, 7);
  ellipse(230, 134, 2, 7);
  ellipse(199, 145, 2, 7);
  ellipse(211, 160, 2, 7);
  ellipse(252, 163, 2, 7);
  ellipse(205, 164, 2, 7);
  ellipse(215, 140, 2, 7);
  ellipse(190, 134, 2, 7);
  ellipse(240, 145, 2, 7);
  ellipse(188, 153, 2, 7);
  ellipse(228, 165, 2, 7);
  ellipse(262, 132, 2, 7);
  ellipse(250, 149, 2, 7);
  ellipse(262, 165, 2, 7);
  ellipse(268, 147, 2, 7);
  ellipse(203, 133, 2, 7);
  ellipse(240, 168, 2, 7);
}

function snowShape() {
    noStroke();
    ellipse(200, 90, 60, 55);
    ellipse(225, 85, 80, 70);
    ellipse(250, 90, 60, 55);
    ellipse(218, 168, 4, 4);
    ellipse(221, 150, 4, 4);
    ellipse(230, 134, 4, 4);
    ellipse(199, 145, 4, 4);
    ellipse(211, 160, 4, 4);
    ellipse(252, 163, 4, 4);
    ellipse(205, 164, 4, 4);
    ellipse(215, 140, 4, 4);
    ellipse(190, 134, 4, 4);
    ellipse(240, 145, 4, 4);
    ellipse(188, 153, 4, 4);
    ellipse(228, 165, 4, 4);
    ellipse(262, 132, 4, 4);
    ellipse(250, 149, 4, 4);
    ellipse(262, 165, 4, 4);
    ellipse(268, 147, 4, 4);
    ellipse(203, 133, 4, 4);
    ellipse(240, 168, 4, 4);
}

function extremeShape() {
      noStroke();
      fill('#FF4E46');
      triangle(225, 50, 300, 160, 150, 160);
      fill('#343740');
      triangle(225, 135, 215, 85, 235, 85);
      ellipse(225, 145, 7, 7);
}

function AdditionalShape() {
      noFill();
      stroke("#fff");
      bezier(300, 40, 130, 5, 40, 100, 120, 140);
      bezier(350, 60, 150, 15, 60, 130, 190, 150);
      bezier(400, 80, 190, 10, 80, 130, 210, 140);
}

function atmosphereShape() {
      noStroke();
      fill('#FF4E46');
      triangle(225, 50, 300, 160, 150, 160);
      fill('#343740');
      triangle(225, 135, 215, 85, 235, 85);
      ellipse(225, 145, 7, 7);
}

function gotWeather(forecast) {
  temp = forecast.list[0].temp.day;
  city = forecast.city.name;
  currentWeather = forecast.list[0].weather[0].main;
  var homework = select('#do');

  if(currentWeather == 'Clear' && temp < 90 || temp > 50 && hoursNeeded < 2 && daysDue > 1) {
    homework.html('Go outside, do your homework later.');
  }

  if(currentWeather == 'Clear' || currentWeather == 'Clouds' && temp  < 90 || temp > 50 && hoursNeeded < 3 && daysDue > 1) {
    homework.html('Take a break, do your homework tomorrow.');
  }

  if(currentWeather == 'Clear' || currentWeather == 'Clouds' && temp > 90 || temp < 50 && hoursNeeded < 1 && daysDue  <1) {
    homework.html('Do your homework now.');
  }

  if(currentWeather == 'Clear' || currentWeather == 'Clouds' && temp < 90 || temp > 50 && hoursNeeded > 1 && daysDue == 1) {
    homework.html('Do your homework now.');
  }

  if(currentWeather == 'Rain' || currentWeather ==  'Drizzle' ||  currentWeather ==  'Storm' || currentWeather ==  'Snow' || currentWeather ==  'Additional' || currentWeather ==  'Atmosphere' || currentWeather == 'Clouds' &&  hoursNeeded > 2 && daysDue < 3) {
    homework.html('Do your homework now.');
  }

  if(currentWeather == 'Rain' || currentWeather == 'Drizzle' ||  currentWeather ==  'Storm' || currentWeather == 'Snow' || currentWeather ==  'Additional' || currentWeather ==  'Atmosphere' || currentWeather =='Clouds' || currentWeather == 'Clear' &&  hoursNeeded > 2 && daysDue > 2) {
    homework.html('Take a nap, do your homework later.');
  }

  if(currentWeather == 'Rain' || currentWeather ==  'Drizzle' ||  currentWeather == 'Storm' || currentWeather == 'Snow' || currentWeather == 'Additional' || currentWeather == 'Atmosphere' || currentWeather == 'Clouds' &&  hoursNeeded < 3 && daysDue > 2) {
    homework.html('Do your homework later.');
  }

  if(hoursNeeded > 1 && daysDue == 1) {
   homework.html('Do your homework now.');
  }

  if(daysDue == 4) {
   homework.html('You have plenty of time, do your homework later.');
  }

  if(currentWeather == 'Extreme') {
    homework.html('Stay inside, do your homework now.');
  }

  if(temp > 90 && hoursNeeded > 2 && daysDue < 3 ) {
    homework.html('its hot outside, do your homework now.');
  }

  if(temp > 90 && hoursNeeded < 2 && daysDue > 3 && currentWeather == 'Clear' ) {
    homework.html('Skip your homework, go to the beach.');
  }

  if(temp < 50 && hoursNeeded > 2 && daysDue < 3 ) {
    homework.html('its cold outside, do your homework now.');
  }

  if(temp < 50 && hoursNeeded < 2 && daysDue > 3 ) {
    homework.html('Have some tea, do your homework later.');
  }

}
