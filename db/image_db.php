<?php
include("connect.php");

class Image_db{

	private $dbcon;
	private $image_id;
	private $portfolio_id;
	private $error;

	function __construct(){
		global $con;
		$this->dbcon = $con;
	}

	function get_all_images(){
		$query = "SELECT * FROM image";
		$result = mysqli_query($this->dbcon, $query);
		$array = array();
		while($row = mysqli_fetch_array($result)){
			$array[$row["id"]] = $row;
		}
		return $array;
	}

	function get_image_by_id(){
		$query = "SELECT * FROM image WHERE id = ".$this->image_id;
		$result = mysqli_query($this->dbcon, $query);
		$array = array();
		while($row = mysqli_fetch_array($result)){
			$array[$row["id"]] = $row;
		}
		return $array;
	}

	function delete_image_by_id(){
		$query = "DELETE FROM image WHERE id = ".$this->image_id;
		$result = mysqli_query($this->dbcon, $query);
	}

	function get_images_by_portfolio_id(){
		$query = "SELECT image.id, image.link, image.title, image.desc FROM image
				 LEFT JOIN portfolio_image ON portfolio_image.image_id = image.id
				 LEFT JOIN portfolio ON portfolio.id = portfolio_image.portfolio_id
				 WHERE portfolio.id = ".$this->portfolio_id;
		$result = mysqli_query($this->dbcon, $query);
		$array = array();
		while($row = mysqli_fetch_array($result)){
			$array[$row["id"]] = $row;
		}
		return $array;
	}


	function insert_new_image($link, $title, $desc, $portfolio_id){
		$query = "INSERT INTO image VALUES (DEFAULT, '$link', '$title', '$desc')";
		$result = mysqli_query($this->dbcon, $query);
		if ($result === TRUE) {
			$id = mysqli_insert_id($this->dbcon);
			$query = "INSERT INTO portfolio_image VALUES (DEFAULT, '$portfolio_id','$id')";
			$result = mysqli_query($this->dbcon, $query);
			if ($result === TRUE) {
				return $id;
			}
		}
	}

	function set_image_id($id){
		if(is_numeric($id)){
			$this->image_id = $id;
		} else {
			$this->error = "Image ID is not valid.";
		}
	}

	function set_portfolio_id($id){
		if(is_numeric($id)){
			$this->portfolio_id = $id;
		} else {
			$this->error = "User ID is not valid.";
		}
	}

	function show_error(){
		echo $this->error;
	}

}

?>