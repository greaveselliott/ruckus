<?php
########## MySql details (Replace with yours) #############
$username = "elliott"; //mysql username
$password = "Ruckus1!"; //mysql password
$hostname = "213.171.218.234"; //hostname
$databasename = 'ruckus'; //databasename

//connect to database
$mysqli = new mysqli($hostname, $username, $password, $databasename);

?>