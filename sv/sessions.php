<?php
session_start();

if($_SESSION['loggedIn'] == TRUE){
	//continue on to the page or do something awesome	
} else {
	//redirect them back to the login page
}

if(isset($_GET['session_data'])){
	echo json_encode($_SESSION);
}

echo '<pre>';
var_dump($_SESSION);
echo '</pre>';

?>