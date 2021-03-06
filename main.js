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