$(document).ready(function() {
    $('.carousel').each(function() {
        let $this = $(this);

        let counter = 1,
            items = $this.find('.img-box'),
            count = items.length,
            $next = $this.find('.next'),
            $prev = $this.find('.prev'),
            $autoPlay = $this.find('button');


        $this.find('.img-box').hide();
        $this.find('.img-box.active').show();
        $this.find('.img-counter').html(counter + '/' + count);

        function run() {
            $this.find('.img-box.active').fadeOut().removeClass('active');
            $this.find('.img-box:nth-child(' + counter + ')').addClass('active').fadeIn();
            $this.find('.img-counter').html(counter + '/' + count);
        }


        $next.on('click', function() {
            counter++;
            if (counter > count) {
                counter = 1;
            }
            run();
        });


        $prev.on('click', function() {
            counter--;
            if (counter == 0) {
                counter = count;
            }
            run();
        });

        let a;
        $autoPlay.on('click', function() {
            if ($autoPlay.hasClass('auto')) {
                a = setInterval(function() {
                    counter++;
                    if (counter > count) {
                        counter = 1;
                    }
                    run();
                }, 5000);
                $autoPlay.removeClass('auto');
            } else {
                clearInterval(a);
                $autoPlay.addClass('auto');
            }
        });
        
    });
});