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
					$(".adminimagewrap").append("<div class='adminimage' id='"+value.id+"' style='background: url("+value.link+") no-repeat center; "+backgroundstyles+"><div class='adminimageedit'></div></div>");
					
				});

				$(".adminimage").hover(function() {
					var divId = $(this).attr("id");
					$.get("sv/image_client.php", {portfolioimages:true, portfolioid:divId}, function(data){
		        		var portfolioData = $.parseJSON(data);
		        		$(".admindesc").html("<h1>"+portfolioData[divId].title+"</h1><hr><p>"+portfolioData[divId].desc+"</p>");				
							$(".admindescwrap").css({
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

				$(".adminimage").click(function(){
					$(".admindesc").empty();
					var divId = $(this).attr("id");
					$.get("sv/image_client.php", {portfolioimages:true, portfolioid:divId}, function(data){
		        		var portfolioData = $.parseJSON(data);
		        		$(".adminimagewrap").empty();
		        		$.each(portfolioData.image, function(index, value){
		        			$(".adminimagewrap").append("<div class='adminportfolioimage' id='"+value.id+"' style='background: url("+value.link+") no-repeat center; "+backgroundstyles+"'></div>");
		        		});
		        		$(".adminportfolioimage").hover(function() {
		        			var divId = $(this).attr("id");
		        			$.get("sv/image_client.php", {getimagedata:true, imageid:divId}, function(data){
				        		var portfolioData = $.parseJSON(data);
				        		$(".admindesc").append("<h1>"+portfolioData[divId].title+"</h1><hr><p>"+portfolioData[divId].desc+"</p>");
								$(".admindescwrap").css({
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
		        		}, function() {
		        			$(".admindesc").empty();
		        		});
		        	});
		        }); 		
        	});
		}
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