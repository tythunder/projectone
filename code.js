$(document).ready(function() {
	
    //code for index
    $(".registerwrap").click(function() {
        $(".overlay").addClass("showoverlay");
        $(".regformwrap").addClass("showregisterwrap");
        $(".mainloginwrap").addClass("mainwrapscale");
    });

    $(".cancelwrap").click(function() {
        $(".overlay").removeClass("showoverlay");
        $(".regformwrap").removeClass("showregisterwrap");
        $(".mainloginwrap").removeClass("mainwrapscale");
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

    //code for edit
    $(".editcontainer").css({
        width: window.innerWidth,
        height: window.innerHeight
    });

    $(window).resize(function() {
        $(".editcontainer").css({
            width: window.innerWidth,
            height: window.innerHeight
        });
    });

    //code for admin
    $(".admincontainer").css({
        width: window.innerWidth,
        height: window.innerHeight
    });
    $(window).resize(function() {
        $(".admincontainer").css({
            width: window.innerWidth,
            height: window.innerHeight
        });
    });

    //getting user

    $("#loginsubmit").click(function() {
        var username = $("#username").val();
        var password = $("#password").val();
        $.get("sv/user_client.php", {user:true, username:username, password:password}, function(data){
            $.get("sv/sessions.php", function(s_data){
				if(s_data == "log_error"){
					alert(s_data);
				}
				else{
					var j_data = $.parseJSON(data);
           			console.log(j_data);
					window.location.replace("admin.html");
				}
			});
        });
    });
});