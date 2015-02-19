// Short script correcting the layout on the browser

(function($, window, undefined){

   function matchHeight (CCS_Selector) {
        var $target         = $(CCS_Selector);
            $parent         = $target.parent(),
            parentHeight    = $parent.height();
        console.log(parentHeight);
        $target.css({
            height: parentHeight
        });



       $target = $parent = parentHeight = undefined;
    }
    $(function(){
        matchHeight('.match-container-height');
    });
    //$(window).on('resize', function(){
    //    matchHeight('.match-container-height');
    //    console.log('resizing');
    //});

})(jQuery, window);