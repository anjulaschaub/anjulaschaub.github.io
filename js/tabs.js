$(document).ready(function(){
    $("div.tabscolumn div.tabs").click(function(e){
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("div.tabscolumn div.tabs.active").removeClass("active");
            $(this).addClass("active");
            $("div.changingitem div.taboption.active").removeClass("active");
            $("div.changingitem div.taboption:nth-child("+nthChild+")").addClass("active");
        }
    });
});
