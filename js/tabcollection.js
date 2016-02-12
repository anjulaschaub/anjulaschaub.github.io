$(document).ready(function(){
    $("div.rowbuttons div.seehear").click(function(e){
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("div.rowbuttons div.seehear.active").removeClass("active");
            $(this).addClass("active");
            $("div.col-2wide div.tabcollection.active").removeClass("active");
            $("div.col-2wide div.tabcollection:nth-child("+nthChild+")").addClass("active");
        }
    });
});
