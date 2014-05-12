$(document).ready(function(event) {

    //code for index
    $(".registerwrap").click(function(event) {
        $(".overlay").addClass('showoverlay');
        $(".regformwrap").addClass('showregisterwrap');
        $(".mainloginwrap").addClass('mainwrapscale');
    });

    $(".cancelwrap").click(function(event) {
        $(".overlay").removeClass('showoverlay');
        $(".regformwrap").removeClass('showregisterwrap');
        $(".mainloginwrap").removeClass('mainwrapscale');
    });

    //code for menu
    $(".menuicon").hover(function() {
        $(this).children('.menuitem').stop().animate({width:200}, 500, 'easeOutExpo');
    }, function() {
        $(this).children('.menuitem').stop().animate({width:0}, 500, 'easeOutExpo');
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

    // this opens modal for image upload
    $(".createimageedit").click(function(event) {
        $(".createcontainer").css("-webkit-transform", "scale(0.8)");
        $(".createoverlay").addClass('showcreateoverlay');
        $(".uploadmodal").addClass('showuploadmodal');
    });

    // this is to close upload modal
    $(".uploadaccept").click(function(event) {
        $(".createcontainer").css("-webkit-transform", "scale(1)");
        $(".createoverlay").removeClass('showcreateoverlay');
        $(".uploadmodal").removeClass('showuploadmodal');
		$(".uploadmodal").load("modal_create");
    });

    $(".uploadcancel").click(function(event) {
        $(".createcontainer").css("-webkit-transform", "scale(1)");
        $(".createoverlay").removeClass('showcreateoverlay');
        $(".uploadmodal").removeClass('showuploadmodal');
    });

    // this opens modal for the description
    $(".createdesc").click(function(event) {
        $(".createcontainer").css("-webkit-transform", "scale(0.8)");
        $(".createoverlay").addClass('showcreateoverlay');
        $(".descmodal").addClass('showdescmodal');
    });

    // this is to close upload modal
    $(".descaccept").click(function(event) {
        $(".createcontainer").css("-webkit-transform", "scale(1)");
        $(".createoverlay").removeClass('showcreateoverlay');
        $(".descmodal").removeClass('showdescmodal');
    });    

    $(".desccancel").click(function(event) {
        $(".createcontainer").css("-webkit-transform", "scale(1)");
        $(".createoverlay").removeClass('showcreateoverlay');
        $(".descmodal").removeClass('showdescmodal');
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

});