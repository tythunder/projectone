<?php 
include("../db/portfolio_db.php");
include("../db/image_db.php");

class Image{
	private $portfolioDB;
	private $imageDB;

	function __construct(){
		$this->portfolioDB = new Portfolio_db();
		$this->imageDB = new Image_db();
	}

	function get_portfolio_images($id){
		$this->portfolioDB->set_portfolio_id($id);
		$this->imageDB->set_portfolio_id($id);

		$portfolio = $this->portfolioDB->get_portfolio_by_id();
		$image = $this->imageDB->get_images_by_portfolio_id();

		$portfolio["image"] = $image;

		return $portfolio;
	}

	function get_all_images_by_id($id){
		$this->imageDB->set_image_id($id);
		$image = $this->imageDB->get_image_by_id();

		return $image;
	}

}

?>