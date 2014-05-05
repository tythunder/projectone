<!doctype html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="style.css">
<meta charset="UTF-8">
<title>Monarch Portfolios | Admin</title>
</head>

<body>
<div id='wrapper'>
    <h2>Welcome, <b class="greeting">Nasty Butt</b><!-- User name --></h2>
	<div id="port_container">
        <div id="upload_box">
        <form id="upload" class="upload_form">
            <input class="general_btns" type="file" name"file" />
       		<input class="general_btns" type="text" name="username" />
        	<input id="upload_form_btn" type="button" value="UPLOAD">
        </form>
        </div>
        
        <h3 class="page_titles">Illustrations</h3>
        <div id="items_thumb_container">
            <!-- individual portfolios items thumbnails displayed  -->
            <span class="display_items">
                <!-- img placeholder-->
                <div class="i_thumb"></div>
                <div class="item_options">
                    <button id="edit_btn" class="general_btns">EDIT</button>
                    <button id="del_btn" class="general_btns">DELETE</button>
                </div>
            </span>
            <span class="display_items">
                <!-- img placeholder-->
                <div class="i_thumb"></div>
                <div class="item_options">
                    <button id="edit_btn" class="general_btns">EDIT</button>
                    <button id="del_btn" class="general_btns">DELETE</button>
                </div>
            </span>
            <span class="display_items">
                <!-- img placeholder-->
                <div class="i_thumb"></div>
                <div class="item_options">
                    <button id="edit_btn" class="general_btns">EDIT</button>
                    <button id="del_btn" class="general_btns">DELETE</button>
                </div>
            </span>
            <span class="display_items">
                <!-- img placeholder-->
                <div class="i_thumb"></div>
                <div class="item_options">
                    <button id="edit_btn" class="general_btns">EDIT</button>
                    <button id="del_btn" class="general_btns">DELETE</button>
                </div>
            </span>

         </div><!-- end thumb container -->    
    </div><!-- end admin_container -->
</div><!-- end wrapper -->

</body>
</html>
