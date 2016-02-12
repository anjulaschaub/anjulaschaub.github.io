
$(document).ready(function(){
    $("div.tabcollection.set3 div.tab").click(function(e){
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("div.tabcollection.set3 div.tab.active").removeClass("active");
            $(this).addClass("active");
            $("div.col-1 div.leftframe.setC.active").removeClass("active");
            $("div.col-1 div.leftframe.setC:nth-child("+nthChild+")").addClass("active");
        }
    });
});
