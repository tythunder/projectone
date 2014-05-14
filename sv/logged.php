<?php session_start(); ?>
	<div id="profile">
    	<?php if(isset($_SESSION['username'])){
				if(isset($_GET['session_data'])){
					echo json_encode($_SESSION);
				}	
		?>
            <span id="uname">Welcome, <?php echo $_SESSION["username"] ?></span><br />
			<a href='sv/logout.php' id='logout'>Logout</a>
		<?php }else {?>
		<a id="login_a" href="#">login</a>
        <?php } ?>
	</div>
    