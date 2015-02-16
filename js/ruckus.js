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
                userOptions:        '.ruckus-option',
                rootDir:            '192.168.33.10/ruckus/',
                defaultPageTitle:   ' | Simply Better Wireless | Ruckus',
                pageInfo:           {
                    1: 'Choose your sector.',
                    2: 'How large is your business?',
                    3: 'What do you need Wi-Fi for?',
                    4: 'Your contact details',
                    5: 'Your solution'
                }
            },
            view: {
                stage:              window,
                wrapper:            '.tile',
                container:          '.slide-container',
                frame:              '.slide',
                backgroundWrapper:  '.tile_background-wrapper',
                backgroundPosition: '.tile_background-position',
                background:         '.tile_background',
                backgroundImages: {
                      1:{ // omit the forward slash before path
                          path: 'images/background-1.jpg',
                          absolutePath: undefined,
                          assignedTile:[0,1]
                      },
                      2:{ // omit the forward slash before path
                          path: 'images/background-2.jpg',
                          absolutePath: undefined,
                          assignedTile:[2,3]
                      },
                      3:{ // omit the forward slash before path
                          path: 'images/background-3.jpg',
                          absolutePath: undefined,
                          assignedTile:[4,5]
                      }
                }
            },
            controller: {
                next:               '.ruckus-next',
                prev:               '.ruckus-prev'
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

    }
    // Application Initialise
    EemjiiRuckus.prototype.init = function () {
        // Place initialization logic here
        // You already have access to the DOM element and
        // the options via the instance, e.g. this.element
        // and this.options

        var self = this;
        //console.log(this);
        self.Model()
            .View()
            .Controller()
            .setAnalytics()
            .setSlider()
            .scale()
            .toggleButtons()
            .setBackground()
            .setBackgroundDimensions()
            .buildTimeLineSlide()
            .setDeepLink()
            .onDeepLinkChange();
            //.buildResultsObject();
//            .eventRefresh();

        // returning self: enables functions chaining
        return self;
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
            defaultPageTitle:   self.options.model.defaultPageTitle,
            pageInfo:           self.options.model.pageInfo,             // The application page information
            userOptionKeys: undefined,                                   // User options with prime number access keys
            currentResult: undefined,                                    // The result of the users answers
            timeAtCurrentLocation:  undefined,                      // The duration the user has spent at this location
            formData: {                                             // User form input data
                name:       undefined,                              // Users name
                email:      undefined,                              // Users email
                country:    undefined,                              // Users country
                telephone:  undefined                               // Users telephone
            },
            serializedData: undefined,                               // Serialized module data
            rootDir: self.options.model.rootDir,                    // Root directory (e.g. https://www.yourwebsite.com/)
            cookiesEnabled: true                                    // are cookies enabled?
        };

        // returning self: enables functions chaining
        return self;
    };
    // Updating URL deep linking
    EemjiiRuckus.prototype.setDeepLink   = function (){
        var self = this;
        $.address.value(self.View.currentFrame);

        // returning self: enables functions chaining
        return self;
    };

    EemjiiRuckus.prototype.onDeepLinkChange = function () {
        var self = this;

        $.address.change(function(event) {
            self.View.currentFrame = $.address.value().slice(1);
           // self.Model.lastUsedInputType = inputType;

            //self.updateResult();
            //self.setBackground();
            //self.updateCookie();
            //self.sendAnalytics();
            self.goToAndPlay(self.View.currentFrame);
            self.sendAnalytics(self.View.currentFrame);
            self.setPageTitle( self.Model.pageInfo[self.View.currentFrame]);

        });
        // returning self: enables functions chaining
        return self;
    };

    // Creating, reading and updating the cookies
    EemjiiRuckus.prototype.cookie     = function (){

    };

    // Set analytics
    EemjiiRuckus.prototype.setAnalytics = function () {
        var self = this;

        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-59686286-1', 'auto');
        ga('send', 'pageview');


        // returning self: enables functions chaining
        return self;
    };
    // Tracking user interaction with Google analytics
    EemjiiRuckus.prototype.sendAnalytics  = function (currentFrame){
        var self = this;

        //var pageInfo = self.Model.pageInfo[pageNumber];

        //ga('set', {
        //    page: pageNumber,
        //    title: 'test'
        //});
        ga('set', {
            page: '/'+currentFrame,
            title: self.Model.pageInfo[currentFrame],
            entryPoint: self.Model.entryPoint
        });
        ga('send', 'pageview', {
            //'page': '/my-new-page',
            'hitCallback': function() {
                console.log('analytics.js done sending data');
            }
        });

        // returning self: enables functions chaining
        return self;
    };

    // Set page title
    EemjiiRuckus.prototype.setPageTitle = function (title) {
        var self = this;

        document.title = title.replace(/['";:,.\/?\\-]/g, '') + self.Model.defaultPageTitle;

        // returning self: enables functions chaining
        return self;
    };

    EemjiiRuckus.prototype.updateResult = function () {

        var self = this;

        var $form = $('#ruckus-data');
        var $element = $form.find('input,select');
        var serviceCode = 1;
        var $currentElement = undefined;

        $.each($element, function(key, value){
            $currentElement = $element.eq(key);

            if ($currentElement.is(":checked")){
                serviceCode *= $currentElement.val();
            }
        });

        self.Model.serviceCode = serviceCode;

        console.log(self.Model.serviceCode);

        return self;
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

            self.Model.lastUsedInputType = inputType;


            switch ( inputType || self.Model.lastUsedInputType ) {
                case 'toggle' || 'form-input':
                    //self.updateResult();
                    //self.updateCookie();
                    //self.sendAnalytics();
                    break;
                case 'playback':
                    //self.updateResult();
                    //self.setBackground();
                    //self.updateCookie();
                    //self.sendAnalytics();
                    //self.updateURL();
                    //self.readURL();
                    //self.goToAndPlay();
                    break;
                default:
                    break;
            }
        });

        // returning self: enables functions chaining
        return self;
    };
    // APPLICATION VIEW
    EemjiiRuckus.prototype.View             = function () {
        var self = this;

        self.View = {
            stage:          self.options.view.stage,
            $stage:         $(self.options.view.stage),
            wrapper:        self.options.view.wrapper,
            $wrapper:       $(self.options.view.wrapper),
            container:      self.options.view.container,
            $container:     $(self.options.view.container),
            frame:          self.options.view.frame,
            $frame:         $(self.options.view.frame),
            timeLineFrames:{
                1: {
                    url:undefined,
                    frameNumber: 0
                },
                2: {
                    url:undefined,
                    frameNumber: 1
                },
                3: {
                    url:undefined,
                    frameNumber: 2
                },
                4: {
                    url:undefined,
                    frameNumber: 3
                },
                5: {
                    url:undefined,
                    frameNumber: 4
                }
            },
            currentFrame: 1,
            backgroundSet: false
        };
        // setting totalFrames - We cannot define this property
        // inside the above object, the jQuery selector METHOD doesn't
        // get processed till after All PROPERTIES have been processed
        // therefore calling .length on $frame returns undefined,
        // as the totalFrames gets called before the jQuery selector.
        self.View.totalFrames    = self.View.$frame.length;

        // returning self: enables functions chaining
        return self;
    };

    EemjiiRuckus.prototype.setSlider = function () {
        var self = this;

        self.View.$stage.on('resize',function(){
            self.scale()
                .buildTimeLineSlide()
                .Model.$appContainer.trigger('refresh');
        });

        // returning self: enables functions chaining
        return self;
    };

    EemjiiRuckus.prototype.scale = function () {
        var self = this;

        self.View.stageHeight    = self.View.$stage.height();
        self.View.stageWidth     = self.View.$stage.width();
        self.View.wrapperHeight  = self.View.$container.height();
        self.View.wrapperWidth   = self.View.$container.width();
        self.View.frameHeight    = self.View.$frame.height();
        self.View.frameWidth     = self.View.$frame.width();
        self.View.containerWidth = self.View.stageWidth * self.View.totalFrames;

        TweenLite.to(self.View.$wrapper, 1, {   height: self.View.stageHeight,
                                                width: self.View.stageWidth,
                                                opacity: 1,
                                                delay:0 ,ease: Back.easeOut.config(1)});
        TweenLite.to(self.View.$frame, 1, { width: self.View.stageWidth,ease: Back.easeOut.config(1) });
        TweenLite.to(self.View.$container, 1, { width: self.View.containerWidth, ease: Back.easeOut.config(1)});

        // returning self: enables functions chaining
        return self;
    };

    EemjiiRuckus.prototype.buildTimeLineSlide = function () {
        var self = this;

        self.View.timeLineSlide = new TimelineMax ();
        self.View.timeLineSlide.pause();

        $.each(self.View.timeLineFrames, function(key, value){
            if (key == 1) {
                self.View.timeLineSlide.to(self.View.$container, 0.5, {left: 0}, 0);//.addLabel(0);
            } else {
                self.View.timeLineSlide.to(self.View.$container, 0.5, {
                    //ease: Back.easeOut.config(1.2),
                    left: -self.View.stageWidth * (key-1)
                }, (key-1));
            }
        });

        // returning self: enables functions chaining
        return self;
    };

    EemjiiRuckus.prototype.goToAndPlay = function (frame) {
        var self = this;
        console.log(frame);

        self.View.timeLineSlide.tweenTo(frame);
        self.View.timeLineBackground.tweenTo(frame);
        // returning self: enables functions chaining
        return self;
    };

    EemjiiRuckus.prototype.setBackground = function () {
        var self = this;
        var currentBackgroundPosition = 0;
        var animatonDuration = 0.5;
        var animationDurationSkip;

        self.View.timeLineBackground    = new TimelineMax ();
        self.View.timeLineBackground.pause();
        self.View.backgroundWrapper     = self.options.view.backgroundWrapper;
        self.View.$backgroundWrapper    = $(self.View.backgroundWrapper);
        self.View.backgroundPosition    = self.options.view.backgroundPosition;
        self.View.$backgroundPosition   = $(self.View.backgroundPosition);
        self.View.background            = self.options.view.background;
        self.View.$background           = $(self.View.background);


        $.each(self.options.view.backgroundImages, function(key, value){

            // Setting background images
            var currentBackground = self.View['background_tile_' + key] = '.background_tile_'+key;
            self.View['$background_tile_' + key] = $(currentBackground);



            $.each(value.assignedTile, function (innerKey, innerValue) {

                // setting background images
                self.View["$background_tile_"+key].css({'background-image':"url("+value.path+")"});
                self.View["$background_tile_"+key].data('activeOnSlide', value['assignedTile']);

                // setting background timeLine
                if (key == 1) {
                    self.View.timeLineBackground.to(self.View.$background[key-1],
                                                    animatonDuration,
                                                    {opacity: 1},
                                                    0);//.addLabel(0);
                } else {

                    self.View.timeLineBackground.to(self.View.$background[key-1],
                                                    currentBackgroundPosition == self.View.stageWidth * (key-1) ? 0 : animatonDuration,
                                                    {opacity: 1},
                                                    (key-1));

                    currentBackgroundPosition = -self.View.stageWidth * (key-1);
                }
                console.log(key);
                // ANIMATE BACKGROUND BY TWEENING OBJECTS SIMILTANIOUSLY
                // Animating background as a RTL slider will work best with this design.
            });

            self.View.backgroundCount = key;
        });
        // The background is now set.
        self.View.backgroundSet = true;
        console.log(self);
        // returning self: enables functions chaining
        return self;
    };

    EemjiiRuckus.prototype.setBackgroundDimensions = function () {
        var self = this;

        // If the background has been set, get it dimensions...
        if (self.View.backgroundSet) {
            self.View.$backgroundWrapper.css({
                height: self.View.stageHeight,
                width: self.View.stageWidth
            });
            self.View.$background.css({
                height: self.View.stageHeight,
                width: self.View.stageWidth,
                position: 'absolute',
                top: '0px',
                left: '0px',
                opacity: 0
            });
            self.View.$backgroundPosition.css({
                height: self.View.stageHeight,
                width: self.View.stageWidth,
                position: 'relative'
            });
        } else {
            try {
                self.View.setBackground();
            } catch (error) {
                console.log(
                    "Error: Thrown by setBackgroundDimensions() \n" +
                    "No the applications background dimensions cannot be defined as \n"+
                    "the applications background have not been set \n"
                );
            }
        }

        // returning self: enables functions chaining
        return self;
    };

    // Application Controller
    EemjiiRuckus.prototype.Controller = function () {
        var self = this;

        self.Controller = {
            next: self.options.controller.next,
            $next: $(self.options.controller.next),
            prev: self.options.controller.prev,
            $prev: $(self.options.controller.prev),
            $playback: $(self.options.controller.next + ","+self.options.controller.prev)
        };

        self.eventPlayback(self.Controller.$playback);
        // returning self: enables functions chaining
        return self;
    };

    EemjiiRuckus.prototype.eventPlayback = function ($playback) {
        var self = this;

        $playback.on('click',function(event){

            self.playback($(this));
            self.setDeepLink();
            //$(this).off('click',"**");
        });
        // returning self: enables functions chaining
        return self;
    };

    EemjiiRuckus.prototype.playback = function (obj) {
        var self = this;

        //console.log('clicked');

        var $attr = obj.attr('class');

        if ( $attr.indexOf('next') !== -1 ){
            self.View.currentFrame >= self.View.totalFrames ?
                self.View.currentFrame == self.View.totalFrames-1 :
                    self.View.currentFrame++;

        } else if ( $attr.indexOf('prev') !== -1 ){
            self.View.currentFrame <= 1 ?
                self.View.currentFrame == 1 :
                    self.View.currentFrame--;
        }
        //self.Model.$appContainer.trigger('refresh',['playback']);
        // console.log(self.View.currentFrame);
        // returning self: enables functions chaining
        return self;
    };

    EemjiiRuckus.prototype.toggleButtons = function () {
        var self = this;

        self.Model.$userOptions.on('click', function(){
            var $self       = $(this);
            var $parent     = $self.closest(self.Model.userOptionsGroup);
            var $dataType   = $parent.data('toggle-type');
            var dataName   = $self.data('option-name');

            var pairedFormInput = $("[data-name='" + dataName + "']");

            pairedFormInput.is(':checked') ?
                pairedFormInput.prop('checked', false) :
                    pairedFormInput.prop('checked', true);
            console.log(pairedFormInput);
            // Toggling the button on UI
            if ($dataType == 'checkbox') {
                $self.hasClass('toggled') ?         // Does this element have the '.toggled' class?
                    $self.removeClass('toggled') :  // TRUE: remove the '.toggled' class
                        $self.addClass('toggled');  // FALSE: add the '.toggled' class

            } else if ($dataType == 'radio') {
                $parent.children(self.Model.userOptions).removeClass('toggled');
                $self.addClass('toggled');
            }

            //self.Model.$appContainer.trigger('refresh',['toggle']);
            self.updateResult();
            self.setDeepLink();
        });
        // returning self: enables functions chaining
        return self;
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
