<?php
include("connect.php");

class User_db{

	private $dbcon;
	private $user_id;
	private $username;
	private $password;
	private $error;

	function __construct(){
		global $con;
		$this->dbcon = $con;
	}

	function get_all_users(){
		$query = "SELECT * FROM user";
		$result = mysqli_query($this->dbcon, $query);
		$array = array();
		while($row = mysqli_fetch_array($result)){
			$array[$row["id"]] = $row;
		}
		return $array;
	}

	function get_user_by_id(){
		$query = "SELECT * FROM user WHERE id = ".$this->user_id;
		$result = mysqli_query($this->dbcon, $query);
		$array = array();
		while($row = mysqli_fetch_array($result)){
			$array[$row["id"]] = $row;
		}
		return $array;
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
	function set_user_name($name){
			$this->username = $name;
	}
	function set_password($pass){
			$this->password= $pass;
	}
	function get_user_id_by_name_pass(){
		$query = "SELECT user.id FROM user WHERE username = '". $this->username."' AND password ='".$this->password."'";
		$result = mysqli_query($this->dbcon, $query);
		
		$id = NULL;
		while($row = mysqli_fetch_array($result)){
			$id = $row["id"];
		}
		return $id;
	}
}

/*
$users = new User_db();
$all_users = $users->get_all_users();
echo "<pre>";
var_dump($all_users);
echo "</pre>";
echo "<hr />";

$users->set_user_id(2);
$set_user = $users->get_user_by_id();
$users->show_error();

echo "<pre>";
var_dump($set_user);
echo "</pre>";
echo "<hr />";
*/

?>