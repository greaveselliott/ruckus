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
                pageInfo:           [
                                    '',
                                    'How large is your business?',
                                    'What do you need Wi-Fi for?',
                                    'Your contact details',
                                    'Your solution'
                                    ],
                startingFrame: 1
            },
            view: {
                stage:              window,
                wrapper:            '.tile',
                container:          '.slide-container',
                frame:              '.slide',
                loadingBar:         '.loading',
                form:               '#ruckus-data',
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
                },
                solutionsTemplate: {
                    header:     'template-solution-header.html',
                    article:    'template-solution-article.html',
                    videos:     'template-solution-videos.html',
                    downloads:  'template-solution-downloads.html'
                },
                solutionTarget: {
                    header:     '.template-solution-header',
                    article:    '.template-solution-article',
                    videos:     '.template-solution-videos',
                    downloads:  '.template-solution-downloads'
                },
                solutionData: [
                    { // Small
                        article: [
                            {
                                articleText: "<p>Why do you think the right Wi-Fi so important even for a small business?</p><p>Because once you have it, you, and your customers, will come to rely on it even more in the future. </p><hr>"},
                            {
                                articleText: "<p>Even the smallest of stores need Wi-Fi today. It may be simply to build a hotspot for customers in a coffee shop, but it may be for something more sophisticated such as processing credit card transactions away from the till, or being able to check what stock is available in the back room. Whatever you needs, you need Wi-Fi that works, isn’t difficult to set up, and most importantly, is safe and secure for the user.</p><hr>"},
                            {
                                articleText: "<h5 class='ruckus-white'>Simply Smarter Wireless allows you to move and grow from;</h5><ul> <li>secure credit transactions from wireless terminals, and</li> <li>providing simple and secure customer hotspots, to</li> <li>digital signage showing promotions</li> <li>discrete video surveillance</li> <li>stock checking without leaving the customer</li></ul><hr>"},
                            {
                                articleText: "<p>For the smaller store, often a single access point in the back office is enough to provide coverage from front of store to back, and support tens of users, but sometimes you need to cover a couple of floors and two or more access points are required. With the right Wi-Fi, processing credit card transactions can easily be done in a PCI compliant way, and running more sophisticated things like shop video surveillance is easy</p><p>Remember…<br>…61 % of retailers say that their customers spend more time in store since they installed Wi-Fi (source /GR DeviceSpace 2014) and 50% spend more money. That’s why choosing the right Wi-Fi is so important.</p>"
                            }
                        ],
                        videos: [
                            {
                                videoURL: 'https://www.youtube.com/embed/_MpshIvZxx4'
                            }
                        ],
                        downloads:[
                            {
                                downloadName: 'Ruckus Wireless Best Practises',
                                downloadImage: 'images/solution-download-images.jpg',
                                downloadLink: 'http://a030f85c1e25003d7609-b98377aee968aad08453374eb1df3398.r40.cf2.rackcdn.com/wp/wp-wireless-best-practices.pdf'

                            }
                        ]
                    },
                    {   // medium
                        article: [
                            {
                                articleText: '<p>Lets imagine for a minute...<br>...a store where sales staff never leave a customer to check if something is in stock...</p><p>...or where they can order out-of-stock items for next day home delivery while standing at the display...</p><p>...or a store where customers don’t have to queue at a till to pay.</p><hr>'},{
                                articleText: '<p>All of this and more is possible now with Ruckus - From a single large store to hundreds of smaller boutiques across an entire country, Wi-Fi is the easiest way to connect customers and staff to the information they need to enable a sale.</p><p>Ruckus Wireless is a market leader in Wi-Fi for mid-market retailers. Our solutions are simple to deploy, sold and supported by a huge choice of specialist resellers, and uses the smartest technology to ensure the best connection across the whole sales floor and back office.</p><hr class="ruckus-orange">'},{
                                articleText: '<p>With Wi-Fi in store, staff can better service your customer’s better, and you can start thinking about how you can</p><ul> <li>Use location based services solutions - such as Ruckus SPoT™ - to review your footfall and see how people move around your store: <ul> <li>Change your window display and analyse how many more people come into the store than just walk past</li> <li>Match your highest margin products to the areas where your customers go most.</li> </ul> </li> <li>Reward loyal customers with target promotions – something that nearly ¾ of all customers say they are happy to receive</li> <li>Understand more about your demographics and how your store is used at different times and on different days of the week.</li></ul>'},{
                                articleText: '<blockquote>“Almost every new consumer product today has an embedded Wi-Fi capability. To effectively demonstrate and sell these products, customers want to actually see and understand how to use them in a live environment. The Ruckus system, with its integrated adaptive antenna array technology, is simply in a different league and has helped increase in-store sales” <cite class="ruckus-orange">Tim Pearce – Hughes Electrical (UK)</cite></blockquote>'
                            }
                        ],
                        videos: [
                            {
                                videoURL: 'https://www.youtube.com/embed/6DR2MguoDgQ'
                            },
                            {
                                videoURL: 'https://www.youtube.com/embed/_MpshIvZxx4'
                            }
                        ],
                        downloads:[
                            {
                                downloadName: 'Ruckus Wireless Best Practises',
                                downloadImage: 'images/solution-download-images.jpg',
                                downloadLink: 'http://a030f85c1e25003d7609-b98377aee968aad08453374eb1df3398.r40.cf2.rackcdn.com/wp/wp-wireless-best-practices.pdf'
                            }
                        ]
                    },
                    {   // large
                        article: [
                            {
                                articleText: '<p>Even the smallest of stores need Wi-Fi today.  It may be simply to build a hotspot for customers in a coffee shop, but it may be for something more sophisticated such as processing credit card transactions away from the till, or being able to check what stock is available in the back room. Whatever you needs, you need Wi-Fi that works, isn’t difficult to set up, and most importantly, is safe and secure for the user.</p><p>Why is choosing the right Wi-Fi so important even for a small business? Because once you have it, you, and your customers, will come to rely on it even more in the future.</p><hr>'},{
                                articleText: '<p>Simply Smarter Wireless allows you to move and grow from;</p><ul><li>secure credit transactions from wireless terminals, and</li><li>providing simple and secure customer hotspots, to</li><li>digital signage showing promotions</li><li>discrete video surveillance</li><li>stock checking without leaving the customer</li></ul><hr>'},{
                                articleText: '<p>For the smaller store, often a single access point in the back office is enough to provide coverage from front of store to back, and support tens of users, but sometimes you need to cover a couple of floors and two or more access points are required. With the right Wi-Fi ,processing credit card transactions can easily be done in a PCI compliant way, and running more sophisticated things like shop video surveillance is easy</p>'},{
                                articleText: '<p>Remember,  61 % of retailers say that their customers spend more time in store since they installed Wi-Fi (source /GR DeviceSpace 2014) and 50% spend more money. That’s why choosing the right Wi-Fi is so important.</p>'
                            }
                        ],
                        videos: [

                        ],
                        downloads:[
                            {
                                downloadName: 'Location: The New Battlefield',
                                downloadImage: 'images/solution-battlefield-images.jpg',
                                downloadLink: 'http://a030f85c1e25003d7609-b98377aee968aad08453374eb1df3398.r40.cf2.rackcdn.com/wp/wp-location-new-battlefield.pdf'
                            },
                            {
                                downloadName: 'PCI Compliance',
                                downloadImage: 'images/solution-smart-images.jpg',
                                downloadLink: 'http://a030f85c1e25003d7609-b98377aee968aad08453374eb1df3398.r40.cf2.rackcdn.com/wp/wp-smartsec-for-pci-compliance.pdf'
                            }
                        ]
                    }
                ]
            },
            controller: {
                navWrapper:         '.navigation',
                next:               '.ruckus-next',
                prev:               '.ruckus-prev',
                startButton:        '.ruckus-hub-start',
                formSubmitButton:   '.ruckus-form-submit'
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
            .buildNavigation()
            .setDeepLink()
            .onDeepLinkChange()
            .onSlideDataChange()
            .eventRefresh()
            .writeToDB();
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
            currentResult: 0,                                       // The result of the users answers
            timeAtCurrentLocation:  undefined,                      // The duration the user has spent at this location
            formData: {                                             // User form input data
                name:       undefined,                              // Users name
                email:      undefined,                              // Users email
                country:    undefined,                              // Users country
                telephone:  undefined                               // Users telephone
            },
            serializedData: undefined,                               // Serialized module data
            rootDir: self.options.model.rootDir,                    // Root directory (e.g. https://www.yourwebsite.com/)
            cookiesEnabled: {
                tracking: false
            },                                    // are cookies enabled?
            startingFrame: self.options.model.startingFrame,         // are cookies enabled?
            loadingActive: false,
            navigationActive: false,
            currentSlideValid: false
        };

        // returning self: enables functions chaining
        return self;
    };
    // Updating URL deep linking
    EemjiiRuckus.prototype.setDeepLink   = function (){
        var self = this;
        //var slug = self.Model.pageInfo[self.View.currentFrame].toLowerCase().replace(/ /g, '-');;

        //console.log('slug is: ' + slug);

        $.address.value(self.View.currentFrame);

        // returning self: enables functions chaining
        return self;
    };

    EemjiiRuckus.prototype.onDeepLinkChange = function () {
        var self = this;

        $.address.change(function(event) {
            self.View.currentFrame = $.address.value().slice(1);

            self.goToAndPlay(self.View.currentFrame);
            self.sendAnalytics(self.View.currentFrame);
            self.isSlideValid();
            self.setPageTitle( self.Model.pageInfo[self.View.currentFrame-1]);
        });
        // returning self: enables functions chaining
        return self;
    };

    // Set analytics
    EemjiiRuckus.prototype.setAnalytics = function () {
        var self = this;
        // EU Cookie Law - Has the user consented to tracking cookies?
        if(self.Model.cookiesEnabled.tracking) {
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-59686286-1', 'auto');
            ga('send', 'pageview');
        }
        // returning self: enables functions chaining
        return self;
    };
    // Tracking user interaction with Google analytics
    EemjiiRuckus.prototype.sendAnalytics  = function (currentFrame){
        var self = this;
        // EU Cookie Law - Has the user consented to tracking cookies?
        if(self.Model.cookiesEnabled.tracking) {
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
        }
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

    // toggling loading bar
    EemjiiRuckus.prototype.toggleLoadingBar = function () {
        var self = this;

        if (self.Model.loadingActive) {
            console.log('LOADING...');
            self.View.$loadingBar.removeClass('active').addClass('inactive');
            self.Model.loadingActive = false;
        } else {
            self.View.$loadingBar.removeClass('inactive').addClass('active');
            self.Model.loadingActive = true;
            console.log('LOADING COMPLETE');
        }

        return self;
    };

    // build navigation timeline

    EemjiiRuckus.prototype.buildNavigation = function () {
        var self = this;

        self.View.navTimeline = new TimelineMax();
        self.View.navTimeline.to(self.Controller.$navWrapper, 0.44,
            {
                bottom: '0px',
                opacity: 1,
                ease: Back.easeOut.config(1.7)
            });

        return self;
    };

    // toggle navigation
    EemjiiRuckus.prototype.toggleNavigation = function (toggle) {
        var self = this;

        if (toggle) {
            self.View.navTimeline.play();
            self.Model.navigationActive = true;

        } else {
            self.View.navTimeline.reverse();
            self.Model.navigationActive = false;
        }
       console.log('navigation active: '+ toggle);

        return self;
    };

    // Updating end result
    EemjiiRuckus.prototype.updateResult = function () {
        console.log('updating result');
        var self = this;
        // Header
        self.View.solutionTarget.$header.loadTemplate(  // loading template into $header
            self.options.view.solutionsTemplate.header, //
            {headerTitle: self.Model.userName + "'s Simply Better Wireless Solution"}
        );
        // Article
        self.View.solutionTarget.$article.loadTemplate( // loading template into $article
            self.options.view.solutionsTemplate.article,
            self.options.view.solutionData[self.Model.currentResult].article
        );
        // Videos
        self.View.solutionTarget.$videos.loadTemplate( // loading template into $videos
            self.options.view.solutionsTemplate.videos,
            self.options.view.solutionData[self.Model.currentResult].videos
        );
        // Downloads
        self.View.solutionTarget.$downloads.loadTemplate( // loading template into $downloads
            self.options.view.solutionsTemplate.downloads,
            self.options.view.solutionData[self.Model.currentResult].downloads
        );

        return self;
    };



    // Customer event: 'refresh' - refreshes Model data
    EemjiiRuckus.prototype.eventRefresh = function (){
        var self = this;

        self.Model.$appContainer.on('refresh', function(event, inputType){
            self.scale()

            .setBackground()
            .setBackgroundDimensions()
            .buildTimeLineSlide()
            .goToAndPlay(self.View.currentFrame);
            //switch ( inputType || self.Model.lastUsedInputType ) {
            //    case 'toggle' || 'form-input':
            //        //self.updateResult();
            //        //self.updateCookie();
            //        //self.sendAnalytics();
            //        break;
            //    case 'playback':
            //        self.scale()
            //
            //            .setBackground()
            //            .setBackgroundDimensions()
            //            .buildTimeLineSlide()
            //            .goToAndPlay(self.View.currentFrame);
            //        break;
            //    default:
            //        break;
            //}
            //self.Model.lastUsedInputType = inputType;
        });

        // returning self: enables functions chaining
        return self;
    };

    // update result
    EemjiiRuckus.prototype.currentResult = function (obj) {
        var self = this;
        var option = $(obj).data('name');

        switch (option) {
            case 'small':
                self.Model.currentResult = 0;
                break;
            case 'medium':
                self.Model.currentResult = 1;
                break;
            case 'large':
                self.Model.currentResult = 2;
                break;
            default:
                break;
        }
        console.log('The current result is ', self.Model.currentResult);
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
            $form:          $(self.options.view.form),
            frame:          self.options.view.frame,
            $frame:         $(self.options.view.frame),
            $loadingBar: $(self.options.view.loadingBar),
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
            backgroundSet: false,
            solutionTarget: {
                $header:    $(self.options.view.solutionTarget.header),
                $article:   $(self.options.view.solutionTarget.article),
                $videos:    $(self.options.view.solutionTarget.videos),
                $downloads: $(self.options.view.solutionTarget.downloads)
            }

        };
        // setting totalFrames - We cannot define this property
        // inside the above object, the jQuery selector METHOD doesn't
        // get processed till after All PROPERTIES have been processed
        // therefore calling .length on $frame returns undefined,
        // as the totalFrames gets called before the jQuery selector.
        self.Model.totalFrames    = self.View.$frame.length;

        // returning self: enables functions chaining
        return self;
    };

    EemjiiRuckus.prototype.setSlider = function () {
        var self = this;

        self.View.$stage.on('resize',function(){
            self.Model.$appContainer.trigger('refresh');
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
        self.View.containerWidth = self.View.stageWidth * self.Model.totalFrames;

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
            navWrapper: self.options.controller.navWrapper,
            $navWrapper: $(self.options.controller.navWrapper),
            next: self.options.controller.next,
            $next: $(self.options.controller.next),
            prev: self.options.controller.prev,
            $prev: $(self.options.controller.prev),
            startButton: self.options.controller.startButton,
            $startButton: $(self.options.controller.startButton),
            formSubmitButton: self.options.controller.formSubmitButton,
            $formSubmitButton: $(self.options.controller.formSubmitButton),
            $playback: $(self.options.controller.next + ","+self.options.controller.prev + ','+ self.options.controller.startButton)
        };

        self.eventPlayback(self.Controller.$playback, true);
        // returning self: enables functions chaining
        return self;
    };

    EemjiiRuckus.prototype.eventPlayback = function ($playback, toggle) {
        var self = this;

        if (toggle === true) { // if toggle == TRUE
            $playback.on('click', function (event) {

                self.playback($(this));
                self.setDeepLink();

            });
        } else if(toggle === false) { // if toggle == FALSE
            $playback.off('click','**');
        }


        // Form Complete Event - Not the greatest code, but meh...
        $(document).on('formSubmitted', function(){
            if (self.View.currentFrame >= self.Model.totalFrames ) {
                self.View.currentFrame = self.Model.totalFrames-1;
            } else {
                self.View.currentFrame++;
            }
            self.setDeepLink();
        });


        // returning self: enables functions chaining
        return self;
    };

    EemjiiRuckus.prototype.playback = function (obj) {
        var self = this;

        console.log('clicked');

        var $attr = obj.attr('class');

        if ( $attr.indexOf('next') !== -1 || $attr.indexOf('start') !== -1){
            if (self.View.currentFrame >= self.Model.totalFrames ) {
                self.View.currentFrame = self.Model.totalFrames-1;
            } else {
                self.View.currentFrame++;
            }
        } else if ( $attr.indexOf('prev') !== -1 ){
            if ( self.View.currentFrame <= self.Model.startingFrame ) {
                self.View.currentFrame = self.Model.startingFrame;
            } else {
                self.View.currentFrame--;
            }
        }

        console.log('The starting frame is: ' + self.View.startingFrame);
        console.log('The current frame is: ' + self.View.currentFrame);
        //self.Model.$appContainer.trigger('refresh',['playback']);
        // console.log(self.View.currentFrame);
        // returning self: enables functions chaining
        return self;
    };

    EemjiiRuckus.prototype.onSlideDataChange = function () {
        var self = this;
        $('fieldset.slide-data')
            .find('input, select, textarea')
            .change(function(){
                self.isSlideValid();
                self.currentResult(this);
            });

        return self;
    };

    EemjiiRuckus.prototype.isSlideValid = function () {
        var self = this;
        var currentSlide = $(self.View.frame).eq(self.View.currentFrame-1);
        var currentSlideName = currentSlide.data('slide');
        var $linkedSlide = $('#ruckus-data').find('[data-linked-slide="'+currentSlideName+'"]');
        var minRequired = $linkedSlide.find('[required]').length > 0 ? $linkedSlide.find('[required]').length : 1;
        var $elements = $linkedSlide.find('input, select, textarea');
        var currentValid = 0;

        $.each($elements, function(key, value) {
            var $thisElement = $(this);

            if ($thisElement.is(':checkbox, :radio')) {
                console.log('is checkbox or radio');
                if ($thisElement.prop('checked') ) {
                    currentValid++;
                }
            }
            //else {
            //    console.log('Not checkbox or radio');
            //    if ($thisElement[0].required && $thisElement.val() ) {
            //        currentValid++;
            //    }
            //}
        });

        self.Model.isCurrentSlideValid = minRequired <= currentValid;

        if (self.Model.isCurrentSlideValid) {
            self.toggleNavigation(true);
        } else {
            self.toggleNavigation(false);
        }
        return self;
    };

    EemjiiRuckus.prototype.writeToDB = function () {
        var self = this;

        $('#ruckus-data').submit(function(){
            console.log('CLICKED');
            var data = self.getFormData();

            // Save the users input name to the models object
            self.Model.userName = $(this).find('input.name').val();
            self.updateResult();
            self.toggleLoadingBar();

            $.ajax({
                type: 'POST',
                url: $('#ruckus-data').attr("action"),
                data: data
            }).done(function(){ // Required Callback Function
                console.log("success");
                $('#ruckus-data')[0].reset();

                // trigger form submit event
                $(document).trigger('formSubmitted');

            }).fail(function() {
                console.log("error writing to DB");
            })
            .always(function() {
                self.toggleLoadingBar();
            });

            return false;
        });

        return self;
    };

    EemjiiRuckus.prototype.getFormData = function () {
        return $('#ruckus-data').serializeArray();
    };

    EemjiiRuckus.prototype.toggleButtons = function () {
        var self = this;

        self.Model.$userOptions.on('click', function(){
            var $self       = $(this);
            var $parent     = $self.closest(self.Model.userOptionsGroup);
            var $dataType   = $parent.data('toggle-type');
            var dataName    = $self.data('option-name');
            var $siblings   = $self.siblings();

            var pairedFormInput = $("[data-name='" + dataName + "']");

            pairedFormInput.is(':checked') ?
                pairedFormInput.prop('checked', false).change() :
                    pairedFormInput.prop('checked', true).change();
            console.log('Paired form input: ' + pairedFormInput);

            // Toggling the button on UI
            if ($dataType == 'checkbox') {
                if ($self.hasClass('toggled') ) {         // Does this element have the '.toggled' class?
                    $self.removeClass('toggled');
                    console.log('Does the sibling have a class of toggled? ' + $siblings.hasClass('toggled'));
                    if (!$siblings.hasClass('toggled')) {
                        //self.toggleNavigation(false);
                    }
                } else {  // TRUE: remove the '.toggled' class
                    $self.addClass('toggled');
                    //self.toggleNavigation(true);
                }  // FALSE: add the '.toggled' class

            } else if ($dataType == 'radio') {
                $parent.children(self.Model.userOptions).removeClass('toggled');
                $self.addClass('toggled');
                //self.toggleNavigation(true);

            }

            if (self.Model.isCurrentSlideValid){
                //self.Model.$appContainer.trigger('refresh',['toggle']);
                //self.updateResult();
                self.setDeepLink();
            }
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
