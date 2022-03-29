function setup() {

  document.getElementById("button_players").onclick = function(){
    openwebpage("./assets/HTML/PlayerStats.html");
  };

  document.getElementById("button1").onclick = function(){
    openwebpage("./assets/HTML/PlayerStats.html");
  };

}

function openwebpage(url){
  window.open(url, "_self");
}

function search() {

  search_stuff = null;
  
}

setup();
