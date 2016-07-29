$(document).ready(function () {

//Intro Switch Animations
$('.icon-off').click(function () {
    $(this).css('display', 'none');
    $('.icon-on').css('display', 'inline');
    $('#contactInfo').animate({opacity: '1'}, 2000);
    $('#title').fadeOut('1000', function () {
        $('#sinopsis').fadeIn('1000');
    });
    $('#one').css({'transition': 'background-image 1s ease-in-out','backgroundImage': 'url(/img/cv-intro_bnw.jpg)'});
    $('#firstPageDown').animate({opacity: '1'}, 4000);
});
$('.icon-on').click(function () {
    $(this).css('display', 'none');
    $('.icon-off').css('display', 'inline');
    $('#contactInfo').animate({opacity: '0'}, 'fast');
    $('#sinopsis').fadeOut('fast', function () {
        $('#title').fadeIn('fast');
    });
    $('#one').css('backgroundImage', 'url(/img/cv-intro.jpg)')
    $('#firstPageDown').animate({opacity: '0'}, 'fast');
});

//Intro - Work Experience Transit
/*$('#firstPageDown').click(function () {
    $('#two').css('display', 'inline');
    $('html, body').animate({
        scrollTop: $("#job1").offset().top
    }, 1000, function() {
        $('#jobTitle1, #jobImg1, #jobData1').animate({opacity: 1}, 300);
        })
    });*/
    


});