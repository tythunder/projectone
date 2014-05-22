$(document).ready(function() {

    function ajaxFileUpload()
    {
        $("#loading")
        .ajaxStart(function(){
            $(this).show();
        })
        .ajaxComplete(function(){
            $(this).hide();
        });

        $.ajaxFileUpload
        (
            {
                url:"doajaxfileupload.php",
                secureuri:false,
                fileElementId:"fileToUpload",
                dataType: "json",
                data:{name:"logan", id:"id"},
                success: function (data, status)
                {
                    if(typeof(data.error) != "undefined")
                    {
                        if(data.error != "")
                        {
                            alert(data.error);
                        }else
                        {
                            alert(data.msg);
                        }
                    }
                },
                error: function (data, status, e)
                {
                    alert(e);
                }
            }
        )
        return false;
    }

    var backgroundstyles = "-webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box; border: 1px solid rgba(255,255,255, 0.5);";
    $.get("sv/sessions.php", function(s_data){
        if(s_data == "log_error"){
            window.location.replace("index.html");
        }
        else{
            window.logged_session = $.parseJSON(s_data);

            $(".descaccept").click(function() {
                var link = $(".link").val();
                var title = $(".title").val();
                var desc = $(".desc").val();
                $.get("sv/portfolio_client.php", {newportfolio:true, link:link, title:title, desc:desc, userid:window.logged_session.id}, function(data){
                    var newportfolioid = $.parseJSON(data);
                    $(".createimagewrap").append("<div class='createimage'><div class='createimageedit'><img class='pictureimg' src='images/icons/picture.png' /></div></div>");
                    $.get("sv/image_client.php", {portfolioimages:true, portfolioid:newportfolioid}, function(data){
                        var portfolioData = $.parseJSON(data);
                        $(".createdesc").append("<p>"+portfolioData[newportfolioid].title+"<br>"+portfolioData[newportfolioid].desc+"</p>");
                        $(".createdescwrap").css({
                            "background": "url("+portfolioData[newportfolioid].link+") no-repeat center",
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
                    //hover for upload modal
                    $(".createimage").hover(function() {
                        $(this).children().children(".pictureimg").css("opacity", 1.0);
                    }, function() {
                        $(this).children().children(".pictureimg").css("opacity", 0.5);
                    });
                    
                    // this opens modal for image upload
                    $(".createimageedit").click(function() {
                        $(".createcontainer").css("-webkit-transform", "scale(0.8)");
                        $(".createoverlay").addClass("showcreateoverlay");
                        $(".uploadmodal").addClass("showuploadmodal");
                    });

                        // this is to close upload modal
                    $(".uploadaccept").click(function() {
                        var imagelink = $(".imagelink").val();
                        var imagetitle = $(".imagetitle").val();
                        var imagedesc = $(".imagedesc").val();
                        $.get("sv/portfolio_client.php", {newimage:true, imagelink:imagelink, imagetitle:imagetitle, imagedesc:imagedesc, portfolioid:newportfolioid}, function(data) {
                            var newimageid = $.parseJSON(data);
                            $.get("sv/image_client.php", {getimagedata:true, imageid:newimageid}, function(data){
                                var portfolioData = $.parseJSON(data);
                                $(".createimagewrap").append("<div class='createimage' style='background: url("+portfolioData[newimageid].link+") no-repeat center; "+backgroundstyles+"'><div class='createimageedit'>"+portfolioData[newimageid].title+"</div></div>");
                            });
                        });
                        $(".createcontainer").css("-webkit-transform", "scale(1)");
                        $(".createoverlay").removeClass("showcreateoverlay");
                        $(".uploadmodal").removeClass("showuploadmodal");
                    });

                    $(".uploadcancel").click(function() {
                        $(".createcontainer").css("-webkit-transform", "scale(1)");
                        $(".createoverlay").removeClass("showcreateoverlay");
                        $(".uploadmodal").removeClass("showuploadmodal");
                    });
                });
            });
        }
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

    // this opens modal for the description
    $(".createcontainer").css("-webkit-transform", "scale(0.8)");
    $(".createoverlay").addClass("showcreateoverlay");

    // this is to close upload modal
    $(".descaccept").click(function() {
        $(".createcontainer").css("-webkit-transform", "scale(1)");
        $(".createoverlay").removeClass("showcreateoverlay");
        $(".descmodal").addClass("hidedescmodal");
    });    

    $(".desccancel").click(function() {
        window.location.replace("admin.html");
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