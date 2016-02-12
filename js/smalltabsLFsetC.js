
$(document).ready(function(){
    $("div.tabcollection.set3 div.tab").click(function(e){
      $("div.col-1.setA").removeClass("active");
      $("div.col-1.setB").removeClass("active");
      $("div.col-1.setC").addClass("active");
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("div.tabcollection.set3 div.tab.active").removeClass("active");
            $(this).addClass("active");
            $("div.col-1.setC div.leftframe.active").removeClass("active");
            $("div.col-1.setC div.leftframe:nth-child("+nthChild+")").addClass("active");
        }
    });
});
