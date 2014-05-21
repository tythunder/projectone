<?php
include("connect.php");

class Portfolio_db{

	private $dbcon;
	private $portfolio_id;
	private $user_id;
	private $error;

	function __construct(){
		global $con;
		$this->dbcon = $con;
	}

	function get_all_portfolios(){
		$query = "SELECT * FROM portfolio";
		$result = mysqli_query($this->dbcon, $query);
		$array = array();
		while($row = mysqli_fetch_array($result)){
			$array[$row["id"]] = $row;
		}
		return $array;
	}

	function get_portfolio_by_id(){
		$query = "SELECT * FROM portfolio WHERE id = ".$this->portfolio_id;
		$result = mysqli_query($this->dbcon, $query);
		$array = array();
		while($row = mysqli_fetch_array($result)){
			$array[$row["id"]] = $row;
		}
		return $array;
	}

	function get_portfolios_by_user_id(){
		$query = "SELECT portfolio.id, portfolio.link, portfolio.title, portfolio.desc FROM portfolio
				 LEFT JOIN user_portfolio ON user_portfolio.portfolio_id = portfolio.id
				 LEFT JOIN user ON user.id = user_portfolio.user_id
				 WHERE user.id = ".$this->user_id;
		$result = mysqli_query($this->dbcon, $query);
		$array = array();
		while($row = mysqli_fetch_array($result)){
			$array[$row["id"]] = $row;
		}
		return $array;
	}

	function get_collaborators_by_portfolio_id(){
		$query = "SELECT user.id, user.username, user.first_name, user.last_name FROM user
				 LEFT JOIN portfolio_collaborator ON portfolio_collaborator.user_id = user.id
				 LEFT JOIN portfolio ON portfolio.id = portfolio_collaborator.portfolio_id
				 WHERE portfolio.id = ".$this->portfolio_id;
		$result = mysqli_query($this->dbcon, $query);
		$array = array();
		while($row = mysqli_fetch_array($result)){
			$array[$row["id"]] = $row;
		}
		return $array;
	}

	function insert_new_portfolio($link, $title, $desc, $user_id){
		$query = "INSERT INTO portfolio VALUES (DEFAULT, '$link', '$title', '$desc')";
		$result = mysqli_query($this->dbcon, $query);
		if ($result === TRUE) {
			$id = mysqli_insert_id($this->dbcon);
			$query = "INSERT INTO user_portfolio VALUES (DEFAULT, '$user_id','$id')";
			$result = mysqli_query($this->dbcon, $query);
			if ($result === TRUE) {
				return $id;
			}
		}
		return FALSE;
	}

	function set_portfolio_id($id){
		if(is_numeric($id)){
			$this->portfolio_id = $id;
		} else {
			$this->error = "Portfolio ID is not valid.";
		}
	}

	function set_user_id($id){
		if(is_numeric($id)){
			$this->user_id = $id;
		} else {
			$this->error = "User ID is not valid.";
		}
	}

	function show_error(){
		echo $this->error;
	}

}

?>