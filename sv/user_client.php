<?php
include("user.php");

if(isset($_GET['user'])){
	if(isset($_GET['username']) && isset ($_GET['password'])){
		$userClass = new User();
		$user_id = $userClass->get_userid($_GET['username'], $_GET['password']);
		$user_info = $userClass->get_user_info($user_id);
		echo json_encode($user_info);
	}
}

if(isset($_GET['userinfo'])){
	$userPort = new User();
	$user_id = $userPort->get_user_info($_GET['userid']);
	echo json_encode($user_id);
}

?>