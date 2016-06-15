/*organizar bien el codigo del index.js*/

$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });
});

$('.box').mousedown(function(){
        
        $(this).animate({
                    borderRadius: '100%',
                    height:'100px'
                },'fast');
    
}).hover(function(){
        $(this).animate({
            height: '300px',
            marginTop: '-100px'
        },'fast');
    }, function() {
        $(this).animate({
            height: '100px',
            marginTop: '10px'
        },'fast');;
    }).mouseup(function(){
       $(this).animate({
                    height:'100px',
                    borderRadius: '0%'
                },'fast'); 
    });    