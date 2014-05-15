<?php
session_start();

if(isset($_SESSION['username'])){
	echo json_encode($_SESSION);
} else {
	echo "log_error";
}

if(isset($_POST['destroy'])){
	session_destroy();	
}
?>