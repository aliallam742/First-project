
$(document).ready(function(){
$(window).scroll(function () { 
    let windowScroll =  $(window).scrollTop()
    if(windowScroll >= ($("#about").offset().top)-80){
        $(".navbar").addClass("bg-dark");
        $(".btnUp").fadeIn(1000);
        document.querySelector(".navbar").style.cssText = "padding : 0 30px !important";
    }else{
        $(".navbar").removeClass("bg-dark");
        $(".navbar").css("padding-left" , "0");
        $(".navbar").css("padding-right" , "0");
        $(".btnUp").fadeOut(1000)
    }
});
$(".nav-link").click(function(e){
    let tar = $(e.target).attr("value")
    let targetOffset= $(`${tar}`).offset().top;
    $("html,body").animate({scrollTop:targetOffset},1000)
})
$(".btnUp").click(function (){
    $("html,body").animate({scrollTop:0},1000)
})

    $("#loading-spenner .loader").fadeOut(1000,function(){
        $("#loading-spenner").fadeOut(1000,function(){
            $("#loading-spenner").remove();
        })
        $('body').css({'overflow' : 'auto'})

    })
})