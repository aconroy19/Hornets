var fall2021 = null;
$.getJSON("https://aconroy19.github.io/Hornets/json/Fall2021.json", function(json) {
  fall2021 = json;
  });
// pulls stats from the json file
function setup() {

  document.getElementById("button_next").onclick = nextPlayer;
// function to have the button move to the next player consecutively
}

function openwebpage(url){
  window.open(url, "_self");
}
// opens url in the same tab

 let topnavbuttons = document.getElementsByClassName("inactive");
   [].forEach.call(topnavbuttons, function(button) {
   button.onclick = function(){
     openwebpage(button.id + ".html");
   }
   } );

  let players = document.getElementById("search_div").getElementsByTagName("a");
  [].forEach.call(players, function(player){
    player.onclick = function(){
      updateValues(getPlayerById(player.id));
      document.getElementById("search").value = player.innerText;
      for(let i = 0; i < players.length; i++){
        players[i].style.display = "none";
      }
    }
  })

// opens url in the same tab
function openwebpage(url){
  window.open(url, "_self");
}


function updateValues(p){
  let elements = document.getElementsByClassName("values");
//
  document.getElementById("name").innerText = p.name + " " + p.last_name;
// displays the name of the player
  elements.valueSOG.innerText = p.sog;
  elements.valueGS.innerText = p.gs;
  elements.valueASST.innerText = p.assists;
  elements.valuePASS.innerText = p.pass;
  elements.valueDS.innerText = p.ds;
  elements.valueSTL.innerText = p.steal;
  elements.valueCLR.innerText = p.clear;
  elements.valueFLS.innerText = p.fouls;
  elements.player_id.innerText = p.id;
// returns elements of the specified stat

  if(p.fouls >= 5){
    elements.valueFLS.style.background = "#f20d0d";
  }
  else{
    elements.valueFLS.style.background = "#f086d5";
  }
// displays the fouls highlighted in red if value is 5 or more
}

function getPlayerById(id){
  let p;
  fall2021.forEach(player=>{
    if(player.id == id){
      p = player;
    }
  });

  return p;
}

function nextPlayer() {

  let id = parseInt(document.getElementById("player_id").textContent);
  if(id + 1 > 16){
    id = -1;
  }
  // creates the nextPlayer function
  document.getElementById("player_id").innerText = id + 1;
  let p = getPlayerById(id + 1);


  updateValues(p);


}

function filter() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  div = document.getElementById("search_div");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "block";
    } else {
      a[i].style.display = "none";
    }
  }
  if(input.value.toUpperCase().length <= 0){
    for(i = 0; i < a.length; i++){
      a[i].style.display = "none";
    }
  }
}

setup();
