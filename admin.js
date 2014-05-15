$(document).ready(function() {
	$.get("sv/sessions.php", function(s_data){
		if(s_data == "log_error"){
			window.location.replace("index.html");
		}
		else{
			window.logged_session = $.parseJSON(s_data);
			 //console.log(window.logged_session.id);
			 $.get("sv/user_client.php", {userinfo:true, userid:window.logged_session.id}, function(data){
				var userdata = $.parseJSON(data);
				$.each(userdata.portfolio, function(index, value){
					$(".adminimagewrap").append("<div class='adminimage'><div class='adminimageedit'>"+value.title+"</div></div>");
				});
        	});
		}
	});
	
	$(".logout_btn").click(function(e){
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