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

 let topnavbuttons = document.getElementsByClassName("inactive");
   [].forEach.call(topnavbuttons, function(button) {
   button.onclick = function(){
     openwebpage("./assets/HTML/" + button.id + ".html");
   }
   } );

}

// opens url in the same tab
function openwebpage(url){
  window.open(url, "_self");
}

function hover(element){
  element.setAttribute('src', "./assets/images/soccer_field_subs.png");
}
function unhover(element){
  element.setAttribute('src', "./assets/images/soccer_field_starters.png");
}
setup();
