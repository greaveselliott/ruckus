// config file for isInViewport.js
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
    var activePage = 'active-page.js',
        defaults = {
            wayPoints: 'ruckus-tile',
            cta_button: '#hub-link'
        };

    // The actual plugin constructor
    function ActivePage( element, options ) {
        var self = this;

        // jQuery has an extend method that merges the
        // contents of two or more objects, storing the
        // result in the first object. The first object
        // is generally empty because we don't want to alter
        // the default options for future instances of the plugin
        self.options = $.extend( {}, defaults, options) ;

        self._defaults = defaults;
        self._name = activePage;

        self.window     = window;
        self.$window    = $(self.window);
        self.target     = self.options.target;
        self.$target     =  $(self.target);

        self.init();
    }

    ActivePage.prototype.init = function () {
        // Place initialization logic here
        // You already have access to the DOM element and
        // the options via the instance, e.g. this.element
        // and this.options
        var self = this;

        self.wayPoints();
        self.timelineHubLink();
    };

    ActivePage.prototype.timelineHubLink = function () {
        var self = this;
        var $hubLink = $(self.options.cta_button);

        var timelineHubLink = new TimelineMax({yoyo: true, paused: true, repeat: 1, onComplete: console.log('Hublink animation complete')});


        timelineHubLink.to($hubLink, 0.4, { rotation: 5 ,scaleX: 1.2, scaleY: 1.2, ease: Power4.easeOut, y: 0 });

        $(document).on('cta_pulse',function(){
            timelineHubLink.restart();
        });

        return self;
    };

    ActivePage.prototype.alertHubLink = function () {
        var self = this;

        $(document).trigger('cta_pulse');

        return self;
    };

    ActivePage.prototype.wayPoints  = function () {
        var self                = this;
        var classname   = self.options.wayPoints;
        var $elements           = $('.' + classname);
        var $window = window; // some reason window is appearing undefined here. Added this $window variable as a hotfix.
        $elements.each(function(key, value) {
            new Waypoint({
                element: this,
                handler: function (direction) {
                    var previousWaypoint = this.previous();
                    var nextWaypoint = this.next();
                    var $element = $(this.element);

                    // reset
                    $elements.removeClass('np-previous np-current np-next').css({opacity: 0.5});

                    // set current element
                    $element.addClass('np-current').css({opacity: 1});
                    self.alertHubLink();
                    // set previous element
                    if (previousWaypoint) {
                        $(previousWaypoint.element).addClass('np-previous');
                    }
                    // set next element
                    if (nextWaypoint) {
                        $(nextWaypoint.element).addClass('np-next');
                    }
                    // alert hub


                },
                offset: function(){
                    return -(this.element.clientHeight - $(this.element).height())/2;
                },
                group: classname
            })
        });

        return self;
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn.activePage = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + activePage)) {
                $.data(this, 'plugin_' + activePage,
                    new ActivePage( this, options ));
            }
        });
    };

    // initialize self
    $(document).activePage();

})( jQuery, window, document );
