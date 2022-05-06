<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <link rel="stylesheet" href="main.css">
  <! links the css file to the html-->
  <title>NR Hornets Stats</title>
</head>

<body>

  <div class="topnav">
       <a class="active" id="home">Home</a>
       <a class="inactive" id="PlayerStats">Players <img id="stats" src="./assets/images/table.svg"></a>
       <a class="inactive" id="TeamStats">Team <img id="stats" src="./assets/images/table.svg"></a>
       <a class="inactive" id="About">About</a>
  </div>

  <div id="header">
    <h1 class="header-text"> NR </h1>
    <img id="logo" src="assets/images/hornetslogo.png" />
    <h1 class="header-text"> Hornets Stats </h1>



  </div>
  <hr>
  <!–– up to here is the header of the webpage, everything below here goes into a different div ––>


    <div id="left">

      <button class="left-button" type="button" id="button_players" >Player Stats</button>
      <! Player Stats button––>


      <button class="dropbtn" id="button_team" >Team Stats</button>

    </div>
    <! Dropdown button––>

    <script src="main.js" charset="utf-8"></script>
    <! links main.js––>
    <?php include("./includes/footer.html"); ?>
    <div class="footer">
    </div>
    <! adds a footer––>
</body>




</html>
