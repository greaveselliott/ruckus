/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */


// the semi-colon before the function invocation is a safety 
// net against concatenated scripts and/or other plugins 
// that are not closed properly.
;(function ( $, window, document, undefined ) {

    // undefined is used here as the undefined global 
    // variable in ECMAScript 3 and is mutable (i.e. it can 
    // be changed by someone else). undefined isn't really 
    // being passed in so we can ensure that its value is 
    // truly undefined. In ES5, undefined can no longer be 
    // modified.

    // window and document are passed through as local 
    // variables rather than as globals, because this (slightly) 
    // quickens the resolution process and can be more 
    // efficiently minified (especially when both are 
    // regularly referenced in your plugin).

    // Create the defaults once
    var fullScreenjs = 'fullScreenjs',
        defaults = {
            target: ".fs-target",
            container: ".fs-container"
        };

    // The actual plugin constructor
    function FullScreenjs( element, options ) {
        var self = this;

        // jQuery has an extend method that merges the 
        // contents of two or more objects, storing the 
        // result in the first object. The first object 
        // is generally empty because we don't want to alter 
        // the default options for future instances of the plugin
        self.options = $.extend( {}, defaults, options) ;

        self._defaults = defaults;
        self._name = fullScreenjs;

        self.window     = window;
        self.$window    = $(self.window);
        self.target     = self.options.target;
        self.$target     =  $(self.target);

        self.init();
    }

    FullScreenjs.prototype.init = function () {
        // Place initialization logic here
        // You already have access to the DOM element and
        // the options via the instance, e.g. this.element 
        // and this.options
        var self = this;

        // Resize windows to fit window
        self.setScreenDimensions(self.$target, self.$window);
        // Listen for window resize
        self.onResize();
    };
    // Set $targets dimensions to that of its container - or any other object...
    FullScreenjs.prototype.setScreenDimensions = function ($target, $container) {
        var target      = $target;
        var container   = $container;
        var dimensions      = [container.height(), container.width()];

        target.css({
            height: dimensions[0],
            width: dimensions[1]
        });

        return dimensions;
    };
    // Listening for 'resize' events
    FullScreenjs.prototype.onResize = function () {

        var self = this;
        // Listen for browser resize
        $(window).resize(function(){
            self.setScreenDimensions(self.$target, self.$window);
        });

    };

    // A really lightweight plugin wrapper around the constructor, 
    // preventing against multiple instantiations
    $.fn.fullScreenjs = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + fullScreenjs)) {
                $.data(this, 'plugin_' + fullScreenjs,
                    new FullScreenjs( this, options ));
            }
        });
    }

})( jQuery, window, document );