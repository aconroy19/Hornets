// IGNORE THIS CODE IF YOU'RE CHECKING IF LINKED. ONLY USE THE BOTTOM ONE

function setup() {

  document.getElementById("button_random_values").onclick = randomValues;



  // document.getElementById("button1").onclick = function(){
  //   openwebpage("./assets/HTML/PlayerStats.html");
  // };


}

function openwebpage(url){
  window.open(url, "_self");
}

function search() {

  search_stuff = null;

}

function randomValues() {

  let elements = document.getElementsByClassName("values");

  Array.prototype.forEach.call(elements, function(value){
    value.innerHTML = Math.round(Math.random()*1000);
  });

}

setup();


// USE THIS CODE IF YOU WANNA KNOW IF SOMETHING IS LINKED

// OPEN THE INSPECTOR AND GO TO CONSOLE (FN + F12 -> Console) AND SEE IF IT SAYS
// HELLO IN THERE OR NOT

function onload(){
  console.log("HELLO I'M LINKED");
}

onload();
