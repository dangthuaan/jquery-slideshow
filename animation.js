$(document).ready(function() {
    let counter = 1,
        items = $('.img-box'),
        count = items.length;

    $('#img-counter').html(counter + '/' + items.length);

    $('.img-box').hide();
    $('.img-box.active').show();

    function run() {
        counter++;
        if (counter > count) {
            counter = 1;
        }

        $('.img-box.active').fadeOut().removeClass('active');
        $('.img-box:nth-child(' + counter + ')').addClass('active').fadeIn();
        
        $('#img-counter').html(counter + '/' + items.length);
    }

    $('#next').click(function() {
        run();
    });

    $('#prev').click(function() {
        counter--;
        if (counter == 0) {
            counter = count;
        }

        $('.img-box.active').fadeOut().removeClass('active');
        $('.img-box:nth-child(' + counter + ')').addClass('active').fadeIn();

        $('#img-counter').html(counter + '/' + items.length);
    });

    
    let a;

    $('#auto').click(function() {
        if ($(this).hasClass('run')) {
            a = setInterval(run, 5000);
            $(this).removeClass('run');
        } else {
            clearInterval(a);
            $(this).addClass('run');
        }
    });
    // push AUTO button again to stop the action

});