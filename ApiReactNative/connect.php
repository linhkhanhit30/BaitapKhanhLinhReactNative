<?php 
	$hostname = "localhost";
	$username = "root";
	$password = "";
	$databasename = "api_react_native";

	$conn = mysqli_connect($hostname, $username, $password, $databasename);
	mysqli_query($conn, "SET NAMES 'utf8'");
 ?>