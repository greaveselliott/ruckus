// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

(function($){
    var $container = $('.ruckus-slick-text').css({"position":"relative"});
    var $slides = $container.find('p').css({"opacity":0});
    $slides.eq(0).css({"position":"absolute", "opacity":1});

    function timeout () {
        setTimeout(function(){
            $slides.each(function(index){
                $(this).toggleAnimation(500);
            });
            // recall timer function
            timeout();
        }, 3000);
    }

    timeout();

    $.fn.toggleAnimation = function (speed,i) {
        var self = this;
        if (self.css('opacity') == 0) {
            self.animate({"opacity": 1}, speed);
        } else if (self.css('opacity') == 1) {
            self.animate({"opacity": 0}, speed);
        }


        return self;
    };

})(jQuery);