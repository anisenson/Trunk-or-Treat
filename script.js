$(document).ready(function () {
    $('#headerText2').delay(2500).show(100);
    $('.arrow').delay(2500).show(100);

    $('.spider').delay(2500).fadeIn(3000);
    $('#headerText').fadeIn(3000);



    $('.showcaseIMG').on('mouseenter', function () {
        $(this).next('.description').fadeIn(300);
    });

    $('.showcaseIMG').on('mouseleave', function () {
        $(this).next('.description').fadeOut(300);
    });



    /*Chat gpt did this - When you scroll down 50* pixels, the navbar gets the class of scrolled which gives it a transparent black background- easier to read. Really cool and simple use of jquery!
    */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {  // Change 50 to the number of pixels you want
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });



});
