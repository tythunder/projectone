<?php
session_start();

if(isset($_SESSION['username'])){
	echo json_encode($_SESSION);
} else {
	echo "you suck";
}

if(isset($_POST['destroy'])){
	session_destroy();	
}
?>