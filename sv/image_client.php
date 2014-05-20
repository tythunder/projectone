<?php
include("image.php");

if(isset($_GET['portfolioimages'])){
	if(isset($_GET['portfolioid'])){
		$imageClass = new Image();
		$allImages = $imageClass->get_portfolio_images($_GET['portfolioid']);
		echo json_encode($allImages);
	}
	else{
		echo "failed";
	}
}

if(isset($_GET['getimagedata'])){
	if(isset($_GET['imageid'])){
		$imageClass = new Image();
		$allImages = $imageClass->get_all_images_by_id($_GET['imageid']);
		echo json_encode($allImages);
	}
	else{
		echo "failed";
	}
}

?>