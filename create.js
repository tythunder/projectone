$(document).ready(function() {
    $.get("sv/sessions.php", function(s_data){
        if(s_data == "log_error"){
            window.location.replace("index.html");
        }
        else{
            window.logged_session = $.parseJSON(s_data);
            var portid;
            $.get("sv/user_client.php", {userinfo:true, userid:window.logged_session.id}, function(data){
                var userdata = $.parseJSON(data);	
            });
        }
    });

    //code for menu
    $(".menuicon").hover(function() {
        $(this).children(".menuitem").stop().animate({width:200}, 500, "easeOutExpo");
    }, function() {
        $(this).children(".menuitem").stop().animate({width:0}, 500, "easeOutExpo");
    });

    //code for create
    $(".createcontainer").css({
        width: window.innerWidth,
        height: window.innerHeight
    });

    $(window).resize(function() {
        $(".createcontainer").css({
            width: window.innerWidth,
            height: window.innerHeight
        });
    });

	//code for menu buttons
	$(".home_redir").click(function(){
		window.location.replace("admin.html");
	});	
	$(".create_redir").click(function(){
			window.location.replace("create.html");
	});
	$(".edit_redir").click(function(){
		window.location.replace("edit.html");
	});
	$(".delete_redir").click(function(){
		window.location.replace("delete.html");
	});
	$(".search_redir").click(function(){
		window.location.replace("search.html");
	});
	$(".logout_redir").click(function(){
		$.post("sv/sessions.php", {destroy:true}, function(){
			window.location.replace("index.html");
		});
	});

    // this opens modal for image upload
    $(".createimageedit").click(function() {
        $(".createcontainer").css("-webkit-transform", "scale(0.8)");
        $(".createoverlay").addClass("showcreateoverlay");
        $(".uploadmodal").addClass("showuploadmodal");
    });

    // this is to close upload modal
    $(".uploadaccept").click(function() {
        $(".createcontainer").css("-webkit-transform", "scale(1)");
        $(".createoverlay").removeClass("showcreateoverlay");
        $(".uploadmodal").removeClass("showuploadmodal");
		$(".uploadmodal").load("modal_create");
    });

    $(".uploadcancel").click(function() {
        $(".createcontainer").css("-webkit-transform", "scale(1)");
        $(".createoverlay").removeClass("showcreateoverlay");
        $(".uploadmodal").removeClass("showuploadmodal");
    });

    // this opens modal for the description
    $(".createdesc").click(function() {
        $(".createcontainer").css("-webkit-transform", "scale(0.8)");
        $(".createoverlay").addClass("showcreateoverlay");
        $(".descmodal").addClass("showdescmodal");
    });

    // this is to close upload modal
    $(".descaccept").click(function() {
        $(".createcontainer").css("-webkit-transform", "scale(1)");
        $(".createoverlay").removeClass("showcreateoverlay");
        $(".descmodal").removeClass("showdescmodal");
    });    

    $(".desccancel").click(function() {
        $(".createcontainer").css("-webkit-transform", "scale(1)");
        $(".createoverlay").removeClass("showcreateoverlay");
        $(".descmodal").removeClass("showdescmodal");
    });

    // code for create hovers
    $(".createimage").hover(function() {
        $(this).children().children(".pictureimg").css("opacity", 1.0);
    }, function() {
        $(this).children().children(".pictureimg").css("opacity", 0.5);
    });

    $(".createdescwrap").hover(function() {
        $(this).children().children(".descimg").css("opacity", 1.0);
    }, function() {
        $(this).children().children(".descimg").css("opacity", 0.5);
    });

    //code for delete
    $(".deletecontainer").css({
        width: window.innerWidth,
        height: window.innerHeight
    });

    $(window).resize(function() {
        $(".deletecontainer").css({
            width: window.innerWidth,
            height: window.innerHeight
        });
    });

});