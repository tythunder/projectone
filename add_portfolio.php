<?php
include("db/connect.php");
include("db/portfolio_db.php");

$portTitle = $_POST['portTitle'];
$portDesc = $_POST['portDesc'];
$portLink = $_POST['portLink'];

$query = "INSERT INTO portfolio VALUES (DEFAULT,'$portLink', '$portTitle', '$portDesc')";

mysql_query($query);
?>