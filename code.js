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

    $(".createimageedit").click(function(event) {
        $(".createcontainer").css("-webkit-transform", "scale(0.8)");
        $(".createoverlay").addClass('showcreateoverlay');
    });

    $(".createdesc").click(function(event) {
        $(".createcontainer").css("-webkit-transform", "scale(0.8)");
        $(".createoverlay").addClass('showcreateoverlay');
    });

    $(".createoverlay").click(function(event) {
        $(".createcontainer").css("-webkit-transform", "scale(1)");
        $(".createoverlay").removeClass('showcreateoverlay');
    });

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

});