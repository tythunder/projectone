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
				$.each(userdata.portfolio, function(index, value){
					portid = value.id;
					$(".adminimagewrap").append("<div class='adminimage'><div class='adminimageedit'>"+value.title+"</div></div>");
					$(".adminimage").css({
						"background": "url("+value.link+") no-repeat center",
						"-webkit-background-size": "cover",
						"-moz-background-size": "cover",
						"-o-background-size": "cover",
						"background-size": "cover"
					});
				});

	        	$.get("sv/image_client.php", {portfolioimages:true, portfolioid:portid }, function(data){
	        		var imageData = $.parseJSON(data);
	        		console.log(imageData);
	        		$(".adminimage").click(function() {
	        			$(".adminimagewrap").empty();
	        			$.each(imageData.image, function(index, value){
	        				$(".adminimagewrap").append("<div class='adminimage' style='background: url("+value.link+") no-repeat center; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover'></div>");
	        			});
	        		});
	        	});

        	});
		}
	});
	
	$(".logout_btn").click(function(){
		$.post("sv/sessions.php", {destroy:true}, function(){
			window.location.replace("index.html");
		});
	});
	$(".create_redir").click(function(){
			window.location.replace("create.html");
	});
	
	//code for menu
    $(".menuicon").hover(function() {
        $(this).children(".menuitem").stop().animate({width:200}, 500, "easeOutExpo");
    }, function() {
        $(this).children(".menuitem").stop().animate({width:0}, 500, "easeOutExpo");
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
   
});