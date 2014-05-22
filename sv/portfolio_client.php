<?php
include("../db/portfolio_db.php");
include("../db/image_db.php");

if(isset($_GET['newportfolio'])){
	if(isset($_GET['link']) && isset($_GET['title']) && isset($_GET['desc']) && isset($_GET['userid'])){
		$portfolioClass = new Portfolio_db();
		$createnewportfolio = $portfolioClass->insert_new_portfolio($_GET['link'], $_GET['title'], $_GET['desc'], $_GET['userid']);
		echo json_encode($createnewportfolio);
	}
	else{
		echo "failed";
	}
}

if(isset($_GET['newimage'])){
	if(isset($_GET['imagelink']) && isset($_GET['imagetitle']) && isset($_GET['imagedesc']) && isset($_GET['portfolioid'])){
		$imageDBClass = new Image_db();
		$createnewimage = $imageDBClass->insert_new_image($_GET['imagelink'], $_GET['imagetitle'], $_GET['imagedesc'], $_GET['portfolioid']);
		echo json_encode($createnewimage);
	}
	else{
		echo "failed";
	}
}

if(isset($_GET['deleteportfolio'])){
	if(isset($_GET['portfolioid'])){
		$portfolioClass = new Portfolio_db();
		$deleteCurrentPortfolio = $portfolioClass->delete_portfolio_by_id($_GET['portfolioid']);
		echo json_encode($deleteCurrentPortfolio);
	}
	else{
		echo "failed";
	}
}

?>