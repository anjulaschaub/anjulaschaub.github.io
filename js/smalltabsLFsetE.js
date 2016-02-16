$(document).ready(function(){
    $("div.tabcollection.set5 div.tab").click(function(e){
      $("div.col-1.setA").removeClass("active");
      $("div.col-1.setB").removeClass("active");
      $("div.col-1.setC").removeClass("active");
      $("div.col-1.setD").removeClass("active");
      $("div.col-1.setF").removeClass("active");
      $("div.col-1.setE").addClass("active");
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("div.tabcollection.set5 div.tab.active").removeClass("active");
            $(this).addClass("active");
            $("div.col-1.setE div.leftframe.active").removeClass("active");
            $("div.col-1.setE div.leftframe:nth-child("+nthChild+")").addClass("active");
        }
    });
});
