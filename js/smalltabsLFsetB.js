
$(document).ready(function(){
    $("div.tabcollection.set2 div.tab").click(function(e){
      $("div.col-1.setA").removeClass("active");
      $("div.col-1.setC").removeClass("active");
      $("div.col-1.setD").removeClass("active");
      $("div.col-1.setE").removeClass("active");
      $("div.col-1.setF").removeClass("active");
      $("div.col-1.setB").addClass("active");
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("div.tabcollection.set2 div.tab.active").removeClass("active");
            $(this).addClass("active");
            $("div.col-1.setB div.leftframe.active").removeClass("active");
            $("div.col-1.setB div.leftframe:nth-child("+nthChild+")").addClass("active");
        }
    });
});
