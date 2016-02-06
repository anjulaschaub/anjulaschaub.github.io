$(document).ready(function(){
    $("div.tabcollection div.smalltabs").click(function(e){
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("div.tabcollection div.smalltabs.active").removeClass("active");
            $(this).addClass("active");
            $("div.changingwindow div.taboption.active").removeClass("active");
            $("div.changingwindow div.taboption:nth-child("+nthChild+")").addClass("active");
        }
    });
});
