/*
 * Created by elliottgreaves on 12/02/15.
 * ruckus.js - is the script file for a simple web app
 * providing  consultation to ruckus customers
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
    var eemjiiRuckus = 'eemjiiRuckus',
        defaults = {
            controller: {
                next: '.ruckus-next',
                prev: '.ruckus-prev'
            }
        };

    // The actual plugin constructor
    function EemjiiRuckus( element, options ) {
        var self = this;
        self.element    = element;
        self.$element   = $(this.element);

        // jQuery has an extend method that merges the
        // contents of two or more objects, storing the
        // result in the first object. The first object
        // is generally empty because we don't want to alter
        // the default options for future instances of the plugin
        self.options = $.extend( {}, defaults, options) ;

        self._defaults = defaults;
        self._name = eemjiiRuckus;

        self.init();
        console.log(self);
    }
    // Application Initialise
    EemjiiRuckus.prototype.init = function () {
        // Place initialization logic here
        // You already have access to the DOM element and
        // the options via the instance, e.g. this.element
        // and this.options

        var self = this;

        self.Model();
        self.View();
        self.Controller();

        console.log('Ruckus app initialized.');
    };
    EemjiiRuckus.prototype.init.resume = function () {

    };
    // Application Model
    EemjiiRuckus.prototype.Model = function () {
        var self = this;

        self.Model = {
            entryPoint: undefined,
            currentResult: {
                stage1: undefined,
                stage2: undefined,
                stage3: undefined,
                stage4: undefined,
                stage5: undefined
            },
            currentLocation:        undefined,
            timeAtCurrentLocation:  undefined,
            formData: {
                name:       undefined,
                email:      undefined,
                country:    undefined,
                telephone:  undefined
            },
            serializedData: undefined
        };
    };

    EemjiiRuckus.prototype.Model.deepLink   = function (){

    };
    EemjiiRuckus.prototype.Model.cookie     = function (){

    };
    EemjiiRuckus.prototype.Model.analytics  = function (){

    };
    EemjiiRuckus.prototype.Model.result     = function (){

    };
    EemjiiRuckus.prototype.Model.refresh    = function (){

    };
    // Application View
    EemjiiRuckus.prototype.View             = function () {
        var self = this;

        self.View = {
            timeLineFrames:{
                1: {
                    url:undefined,
                    animate: undefined,
                    frameNumber: 1
                },
                2: {
                    url:undefined,
                    animate: undefined,
                    frameNumber: 2
                },
                3: {
                    url:undefined,
                    animate: undefined,
                    frameNumber: 3
                },
                4: {
                    url:undefined,
                    animate: undefined,
                    frameNumber: 4
                },
                5: {
                    url:undefined,
                    animate: undefined,
                    frameNumber: 5
                }
            },
            currentFrame: undefined
        };
    };

    EemjiiRuckus.prototype.View.goToAndPlay = function () {

    };
    // Application Controller
    EemjiiRuckus.prototype.Controller = function () {
        var self = this;

        self.Controller = {
            next: self.options.controller.next,
            $next: $(self.options.controller.next),
            prev: self.options.controller.prev,
            $prev: $(self.options.controller.prev)
        };
    };


    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn.eemjiiRuckus = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + eemjiiRuckus)) {
                $.data(this, 'plugin_' + eemjiiRuckus,
                    new EemjiiRuckus( this, options ));
            }
        });
    }

})( jQuery, window, document );
