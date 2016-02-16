
$(document).ready(function(){
    $("div.tabcollection.set6 div.tab").click(function(e){
      $("div.col-1.setA").removeClass("active");
      $("div.col-1.setB").removeClass("active");
      $("div.col-1.setC").removeClass("active");
      $("div.col-1.setD").removeClass("active");
      $("div.col-1.setE").removeClass("active");
      $("div.col-1.setF").addClass("active");
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("div.tabcollection.set6 div.tab.active").removeClass("active");
            $(this).addClass("active");
            $("div.col-1.setF div.leftframe.active").removeClass("active");
            $("div.col-1.setF div.leftframe:nth-child("+nthChild+")").addClass("active");
        }
    });
});
