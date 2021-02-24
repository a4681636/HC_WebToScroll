$("a").each(function (index, element) {
    
    // console.log("編號 + " + index)

    var target = $(this).attr("data-st-target");
    var duration = $(this).attr("data-st-duration");

    console.log("目標:" + target);
    console.log("時間:" + duration);

    var offset = $("#" + target).offset();
    var top = offset.top;
    

     console.log("上方:" + top);

     $(this).click(function (e) { 
         e.preventDefault();
// parseInt 文字轉數字
         $("html").stop().animate({
             scrollTop:top
         },parseInt(duration)) 
         
     });
    
    
});