<!doctype xhtml>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
	<script src="code.js"></script>
	<script type="text/javascript" src="//use.typekit.net/doa3oio.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
    <script>
	$(document).ready(function(){
	});
	</script>
	<title>Project One - Admin</title>
</head>

<body>
	<div class="admincontainer">
		<div class="admindescwrap">
        <?php include("sv/logged.php"); ?>
			<div class="admindesc">
				<img class="descimg" src="images/icons/desc.png" />
			</div>
		</div>
		<div class="adminimagewrap">
			<div class="adminimage">
				<div class="adminimageedit">
					<img class="pictureimg" src="images/icons/picture.png" />
				</div>
			</div>
			<div class="adminimage">
				<div class="adminimageedit">
					<img class="pictureimg" src="images/icons/picture.png" />
				</div>
			</div>
			<div class="adminimage">
				<div class="adminimageedit">
					<img class="pictureimg" src="images/icons/picture.png" />
				</div>
			</div>
			<div class="adminimage">
				<div class="adminimageedit">
					<img class="pictureimg" src="images/icons/picture.png" />
				</div>
			</div>
			<div class="adminimage">
				<div class="adminimageedit">
					<img class="pictureimg" src="images/icons/picture.png" />
				</div>
			</div>
			<div class="adminimage">
				<div class="adminimageedit">
					<img class="pictureimg" src="images/icons/picture.png" />
				</div>
			</div>
			<div class="adminimage">
				<div class="adminimageedit">
					<img class="pictureimg" src="images/icons/picture.png" />
				</div>
			</div>
			<div class="adminimage">
				<div class="adminimageedit">
					<img class="pictureimg" src="images/icons/picture.png" />
				</div>
			</div>
			<div class="adminimage">
				<div class="adminimageedit">
					<img class="pictureimg" src="images/icons/picture.png" />
				</div>
			</div>
		</div>
		<div class="menuwrap">
			<div class="menuitemwrap">
				<div class="menuicon">
					<div class="menuitem">
						<h2>Home</h2>
					</div>
					<img src="images/icons/menu.png" />
				</div>
				<div class="menuicon">
					<img src="images/icons/create.png" />
					<div class="menuitem">
						<h2>Create</h2>
					</div>
				</div>
				<div class="menuicon">
					<img src="images/icons/edit.png" />
					<div class="menuitem">
						<h2>Edit</h2>
					</div>
				</div>
				<div class="menuicon">
					<img src="images/icons/delete.png" />
					<div class="menuitem">
						<h2>Delete</h2>
					</div>
				</div>
				<div class="menuicon">
					<img src="images/icons/search.png" />
					<div class="menuitem">
						<h2>Search</h2>
					</div>
				</div>
			</div>	
		</div>
	</div>

	<div class="adminoverlay">
	</div>

	<div class="uploadmodal">
		<div class="uploadwrap">
        	<h2> admin Portfolio</h2>
            <form id="portfolio_form" action="add_portfolio.php" method="post">
            <input type='hidden' name='add' value='addNew' />
             <label>Title:</label><input type="text" name="imgTitle" id="imgTitle" /><br>
             <label>Description:</label><input type="text" name="imgDesc" id="imgDesc" /><br>
             <label>Cover image:</label><input type="file" name="imgLink" id="imgLink" /> <br>
             <input type="button" id="upload-submit" value="upload" />
			</form>	
		</div>
		<div class="uploadaction">
			<div class="uploadaccept">
				<img src="images/icons/accept.png" />
			</div>
			<div class="uploadcancel">
				<img src="images/icons/cancel.png" />
			</div>
		</div>
	</div>

	<div class="descmodal">
		<div class="descwrap">
			this is desc
		</div>
		<div class="descaction">
			<div class="descaccept">
				<img src="images/icons/accept.png" />
			</div>
			<div class="desccancel">
				<img src="images/icons/cancel.png" />
			</div>
		</div>
	</div>

</body>
</html>