$(document).ready(function () {
    // Mouse Input

    $('.box').hover(function () {
        $(this).animate({height: '300px',marginTop: '-100px'}, 'fast');
    }, function () {
        $(this).animate({height: '100px',marginTop: '10px'}, 'fast');;
    });

    var cNote = document.getElementById('cAudio');

    $('#c').mousedown(function () {
                cNote.currentTime = 0;
                cNote.play();
                $(this).css({'background-color':'#db1d2d'})}).hover(function() {
                $(this).css({"background-color":"#661920"});
            }, function () {
                $(this).css({'background-color':'#3e181b'});
            })
            .mouseup(function() {
                $(this).css({'background-color':'#3e181b'});
            });

    var dNote = document.getElementById('dAudio');

    $('#d').mousedown(function () {
        $(this).css('background-color', '#f0421c');
        dNote.currentTime = 0;
        dNote.play();
    }).hover(function () {
        $(this).css({
            "background-color": "#6e2819"
        });
    }, function () {
        $(this).css('background-color', '#422018');
    }).mouseup(function () {
        $(this).css('background-color', '#422018');
    });

    // This controls the button for the e note.

    var eNote = document.getElementById('eAudio');

    $('#e').mousedown(function () {
        $(this).css('background-color', '#fec02d');
        eNote.currentTime = 0;
        eNote.play();
    }).hover(function () {
        $(this).css('background-color', '#735b20');
    }, function () {
        $(this).css('background-color', '#45391b');
    }).mouseup(function () {
        $(this).css('background-color', '#45391b');
    });

    // This controls the button for the f note.

    var fNote = document.getElementById('fAudio');

    $('#f').mousedown(function () {
        $(this).css('background-color', '#20d071');
        fNote.currentTime = 0;
        fNote.play();
    }).hover(function () {
        $(this).css('background-color', '#1b613b');
    }, function () {
        $(this).css('background-color', '#193c29');
    }).mouseup(function () {
        $(this).css('background-color', '#193c29');
    });

    // This controls the button for the g note.

    var gNote = document.getElementById('gAudio');

    $('#g').mousedown(function () {
        $(this).css('background-color', '#1a9ddb');
        gNote.currentTime = 0;
        gNote.play();
    }).hover(function () {
        $(this).css('background-color', '#184d65');
    }, function () {
        $(this).css('background-color', '#18323e');
    }).mouseup(function () {
        $(this).css('background-color', '#18323e');
    });

    // This controls the button for the a note.

    var aNote = document.getElementById('aAudio');

    $('#a').mousedown(function () {
        $(this).css('background-color', '#a13fad');
        aNote.currentTime = 0;
        aNote.play();
    }).hover(function () {
        $(this).css('background-color', '#4e2753');
    }, function () {
        $(this).css('background-color', '#331f35');
    }).mouseup(function () {
        $(this).css('background-color', '#331f35');
    });

    // This controls the button for the b note.

    var bNote = document.getElementById('bAudio');

    $('#b').mousedown(function () {
        $(this).css('background-color', '#f26fd4');
        bNote.currentTime = 0;
        bNote.play();
    }).hover(function () {
        $(this).css('background-color', '#6f3a62');
    }, function () {
        $(this).css('background-color', '#43293d');
    }).mouseup(function () {
        $(this).css('background-color', '#43293d');
    });

    //Keyboard input

    $(document).keydown(function (key) {
        switch (parseInt(key.which, 10)) {
        case 65:
            cNote.currentTime = 0;
            cNote.play();
            $('#c').css({"background-color":"#db1d2d"}).animate({borderRadius: '100%'},'fast');
            $('#instrument').css({"background-color":"#3e181b"});
            break;
        case 83:
            dNote.currentTime = 0;
            dNote.play();
            $('#d').css("background-color","#f0421c").animate({borderRadius: '100%'},'fast');
            $('#instrument').css({"background-color":"#422018"});
            break;
        case 68:
            eNote.currentTime = 0;
            eNote.play();
            $('#e').css("background-color","#fec02d").animate({borderRadius: '100%'},'fast');
            $('#instrument').css({"background-color":"#45391b"});
            break;
        case 70:
            fNote.currentTime = 0;
            fNote.play();
            $('#f').css("background-color", "#20d071").animate({borderRadius: '100%'},'fast');
            $('#instrument').css({"background-color":"#193c29"});
            break;
        case 71:
            gNote.currentTime = 0;
            gNote.play();
            $('#g').css("background-color", "#1a9ddb").animate({borderRadius: '100%'},'fast');
            $('#instrument').css({"background-color":"#18323e"});
            break;
        case 72:
            aNote.currentTime = 0;
            aNote.play();
            $('#a').css("background-color", "#a13fad").animate({borderRadius: '100%'},'fast');
            $('#instrument').css({"background-color":"#331f35"});
            break;
        case 74:
            bNote.currentTime = 0;
            bNote.play();
            $('#b').css("background-color", "#f26fd4").animate({borderRadius: '100%'},'fast');
            $('#instrument').css({"background-color":"#43293d"});
            break;

        }
    });
    
    $(document).keyup(function (key) {
        switch (parseInt(key.which, 10)) {
        case 65:
            $('#c').css("background-color", "#3e181b");
            break;
        case 83:
            $('#d').css("background-color", "#422018");
            break;
        case 68:
            $('#e').css("background-color", "#45391b");
            break;
        case 70:
            $('#f').css("background-color", "#193c29");
            break;
        case 71:
            $('#g').css("background-color", "#18323e");
            break;
        case 72:
            $('#a').css("background-color", "#331f35");
            break;
        case 74:
            $('#b').css("background-color", "#43293d");
            break;
        }
    });
    
    $(document).keyup(function(){
        $('.box').animate({borderRadius: '0%'}, 'fast');
        $('#instrument').css({"background-color": "#000000"});
    })
    
});