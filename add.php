<?php
include("db/connect.php");
include("db/portfolio_db.php");
include("db/image_db.php");

$imgTitle = $_POST['imgTitle'];
$imgDesc = $_POST['imgDesc'];
$imgLink = $_POST['imgLink'];

$query = "INSERT INTO image VALUES (DEFAULT,'$imgLink', '$imgTitle', '$imgDesc')";

mysql_query($query);
?>