$(document).ready(function (){
    $('.icon-off').click(function() {
        $('.icon-on').css('display','inline');
        $('#contactInfo').css('color','white');
        $(this).css('display','none');
        $('#title').fadeOut('fast', function() {
            $('#sinopsis').fadeIn('fast');
        });                
    });
    $('.icon-on').click(function() {
        $('.icon-off').css('display','inline');
        $('#contactInfo').css('color','transparent');
        $(this).css('display','none');
        $('#sinopsis').fadeOut('fast', function() {
            $('#title').fadeIn('fast');
        });                
    });
});