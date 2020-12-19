$(document).ready(function() {
    $(".click1").click(function() {
        $(".image1").toggle();
        $(".text-click").toggle();
    });

    $(".click2").click(function() {
        $(".image2").toggle();
        $(".text-click2").toggle();
    });

    $(".click3").click(function() {
        $(".image3").toggle();
        $(".text-click3").toggle();
    });
    
    $(function () {
        $(".gallery").mouseover(function () {
            $(this).find(".portfolio").css({transform: 'rotate(5deg) scale(1.1, 1.1)',filter: 'brightness(110%)'});
         });
         $(".gallery").mouseout(function () {
            $(this).find(".portfolio").css({transform: 'rotate(0) scale(1, 1)',filter: 'brightness(100%)'});
         });
    });





});