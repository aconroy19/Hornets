function setup() {

  document.getElementById("button_players").onclick = function(){
    openwebpage("./assets/HTML/PlayerStats.html");
  };
// player stats button takes you to team stats webpage
  document.getElementById("button_team").onclick = function(){
    openwebpage("./assets/HTML/TeamStats.html");
  };
 // team stats button takes you to team stats webpage
  let seasons = document.getElementsByClassName("season");
  [].forEach.call(seasons, function(season) {
  season.onclick = function(){
    openwebpage("./assets/HTML/TeamStats.html");
  }
  } );

}

function openwebpage(url){
  window.open(url, "_self");
}
// opens url in the same tab
function search() {

  search_stuff = null;

}

setup();
