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

    $("form").submit(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        if(name == '' || email == '' || message == '') {
            swal({
                title: "Fields Empty!!",
                text: "Please check the missing field!!",
                icon: "Warning",
                button: "ok",
              });
        } else {
            swal({
                title: "Successfully submitted",
                icon: "success",
                button: "Yess!!!",
              });
        }
    });





});