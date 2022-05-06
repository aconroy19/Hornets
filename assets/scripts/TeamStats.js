let fall2021 = null;
let fall2020 = null;
let spring2021 = null;
$.getJSON("https://aconroy19.github.io/Hornets/json/Fall2021.json", function(json) {
  fall2021 = json;
  });

$.getJSON("https://aconroy19.github.io/Hornets/json/Fall2020.json", function(json) {
  fall2020 = json;
});

$.getJSON("https://aconroy19.github.io/Hornets/json/Spring2021.json", function(json) {
  spring2021 = json;
  });

function setup() {

 let topnavbuttons = document.getElementsByClassName("inactive");
   [].forEach.call(topnavbuttons, function(button) {
   button.onclick = function(){
     openwebpage(button.id + ".html");
   }
   } );

  let seasons = document.getElementsByClassName("season");
  [].forEach.call(seasons, function(season){
      season.onclick= function(){
        updateValues(season.id);
    }
  })

}

// opens url in the same tab
function openwebpage(url){
  window.open(url, "_self");
}

function updateValues(season){

  let s = {
    "fall2020": fall2020,
    "fall2021": fall2021,
    "spring2021": spring2021
  }

  let table = document.getElementById("stats_tb");

  let maxs = [0, 0, 0, 0, 0, 0, 0];
  let maxp = [null, null, null, null, null, null, null];
  for (let i = 1, row; row = table.rows[i]; i++) {
     for (let j = 1, col; col = row.cells[j]; j++) {
       col.style.background = "#ffea7a";
       col.style.color = "black";
       if(s[season][i-1].id == -1){
         col.innerText = 0;
         continue;
       }
       col.innerText = s[season][i-1][col.id];
       if(col.id == "fouls" && s[season][i-1][col.id] >= 5){
         col.style.background = "#f20d0d";
       }
       if(col.id != "fouls"){
         if (s[season][i-1][col.id] >= maxs[j-1]){
           maxs[j-1] = s[season][i-1][col.id];
           maxp[j-1] = s[season][i-1]["id"];
         }
       }
     }
  }

  for (let i = 0; i < maxp.length; i++){
    table.rows[maxp[i]+1].cells[i+1].style.background = "green";
    table.rows[maxp[i]+1].cells[i+1].style.color = "white";
  }
}

setup()
