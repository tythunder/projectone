<?php session_start(); ?>
	<div id="profile">
    	<?php if(isset($_SESSION['username'])){
			?>
            <span id="uname">Welcome, <?php $_SESSION['username'] ?></span>
			<a href='sv/logout.php' id='logout'>Logout</a>
		<?php }else {?>
		<a id="login_a" href="#">login</a>
        <?php } ?>
	</div>
    