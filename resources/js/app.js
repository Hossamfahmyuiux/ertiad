/* || ===

= IMKAN.com.sa
= APP FIRE

=== || */

$(document).ready(function () {
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        'navigation': true,
        'navigationPosition': 'right',
        responsiveWidth: 900,
        anchors: ['topPage', 'aboutErtyad', 'Program1', 'Program2', 'Program3', 'contactErtyad'],
        afterResponsive: function (isResponsive) {

        }


    });

    $('.toProgram0').click(function () {
        $('#modal_program0').toggleClass("active");
    });

    $('.toProgram1').click(function () {
        $('#modal_program1').toggleClass("active");
    });
    $('.toProgram2').click(function () {
        $('#modal_program2').toggleClass("active");
    });
    $('.toProgram3').click(function () {
        $('#modal_program3').toggleClass("active");
    });
    $('.toProgram4').click(function () {
        $('#modal_program4').toggleClass("active");
    });
    $('.toProgram5').click(function () {
        $('#modal_program5').toggleClass("active");
    });
    $('.toProgram6').click(function () {
        $('#modal_program6').toggleClass("active");
    });
    $('.toProgram7').click(function () {
        $('#modal_program7').toggleClass("active");
    });
    $('.toProgram8').click(function () {
        $('#modal_program8').toggleClass("active");
    });
    $('.popup-sub .close').click(function () {
        $('.popup-sub').removeClass("active");
    });

    $("header nav .nav-icon").click(function () {
        $("header ul").toggleClass("open-close");
    });
    $(".getPrograms").click(function () {
        $("body").toggleClass("is-opened-menu");
    });


    /* || SCROLLING EFFECT || */
    new cbpScroller(document.getElementById("section1"));
    new cbpScroller(document.getElementById("section2"));
    new cbpScroller(document.getElementById("section3"));
    new cbpScroller(document.getElementById("section4"));
    new cbpScroller(document.getElementById("section5"));


});