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
    $(".deleteimageedit").click(function() {
        $(".deleteontainer").css("-webkit-transform", "scale(0.8)");
        $(".deleteoverlay").addClass("showcreateoverlay");
        $(".uploadmodal").addClass("showuploadmodal");
    });

    // this is to close upload modal
    $(".uploadaccept").click(function() {
        $(".deleteontainer").css("-webkit-transform", "scale(1)");
        $(".deleteoverlay").removeClass("showcreateoverlay");
        $(".uploadmodal").removeClass("showuploadmodal");
		$(".uploadmodal").load("modal_create");
    });

    $(".uploadcancel").click(function() {
        $(".deleteontainer").css("-webkit-transform", "scale(1)");
        $(".deleteoverlay").removeClass("showcreateoverlay");
        $(".uploadmodal").removeClass("showuploadmodal");
    });

    // this opens modal for the description
    $(".deletedesc").click(function() {
        $(".deleteontainer").css("-webkit-transform", "scale(0.8)");
        $(".deleteoverlay").addClass("showcreateoverlay");
        $(".descmodal").addClass("showdescmodal");
    });

    // this is to close upload modal
    $(".descaccept").click(function() {
        $(".deleteontainer").css("-webkit-transform", "scale(1)");
        $(".deleteoverlay").removeClass("showcreateoverlay");
        $(".descmodal").removeClass("showdescmodal");
    });    

    $(".desccancel").click(function() {
        $(".deleteontainer").css("-webkit-transform", "scale(1)");
        $(".deleteoverlay").removeClass("showcreateoverlay");
        $(".descmodal").removeClass("showdescmodal");
    });

    // code for create hovers
    $(".deleteimage").hover(function() {
        $(this).children().children(".pictureimg").css("opacity", 1.0);
    }, function() {
        $(this).children().children(".pictureimg").css("opacity", 0.5);
    });

    $(".deletedescwrap").hover(function() {
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