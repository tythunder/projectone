<?php
include("image.php");

if(isset($_GET['portfolioimages'])){
	if(isset($_GET['portfolioid'])){
		$imageClass = new Image();
		$allImages = $imageClass->get_portfolio_images($_GET['portfolioid']);
		echo json_encode($allImages);
	}
	else{
		echo "shit";
	}
}

?>