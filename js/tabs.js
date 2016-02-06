$(document).ready(function(){
    $("div.tabcollection div.tab").hover(function(e){
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("div.tabcollection div.tab.active").removeClass("active");
            $(this).addClass("active");
            $("div.col-1 div.leftframe.active").removeClass("active");
            $("div.col-1 div.leftframe:nth-child("+nthChild+")").addClass("active");
        }
    });
});
