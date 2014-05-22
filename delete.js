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
                    $(".deleteimagewrap").append("<div class='deleteimage' id='"+value.id+"' style='background: url("+value.link+") no-repeat center; "+backgroundstyles+"><div class='deleteimageedit'><img class='delportfolioimg' src='images/icons/del_sm.png' /></div></div>");
                });

                $(".deleteimage").hover(function() {
                    var divId = $(this).attr("id");
                    $.get("sv/image_client.php", {portfolioimages:true, portfolioid:divId}, function(data){
                        var portfolioData = $.parseJSON(data);
                        $(".deletedesc").html("<p>"+portfolioData[divId].title+"<br>"+portfolioData[divId].desc+"</p>");
                        $(".deletedescwrap").css({
                            "background": "url("+portfolioData[divId].link+") no-repeat center",
                            "-webkit-background-size": "cover",
                            "-moz-background-size": "cover",
                            "-o-background-size": "cover",
                            "background-size": "cover",
                            "box-sizing":"border-box",
                            "-moz-box-sizing":"border-box",
                            "-webkit-box-sizing":"border-box",
                            "border": "1px solid rgba(255,255,255, 0.5)"
                        });
                    });
                });

                $(".deleteimage").click(function(){
                    var divId = $(this).attr("id");
                    console.log(divId);
                    $.get("sv/image_client.php", {portfolioimages:true, portfolioid:divId}, function(data){
                        var portfolioData = $.parseJSON(data);
                        $.each(portfolioData.image, function(index, value){
                            console.log(value.id);
                        });
                    });
                });   
            });           
        }
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

    // this opens modal for the description
    $(".deletedesc").click(function() {
        $(".deleteontainer").css("-webkit-transform", "scale(0.8)");
        $(".deleteoverlay").addClass("showcreateoverlay");
        $(".descmodal").addClass("showdescmodal");
    });

    // code for create hovers
    $(".deleteimage").hover(function() {
        $(this).children().children(".delpictureimg").css("opacity", 1.0);
    }, function() {
        $(this).children().children(".delpictureimg").css("opacity", 0.5);
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