function setup() {
 let topnavbuttons = document.getElementsByClassName("inactive");
   [].forEach.call(topnavbuttons, function(button) {
   button.onclick = function(){
     openwebpage(button.id + ".html");
   }
   } );

}

// opens url in the same tab
function openwebpage(url){
  window.open(url, "_self");
}

setup();
