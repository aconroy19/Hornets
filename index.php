<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <link rel="stylesheet" href="main.css">
  <! links the css file to the html-->
  <title>NR Hornets Stats</title>
</head>

<body>
  <div id="header">
    <h1 class="header-text"> NR </h1>
    <img id="logo" src="assets/images/hornetslogo.png" />
    <h1 class="header-text"> Hornets Stats </h1>
    <div id="buttons">
    </div>
  </div>
  <hr>
  <!–– up to here is the header of the webpage, everything below here goes into a different div ––>


    <div id="left">

      <button class="left-button" type="button" id="button_players" >Player Stats</button>
      <! Player Stats button––>


      <div class="dropdown">
        <button class="dropbtn" id="button_team" >Team Stats</button>
        <div class="dropdown-content">
          <a href="#" class="season">Fall 2020</a>
          <a href="#" class="season">Spring 2021</a>
          <a href="#" class="season">Fall 2021</a>
        </div>
      </div>
    </div>
    <! Dropdown button––>

    <script src="main.js" charset="utf-8"></script>
    <! links main.js––>

    <div class="footer">
      <?php include 'include/header.php'; ?>
    </div>
    <! adds a footer––> 
</body>




</html>
