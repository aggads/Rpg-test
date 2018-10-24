//JQUERY

$(document).ready(function(){
    $('.switchbutton').on('click', function(e){
        $('.container').addClass('show');
        $('.logobox').addClass('show');
        $(this).addClass('hide');
        $('.credits').removeClass('hide');
        $('.credits').addClass('show');
        $('.main').addClass('snapped');
        $('.shadow').addClass('snapped');
        $('.clouds').addClass('zoom');
    });

    $('.logobox').on('click', function(e){
        $('.container').removeClass('show');
        $('.logobox').removeClass('show');
        $('.switchbutton').removeClass('hide');
        $('.credits').removeClass('show');
        $('.credits').addClass('hide');
        $('.main').removeClass('snapped');
        $('.shadow').removeClass('snapped');
        $('.clouds').removeClass('zoom');
    });

});