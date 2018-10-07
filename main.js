/* let formData = {
  'url': 'https://csgo.99damage.de/de/leagues/99dmg/989-saison-10/group/1217-starter-28',
  'team': ''
};
$.ajax({
  type: 'GET', // define the type of HTTP verb we want to use (POST for our form)
  url: 'http://51.255.133.141:3000/matches', // the url where we want to POST
  data: formData, // our data object
  dataType: 'json', // what type of data do we expect back from the server
  encode: true
})
.done(function (data) {
  trHTML = ''
  $.each(data, function (i, item) {
    trHTML += '<tr><td>' + item.team1 + '</td><td>' + item.team2 + '</td><td>' + item.tag + '</td><td>' + item.result + '</td></tr>';
  });
  $('tbody').append(trHTML)
});  */

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       let matchData = JSON.parse(xhttp.responseText);
       let trHTML = '';
       for(index in matchData) {
        trHTML += '<tr><td>' + matchData[index].team1 + '</td><td>' + matchData[index].team2 + '</td><td>' + matchData[index].tag + '</td><td>' + matchData[index].result + '</td></tr>';
       }
       document.getElementsByTagName('tbody')[0].innerHTML = trHTML
    }
};
let formData = {
  'url': 'https://csgo.99damage.de/de/leagues/99dmg/989-saison-10/group/1217-starter-28',
  'team': 'Cantina'
};
xhttp.open("GET", 'http://51.255.133.141:3000/matches?' + param(formData), true);
xhttp.send();


function param(object) {
  var encodedString = '';
  for (var prop in object) {
      if (object.hasOwnProperty(prop)) {
          if (encodedString.length > 0) {
              encodedString += '&';
          }
          encodedString += encodeURI(prop + '=' + object[prop]);
      }
  }
  return encodedString;
}