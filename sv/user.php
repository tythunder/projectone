<?php 
include("../db/user_db.php");
include("../db/portfolio_db.php");

class User{
	private $userDB;
	private $portfolioDB;

	function __construct(){
		$this->userDB = new User_db();
		$this->portfolioDB = new Portfolio_db();
	}

	function get_user_info($id){
		$this->userDB->set_user_id($id);
		$this->portfolioDB->set_user_id($id);

		$user = $this->userDB->get_user_by_id(); 
		$portfolio = $this->portfolioDB->get_portfolios_by_user_id();

		$user["portfolio"] = $portfolio;

		return $user;
	}
	function get_userid($username, $password){
		$this->userDB->set_user_name($username);
		$this->userDB->set_password($password);
		$id = $this->userDB->get_user_id_by_name_pass();
		
		return $id;
	}
}

/*
$user = new User();
$userinfo = $user->get_user_info(1);
echo "<pre>";
var_dump($userinfo);
echo "</pre>";
*/

?>