// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

(function($){
    var $container = $('.ruckus-slick-text').css({"position":"relative"});
    var $slides = $container.find('pgit').css({"opacity":0});
    $slides.eq(0).css({"position":"absolute", "opacity":1});
    console.log($slides);
    function timeout () {
        setTimeout(function(){
            $slides.each(function(index){
                $(this).eq(index).toggleAnimation(500);
            });
            // recall timer function
            timeout();
        }, 3000);
    }

    timeout();

    $.fn.toggleAnimation = function (speed) {
        var self = this;
        var opacity;
        console.log(self);
        if (self.css('opacity')== 0) {
            opacity = 1;
            console.log(self.css('opacity'));
        } else if (self.css('opacity')== 1) {
            opacity = 0;
            console.log(self.css('opacity'));
        }

        self.animate({"opacity": opacity}, speed);
        return self;
    };

})(jQuery);