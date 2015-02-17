var min_width =  45;
var max_width = 150;
var max_time  = 500;      // in millisec
var animation_speed = (max_width - min_width) / max_time;

var overlap = false;
$(document).ready(function() {
    $('.tag').hide();
    $('nav').css('width', min_width);
    $('#wrapper').css('margin-left', min_width);
    
    $('nav').mouseenter(function() {
        var animation_time = (max_width - $(this).width()) / animation_speed;
        $(this).stop().animate({
            width: max_width
        }, animation_time , function() {
            $('.tag').show();
        });
        if (!overlap) {
            $('#wrapper').stop().animate({
                'margin-left': max_width
            }, animation_time);
        }
    });
    $('nav').mouseleave(function(){
        $('.tag').hide();
        var animation_time = ($(this).width() - min_width) / animation_speed
        $(this).stop().animate({
            width: min_width
        }, animation_time, function() {
            $('.tag').hide();
        });
        if (!overlap) {
            $('#wrapper').stop().animate({
                'margin-left': min_width
            }, animation_time);
        };
    });
    $('nav>li').click(function(){
        $('nav>li').removeClass('active');
        $(this).addClass('active');
    })
})