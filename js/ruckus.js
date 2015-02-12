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
    var eemjiiRuckus =  'eemjiiRuckus',
        defaults = {
            model: {
                appContainer:       '.appContainer',
                entryPoint:         1,
                userOptionsGroup:   '.ruckus-option-group',
                userOptions:        '.ruckus-option'
            },
            controller: {
                next: '.ruckus-next',
                prev: '.ruckus-prev'
            }
        };

    // The actual plugin constructor
    function EemjiiRuckus( element, options ) {
        var self = this;
        self.element    = element;
        self.$element   = $(element);

        // jQuery has an extend method that merges the
        // contents of two or more objects, storing the
        // result in the first object. The first object
        // is generally empty because we don't want to alter
        // the default options for future instances of the plugin
        self.options    = $.extend( {}, defaults, options);

        self._defaults  = defaults;
        self._name      = eemjiiRuckus;

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
        console.log(this);
        self.Model();
        self.View();
        self.Controller();

        self.Model.userOptionKeys = self.setResultKeys();

        self.toggleButtons();
        self.eventRefresh();
        console.log('Ruckus app initialized.');
    };

    /* Each '.ruckus-option' is assigned a unique prime numbers, acting as its reference to its option.
    * As the user will pick 3 options, they will have picked 3 different prime number
    * These 3 prime numbers will be concatenated together generating a UNIQUE reference number
    */
    EemjiiRuckus.prototype.setResultKeys = function () {
        var self = this;

        // Array of prime numbers
        var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
                            43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
                            101, 103, 107, 109, 113, 127, 131, 137, 139, 149,
                            151, 157, 163, 167, 173, 179, 181, 191, 193, 197,
                            199, 211, 223, 227, 229, 233, 239, 241, 251, 257,
                            263, 269, 271, 277, 281, 283, 293, 307, 311, 313,
                            317, 331, 337, 347, 349, 353, 359, 367, 373, 379,
                            383, 389, 397, 401, 409, 419, 421, 431, 433, 439,
                            443, 449, 457, 461, 463, 467, 479, 487, 491, 499,
                            503, 509, 521, 523, 541, 547, 557, 563, 569, 571,
                            577, 587, 593, 599, 601, 607, 613, 617, 619, 631,
                            641, 643, 647, 653, 659, 661, 673, 677, 683, 691,
                            701, 709, 719, 727, 733, 739, 743, 751, 757, 761,
                            769, 773, 787, 797, 809, 811, 821, 823, 827, 829,
                            839, 853, 857, 859, 863, 877, 881, 883, 887, 907,
                            911, 919, 929, 937, 941, 947, 953, 967, 971, 977,
                            983, 991, 997 ];

        var keyObject = {};

        self.Model.$userOptions.each(function(index, value){
            keyObject[$(value).data('option-name')] = { key: primeNumbers[index] };
        });

        return keyObject;
    };
    EemjiiRuckus.prototype.resume = function () {

    };
    // Application Model
    EemjiiRuckus.prototype.Model = function () {
        var self = this;

        self.Model = {
            appContainer:       self.options.model.appContainer,
            $appContainer:      $(self.options.model.appContainer),
            entryPoint:         self.options.model.entryPoint,           // The entry point for the application
            userOptionsGroup:   self.options.model.userOptionsGroup,     // The options group selector
            $userOptionsGroup:  $(self.options.model.userOptionsGroup),  // jQuery object for options group
            userOptions:        self.options.model.userOptions,          // Individual options selector
            $userOptions:       $(self.options.model.userOptions),       // jQuery object for ALL individual options
            userOptionKeys: undefined,                                   // User options with prime number access keys
            currentResult: {                                             // The result of the users answers
                stage1: undefined,                                  // Result of stage 1
                stage2: undefined,                                  // Result of stage 2
                stage3: undefined                                   // Result of stage 3
            },
            currentLocation:        undefined,                      // Current location within the application
            timeAtCurrentLocation:  undefined,                      // The duration the user has spent at this location
            formData: {                                             // User form input data
                name:       undefined,                              // Users name
                email:      undefined,                              // Users email
                country:    undefined,                              // Users country
                telephone:  undefined                               // Users telephone
            },
            serializedData: undefined                               // Serialized module data
        };
    };
    // Updating URL deep linking
    EemjiiRuckus.prototype.deepLink   = function (){

    };
    // Creating, reading and updating the cookies
    EemjiiRuckus.prototype.cookie     = function (){

    };
    // Tracking user interaction with Google analytics
    EemjiiRuckus.prototype.analytics  = function (){

    };
    // Generating a result based on users selected inputs
    EemjiiRuckus.prototype.updateResult     = function (userOption) {
        console.log('updating result');
        var self = this;

        var result = 1;

        if (typeof userOption === 'array') {
            for (var i = 0; i < userOption.length; i++) {
               result *= userOption[i];
            }
        } else if (typeof userOption === 'number') {
            result = userOption;
        }

        self.Model.currentResult["stage"+self.View.currentFrame] = result;
        console.log(self);
        return result;
    };


    // Returns the key passed argument 'userOption' key.
    EemjiiRuckus.prototype.getKey    = function (userOption) {
        var self = this;

        return self.Model.userOptionKeys[userOption.data('option-name')].key;
    };

    // Customer event: 'refresh' - refreshes Model data
    EemjiiRuckus.prototype.eventRefresh = function (){
        var self = this;

        self.Model.$appContainer.on('refresh', function(event, inputType){
            switch ( inputType ) {
                case 'toggle' || 'form-input':
                    self.updateResult();
                    self.updateCookie();
                    self.sendAnalytics();
                case 'continue':
                    self.updateURL();
                    self.readURL();
                    self.goToAndPlay();
                    break;
                default:
                    break;
            }
        });
    };
    // APPLICATION VIEW
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
            currentFrame: 1
        };
    };

    EemjiiRuckus.prototype.goToAndPlay = function () {

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

    EemjiiRuckus.prototype.toggleButtons = function () {
        var self = this;

        self.Model.$userOptions.on('click', function(){
            var $self       = $(this);
            var $parent     = $self.closest(self.Model.userOptionsGroup);
            var $dataType   = $parent.data('toggle-type');

            if ($dataType == 'checkbox') {
                $self.hasClass('toggled') ?         // Does this element have the '.toggled' class?
                    $self.removeClass('toggled') :  // TRUE: remove the '.toggled' class
                        $self.addClass('toggled');  // FALSE: add the '.toggled' class

            } else if ($dataType == 'radio') {
                $parent.children(self.Model.userOptions).removeClass('toggled');
                $self.addClass('toggled');
            }
            self.Model.$appContainer.trigger('refresh',['toggle']);
        });
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
