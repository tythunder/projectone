<?php 
include("../db/portfolio_db.php");

class Portfolio{
	private $portfolioDB;
	private $userDB;

	function __construct(){
		$this->portfolioDB = new Portfolio_db();
	}

	function get_portfolio_collaborators($id){
		$this->portfolioDB->set_portfolio_id($id);

		$portfolio = $this->portfolioDB->get_collaborators_by_portfolio_id();

		return $portfolio;
	}

	function create_new_portfolio($link, $title, $desc, $user_id){
		$newportfolio = $this->portfolioDB->insert_new_portfolio($link, $title, $desc, $user_id);

		return $newportfolio;
	}
}

?>