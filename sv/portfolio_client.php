<?php
include("../db/portfolio_db.php");

if(isset($_GET['newportfolio'])){
	if(isset($_GET['link']) && isset($_GET['title']) && isset($_GET['desc']) && isset($_GET['userid'])){
		$portfolioClass = new Portfolio_db();
		$createnewportfolio = $portfolioClass->insert_new_portfolio($_GET['link'], $_GET['title'], $_GET['desc'], $_GET['userid']);
		echo json_encode($createnewportfolio);
	}
	else{
		echo "SHIT";
	}
}


?>