$(document).ready(function(){
    $("div.tabcollection.set1 div.tab").click(function(e){
      $("div.col-1.setB").removeClass("active");
      $("div.col-1.setC").removeClass("active");
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("div.tabcollection.set1 div.tab.active").removeClass("active");
            $(this).addClass("active");
            $("div.col-1.setA div.leftframe.active").removeClass("active");
            $("div.col-1.setA div.leftframe:nth-child("+nthChild+")").addClass("active");
        }
    });
});
