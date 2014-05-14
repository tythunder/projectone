<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="styleindex.css">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
	<script src="code.js"></script>
	<script type="text/javascript" src="//use.typekit.net/doa3oio.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
	<title>Project One</title>
</head>

<body>    
	<div class="mainloginwrap">
		<div class="loginwrap">
			<img src="images/logo.png" alt="Project One" />
			<h1>Project One Portfolios</h1>
			<div id="loginform" class="loginform">
                        <div class="err" id="add_err"></div>
<!--                            <form action="login.php">
                                <input type="submit" id="login" value="Login" />
                                <input type="button" id="cancel_hide" value="Cancel" />
                            </form>-->
                
                                <input type="text" id="username" name="username" placeholder="Username">
                                <input type="text" id="password" name="password" placeholder="Password">
                                <input type="button" id="login" value="Submit">	
                            </div>
            </div>
		<div class="registerwrap">
			<p>Don't have an account? Register now!</p>
		</div>
	</div>

	<div class="overlay"></div>

	<div class="regformwrap">
		<div class="regwrap">
			<img src="images/logo.png" alt="Project One" />
			<h1>Project One Registration</h1>
			<div class="regform">
				<input type="text" name="reguser" placeholder="Username">
				<input type="text" name="regemail" placeholder="Email">
				<input type="text" name="regpassword" placeholder="Password">
				<input type="button" class="regsubmit" value="Submit">		
			</div>
		</div>
		<div class="cancelwrap">
			<p>Cancel</p>
		</div>
	</div>

</body>
</html>