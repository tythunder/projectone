<?php
include("user.php");

if(isset($_GET["user"])){
	if(isset($_GET["user_id"])){
		$userClass = new User();
		$user_info = $userClass->get_user_info();
		echo json_encode($user_info);
	}
}

?>