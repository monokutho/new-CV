$(document).ready(function () {

//Intro Switch Animations
$('.icon-off').click(function () {
    $(this).css('display', 'none');
    $('.icon-on').css('display', 'inline');
    $('#contactInfo').css('color', 'white');
    $('#title').fadeOut('fast', function () {
        $('#sinopsis').fadeIn('fast');
    });
    $('#one').css('backgroundImage', 'url(/img/cv-intro_bnw.jpg)');
    $('#firstPageDown').css('display', 'inline');
});
$('.icon-on').click(function () {
    $(this).css('display', 'none');
    $('.icon-off').css('display', 'inline');
    $('#contactInfo').css('color', 'transparent');
    $('#sinopsis').fadeOut('fast', function () {
        $('#title').fadeIn('fast');
    });
    $('#one').css('backgroundImage', 'url(/img/cv-intro.jpg)')
    $('#firstPageDown').css('display', 'none');
});

//Intro - Work Experience Transit
$('#firstPageDown').click(function () {
    $('#two').css('display', 'inline');
    $('html, body').animate({
        scrollTop: $("#job1").offset().top
    }, 1000, function() {
        $('#jobTitle1, #jobImg1, #jobData1').animate({opacity: 1}, 300);
        })
    });
    


});