<?php
    //Creating get_current_year
    function get_current_year() {
        echo date("Y");
    }
?>

<footer class="navbar-dark bd-dark">
    <p>Created by: Anthony Conroy
    <p>CS 485 | Copyright &copy; <?php get_current_year(); ?></p>
</footer>
