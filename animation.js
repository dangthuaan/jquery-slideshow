$(document).ready(function() {
    let counter = 1,
        items = $('.img-box'),
        count = items.length;

    $('.img-box').hide();
    $('.img-box.active').show();

    function run() {
        counter++;
        if (counter > count) {
            counter = 1;
        }

        $('.img-box.active').fadeOut().removeClass('active');
        $('.img-box:nth-child(' + counter + ')').addClass('active').fadeIn();
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
    });

    
    let a;

    $('#auto').click(function() {
        if ($(this).hasClass('run')) {
            a = setInterval(run, 1000);
            $(this).removeClass('run');
        } else {
            clearInterval(a);
            $(this).addClass('run');
        }
    });
    // push AUTO button again to stop the action

});