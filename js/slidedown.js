$("#button").click(function () {
    $("#content").stop().slideToggle();
    return false;
});

$("#button").hover(function () {
    $(this).stop().css({
        "cursor": "pointer"
    })
});
