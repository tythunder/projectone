$(document).ready(function() {
    var backgroundstyles = "-webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box; border: 1px solid rgba(255,255,255, 0.5);";
    $.get("sv/sessions.php", function(s_data){
        if(s_data == "log_error"){
            window.location.replace("index.html");
        }
        else{
            window.logged_session = $.parseJSON(s_data);
            var portid;
            $.get("sv/user_client.php", {userinfo:true, userid:window.logged_session.id}, function(data){
                var userdata = $.parseJSON(data);
                $.each(userdata.portfolio, function(index, value){
                    portid = value.id;
                    $(".editimagewrap").append("<div class='editimage' id='"+value.id+"' style='background: url("+value.link+") no-repeat center; "+backgroundstyles+"><div class='editimageedit'>"+value.title+"<img class='editportfolioimg' src='images/icons/picture.png' /></div></div>");
                });

                $(".editimage").hover(function() {
                    var divId = $(this).attr("id");
                    $.get("sv/image_client.php", {portfolioimages:true, portfolioid:divId}, function(data){
                        var portfolioData = $.parseJSON(data);
                        $(".editdesc").append("<p>"+portfolioData[divId].title+"<br>"+portfolioData[divId].desc+"</p>");
                    });
                }, function() {
                    $(".editdesc").empty();
                });

                $(".editimage").click(function(){
                    $(".editdesc").empty();
                    var divId = $(this).attr("id");
                    $.get("sv/image_client.php", {portfolioimages:true, portfolioid:divId}, function(data){
                        var portfolioData = $.parseJSON(data);
                        $(".editimagewrap").empty();
                        $.each(portfolioData.image, function(index, value){
                            $(".editimagewrap").append("<div class='editportfolioimage' id='"+value.id+"' style='background: url("+value.link+") no-repeat center; "+backgroundstyles+"'><img class='editpictureimg' src='images/icons/picture.png' /></div>");
                        });
                        $(".editportfolioimage").hover(function() {
                            var divId = $(this).attr("id");
                            $.get("sv/image_client.php", {getimagedata:true, imageid:divId}, function(data){
                                var portfolioData = $.parseJSON(data);
                                $(".editdesc").append("<p>"+portfolioData[divId].title+"<br>"+portfolioData[divId].desc+"</p>");
                            });
                        }, function() {
                            $(".editdesc").empty();
                        });
                    });
                });         
            });           
        }
    });

    //code for menu
    $(".menuicon").hover(function() {
        $(this).children(".menuitem").stop().animate({width:200}, 500, "easeOutExpo");
    }, function() {
        $(this).children(".menuitem").stop().animate({width:0}, 500, "easeOutExpo");
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
    $(".editimageedit").click(function() {
        $(".editcontainer").css("-webkit-transform", "scale(0.8)");
        $(".editoverlay").addClass("showcreateoverlay");
        $(".uploadmodal").addClass("showuploadmodal");
    });

    // this is to close upload modal
    $(".uploadaccept").click(function() {
        $(".editcontainer").css("-webkit-transform", "scale(1)");
        $(".editoverlay").removeClass("showcreateoverlay");
        $(".uploadmodal").removeClass("showuploadmodal");
		$(".uploadmodal").load("modal_create");
    });

    $(".uploadcancel").click(function() {
        $(".editcontainer").css("-webkit-transform", "scale(1)");
        $(".editoverlay").removeClass("showcreateoverlay");
        $(".uploadmodal").removeClass("showuploadmodal");
    });

    // this opens modal for the description
    $(".editdesc").click(function() {
        $(".editcontainer").css("-webkit-transform", "scale(0.8)");
        $(".editoverlay").addClass("showcreateoverlay");
        $(".descmodal").addClass("showdescmodal");
    });

    // this is to close upload modal
    $(".descaccept").click(function() {
        $(".editcontainer").css("-webkit-transform", "scale(1)");
        $(".editoverlay").removeClass("showcreateoverlay");
        $(".descmodal").removeClass("showdescmodal");
    });    

    $(".desccancel").click(function() {
        $(".editcontainer").css("-webkit-transform", "scale(1)");
        $(".editoverlay").removeClass("showcreateoverlay");
        $(".descmodal").removeClass("showdescmodal");
    });

    // code for edit hovers
    $(".editimage").hover(function() {
        $(this).children().children(".pictureimg").css("opacity", 1.0);
    }, function() {
        $(this).children().children(".pictureimg").css("opacity", 0.5);
    });

    $(".editdescwrap").hover(function() {
        $(this).children().children(".descimg").css("opacity", 1.0);
    }, function() {
        $(this).children().children(".descimg").css("opacity", 0.5);
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

});