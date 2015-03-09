
<?php

// Define your username and password
$username = "ruckus";
$password = "ruckus1!";

if ($_POST['txtUsername'] != $username || $_POST['txtPassword'] != $password) {

    ?>

    <h1>Login</h1>

    <form name="form" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <p><label for="txtUsername">Username:</label>
            <br /><input type="text" title="Enter your Username" name="txtUsername" /></p>

        <p><label for="txtpassword">Password:</label>
            <br /><input type="password" title="Enter your password" name="txtPassword" /></p>

        <p><input type="submit" name="Submit" value="Login" /></p>

    </form>

<?php

}
else {

    ?>

<?php
    /*
    * Template: entry-three.php
    * Project: ruckus hub
    * Author: Elliott Matthew Greaves
    * Author URL: http://www.elliottgreaves.com/
    * Description: Template file for entry point 1.
    */

    require_once('header.php');
?>
<body id="entry-3">
    <header class="hide"><h1>Ruckus | Simply Better Wireless</h1></header>
    <section class="full-screen home ruckus-tile" data-magellan-destination="home" id="entry-3-landing-page">
        <div class="row valign-middle">
            <div class="large-12 columns">
                <div class="table-center-container">
                    <div class="table-center-cell">
                        <img src="images/ruckus-logo-big.png">
                        <h3 class="ruckus-white h4-small-only"><span class="font-scale-x2-medium-up">The Simply Better Guide <br>to Retail Technology</span></h3>
                        <hr>
                        <h5 class="ruckus-orange h3 h5-small-only text-left text-center">This guide highlights some of the biggest and most important changes happening in retail technology today.</h5>
                        <div class="display-inline-block padding-50">
                            <div class="button round-icon chevron-down no-hover"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ruckus-entry-3_background background-1 lazy-load" data-original="images/guide/guide-background-00.jpg" style="background-color: #000;"></div>
    </section>
<!--#0: Wi-Fi in retail -->
<article class="row full-screen ruckus-tile" id="retail-wifi" data-cta="Get the right Wi-Fi – Specify your wireless needs">
    <div class="large-12 columns">
        <div class="row ruckus-background-black opacity-75 no-padding-left-small-only no-padding-right-small-only">
            <div class="large-12 columns margin-bottom-20 ruckus-background-black">
                <h2 class="ruckus-white text-left h3 h4-small-only">In-store Wi-Fi means customers stay longer and spend more</h2>
            </div>
        </div>
        <div class="row ruckus-background-black opacity-75">
            <!-- Network stability and bandwidth -->
            <div class="large-6 columns margin-bottom-20-small-only">
                <figure class="row wifi-retail-fact ruckus-background-black opacity-75 padding-bottom-20-small-only">
                        <span class="large-4 medium-4 columns">
                            <span class="table-center-container">
                                <span class="table-center-cell ruckus-white">
                                    <span class="h0 h3-small-only">61%</span>
                                </span>
                            </span>
                        </span>
                        <span class="large-4 medium-4 columns">
                             <span class="table-center-container">
                                <span class="table-center-cell text-left ruckus-white h5">
                                     of retailers say that their customers spend more time in store since they installed  <span class="display-inline-block">Wi-Fi</span></span>
                            </span>
                        </span>
                    <span class="large-4 medium-4 columns"><img class="lazy-load left hide-for-small" data-original="images/guide/icons-17.png"></span>
                    <span class="clear-both"></span>
                </figure>
                <br>
                <figure class="row wifi-retail-fact ruckus-background-white opacity-75 padding-bottom-20-small-only">
                        <span class="ruckus-orange large-4 medium-4 columns">
                            <span class="table-center-container">
                                <span class="table-center-cell">
                                    <span class="h0 h3-small-only">50%</span>
                                </span>
                            </span>
                        </span>
                        <span class="large-4 medium-4 columns">
                            <span class="table-center-container">
                                <span class="table-center-cell text-left h5">
                                    of retailers say that their customers spend more money since they installed <span class="display-inline-block">Wi-Fi</span>
                                </span>
                            </span>
                        </span>
                        <span class="large-4 medium-4 columns hide-for-small">
                            <img class="lazy-load" data-original="images/guide/icons-18.png"></span>
                </figure>
            </div>
            <!-- How people feel when there's no Wi-Fi in a business premises -->
            <div class="large-6 columns no-padding-left-small-only no-padding-right-small-only hide-for-small">
                <figure class="ruckus-background-black opacity-75 padding-25">
                                        <figcaption class="ruckus-white text-left h4 text-center-small-only">What are consumers using Wi-Fi for in-store? </figcaption>
                    <img class="lazy-load" data-original="images/guide/icons-34.png">
                </figure>
            </div>
        </div>
    </div>
    <div class="ruckus-entry-3_background background-9 lazy-load" data-original="images/guide/guide-background-09.jpg" style="background-color: #000;"></div>
</article>

    <!--#1: Mobile Momentum -->
    <article class="row full-screen ruckus-tile" id="mobile-momentum" data-cta="Get the right wireless to keep moving"><!-- fullscreen background? -->
        <div class="large-12 columns">
            <div class="row ruckus-background-black">

                <div class="large-12 columns">
                    <h2 class="ruckus-white h3 h4-small-only">Mobile will continue to grow in every part of the shopper journey<span class="hide-for-small">, with smartphones and tablets playing an increasingly larger role</span></h2>
                </div>

            </div>
            <div class="row data-equalizer padding-top-20-small-only">
                <!-- White smart phone with text overlay -->
                <!-- Retail - top 3 tech trends for retailers -->
                <section class="large-6 medium-6 columns data-equalizer-watch padding-50">
                    <div class="row">
                        <div class="large-12 columns">
                            <h4 class="ruckus-white">In a recent survey of retailers the top three tech trends are</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="large-12 columns padding-bottom-20-small-only">
                            <figure class="padding-25 no-padding-small-only">
                                <span class="mm-icons padding-right-20 hide-for-small">
                                    <span class="table-center-container">
                                        <span class="table-center-cell">
                                            <i class="fa fa-mobile ruckus-orange h1 display-inline-block"></i>
                                        </span>
                                    </span>
                                </span>
                                <figcaption class="text-left">
                                    <span class="ruckus-white h4 line-height-h4 h5-small-only">Investment in mobility</span>
                                    <br>
                                    <span class="h6 ruckus-orange line-height-h6">most conversation centered on the shift from fixed to mobile Point of Sale (POS).</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="row">
                        <div class="large-12 columns padding-bottom-20-small-only">
                            <figure class="padding-25 padding-right-20 no-padding-small-only">
                                 <span class="mm-icons hide-for-small">
                                     <span class="table-center-container">
                                         <span class="table-center-cell">
                                             <i class="fa fa-shopping-cart ruckus-orange h1 display-inline-block"></i>
                                         </span>
                                     </span>
                                 </span>
                                <figcaption class="text-left">
                                    <span class="ruckus-white h4 line-height-h4 h5-small-only">Retail Technology Solution</span>
                                    <br>
                                    <span class="h6 ruckus-orange line-height-h6">The most popular topics in this category were RFID and beacon technology</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="row">
                        <div class="large-12 columns padding-bottom-20-small-only">
                            <figure class="padding-25 padding-right-20 no-padding-small-only">
                                <span class="mm-icons hide-for-small">
                                    <span class="table-center-container">
                                        <span class="table-center-cell">
                                            <i class="fa fa-globe ruckus-orange h1 display-inline-block line-height-h1"></i>
                                        </span>
                                    </span>
                                </span>
                                <figcaption class="text-left">
                                    <span class="ruckus-white h4 line-height-h4 h5-small-only">Global e-commerce</span>
                                    <br>
                                    <span class="h6 ruckus-orange line-height-h6">As companies seek to grow their retail footprint, the need for a global e-commerce framework arises as a top concern</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="ruckus-entry-3_background ruckus-background-black opacity-75 height-100"></div>
                </section>
                <section class="large-6 medium-6 columns data-equalizer-watch">
                    <h3 class="hide">Keep up moving with mobile</h3>
                    <div class="table-center-container">
                        <div class="table-center-cell">
                            <figure class="mobile-with-text" id="keep-up-moving">
                                <img src="images/guide/icons-11.png" alt="White touch screen SmartPhone - vector icon" style="height: 386px; width: 224px;">
                                <figcaption>
                                    <!--                                    <span class="ruckus-orange">Keep up moving with mobile</span><br>-->
                                    <span class="ruckus-white">The ‘Black Friday’ bargains (Nov 2014) saw the biggest-ever sales week in the history of leading UK retailer John Lewis. On- the-go, or just in bed, users with smart devices delivered up to 70% of traffic between midnight and 8am.</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>
            </div>

            </div>

        <div class="ruckus-entry-3_background background-1 lazy-load" data-original="images/guide/guide-background-01.jpg" style="background-color: #000;"></div>
        </article>
    <!--#2: Mobile Payment -->
    <article class="row full-screen ruckus-tile" id="mobile-payment" data-cta="Get the wireless that pays its way">
        <div class="large-12 columns">
        <div class="row ruckus-background-black">
            <div class="large-12 columns ">
                <h2 class="h3 ruckus-white h4-small-only">Mobile Payments aren’t just convenient for consumers, they deliver huge benefits for retailers too
                </h2>
            </div>
        </div>
        <!-- Info-graphics -->
        <div class="row ruckus-background-black opacity-75 " data-equalizer>
            <div class="large-3 medium-3 columns" data-equalizer-watch>
                <!-- Contactless is more -->
                <figure class="padding-25 no-padding-small-only margin-bottom-20-small-only">
                    <img class="lazy-load hide-for-small" data-original="images/guide/icons-08.png">
                    <figcaption>
                        <span class="ruckus-orange h4">Contactless is more</span>
                        <br>
                        <span class="ruckus-white">25% of Western European mobile users will pay for goods in-store using their NFC-enabled phone by 2017</span>
                    </figcaption>
                </figure>
            </div>
            <div class="large-3 medium-3 columns ruckus-background-black ruckus-background-transparent-small-only" data-equalizer-watch>
                <!-- Create win-win-win -->
                <figure class="padding-25 no-padding-small-only margin-bottom-20-small-only">
                    <img class="lazy-load hide-for-small" data-original="images/guide/icons-09.png">
                    <figcaption>
                        <span class="ruckus-orange h4">Create win-win-win</span>
                        <br>
                        <span class="ruckus-white">Payments that replace cash and credit cards not only increase customer convenience - but improve sales processing efficiency for retailers and can help reduce fraud</span>
                    </figcaption>
                </figure>
            </div>
            <div class="large-3 medium-3 columns " data-equalizer-watch>
                <!-- Scrap the paper -->
                <figure class="padding-25 no-padding-small-only margin-bottom-20-small-only">
                    <img class="lazy-load hide-for-small" data-original="images/guide/icons-10.png">
                    <figcaption>
                        <span class="ruckus-orange h4">Scrap the paper</span>
                        <br>
                        <span class="ruckus-white">Replacing paper-based coupons and vouchers with mobile alternatives - which integrate into existing loyalty schemes, can lead to higher conversion rates</span>
                    </figcaption>
                </figure>
            </div>
            <div class="large-3 medium-3 columns ruckus-background-orange opacity-75 ruckus-background-transparent-small-only" data-equalizer-watch>
                <!-- mCommerce = massive Commerce -->


                    <div class="table-center-container">
                        <div class="table-center-cell">
                            <figure class="mobile-with-text" id="keep-up-moving">
                                <img class="lazy-load" data-original="images/guide/icons-11.png" alt="White touch screen SmartPhone - vector icon">
                                <figcaption>
                                    <span class="ruckus-orange h3">€19.2B</span>
                                    <br>
                                    <span class="ruckus-orange">mCommerce = massive Commerce</span><br>
                                    <span class="ruckus-white">European mCommerce revenues are set to rise from €1.7b in 2011 to €19.2b in 2017</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>

            </div>
        </div>
            </div>
        <div class="ruckus-entry-3_background background-3 lazy-load" data-original="images/guide/guide-background-03.jpg" style="background-color: #000;"></div>
    </article>
    <!--#3: POS Technology -->
    <article class="row full-screen ruckus-tile" id="pos-technology" data-cta="Specify your PCI compliant wireless needs">
        <div class="large-12 columns">
        <div class="row ruckus-background-black">
            <div class="large-12 columns ">
                <h2 class="ruckus-white h3 h4-small-only">POS technology is changing quickly – Is your POS ready for the revolution? </h2>
            </div>
        </div>
        <!-- Info-graphics -->
        <div class="row" data-equalizer>
            <div class="large-3 medium-3 columns ruckus-background-orange opacity-75 " data-equalizer-watch>
                <!-- mPos - not an imposter -->
                <figure class="padding-50 padding-bottom-20-small-only padding-top-20-small-only">
                    <img class="lazy-load hide-for-small" data-original="images/guide/icons-04.png">
                    <figcaption>
                        <span class="ruckus-black h4">mPos - not an imposter</span>
                        <br>
                        <span class="ruckus-white">mPos is the real deal: by 2017,  an estimated 50% of all transactions will be completed by mPOS, self checkout at a counter or on a shopper’s mobile device</span>
                    </figcaption>
                </figure>
            </div>
            <div class="large-3 medium-3 columns ruckus-background-black opacity-75 " data-equalizer-watch>
                <!-- The virtues of virtual -->
                <figure class="padding-50 padding-bottom-20-small-only padding-top-20-small-only">
                    <img class="lazy-load hide-for-small" data-original="images/guide/icons-05.png" data-class="hide-for-small">
                    <figcaption>
                        <span class="ruckus-orange h4">The virtues of virtual</span>
                        <br>
                        <span class="ruckus-white">Digital wallets offer the potential to get rid of cards and cash altogether, allowing users to store a virtual version of almost everything they need</span>
                    </figcaption>
                </figure>
            </div>
            <div class="large-3 medium-3 columns ruckus-background-orange opacity-75 " data-equalizer-watch>
                <!-- Create win-win-win -->
                <figure class="padding-50 padding-bottom-20-small-only padding-top-20-small-only">
                    <img class="lazy-load hide-for-small" data-original="images/guide/icons-07.png">
                    <figcaption>
                        <span class="ruckus-black h4">Easy does it</span>
                        <br>
                        <span class="ruckus-white">93% of people say contactless payments are “quick” and “efficient”</span>
                    </figcaption>
                </figure>
            </div>
            <div class="large-3 medium-3 columns ruckus-background-black opacity-75 " data-equalizer-watch>
                <!-- Scrap the paper -->
                <figure class="padding-50 padding-bottom-20-small-only padding-top-20-small-only">
                    <img class="lazy-load hide-for-small" data-original="images/guide/icons-06.png">
                    <figcaption>
                        <span class="ruckus-orange h4">Getting to the Point</span>
                        <br>
                        <span class="ruckus-white">44% of retailers are updating their POS strategies to take advantage of technology</span>
                    </figcaption>
                </figure>
            </div>
        </div>
        </div>
        <div class="ruckus-entry-3_background background-4 lazy-load" data-original="images/guide/guide-background-04.jpg" style="background-color: #000;"></div>
    </article>
    <!--#4: Omnichannel Omnipetence? -->
    <article class="row full-screen ruckus-tile" id="omnichannel-omnipetence" data-cta="Get seamless wireless here to serve your needs">
        <div class="large-12 columns ">
            <div class="row ruckus-background-black">
                <div class="large-12 columns">
                    <h2 class="ruckus-white h3 h4-small-only">Retailers embracing an omnichannel approach will be best placed to succeed</h2>
                </div>
            </div>
            <!-- Facts: Percentage Data -->
            <div class="row" data-equalizer>
                <div class="large-2 columns ruckus-background-orange opacity-75 " data-equalizer-watch>
                    <!-- Text with Semi-Transparent Orange background -->

                        <span class="table-center-container">
                            <span class="table-center-cell">
                                    <span class="ruckus-white"><span class="h5">The path to purchase for customers is becoming increasingly blurred.
</span><br><br><span class="h4">Your customers now…</span></span>
                            </span>
                        </span>
                </div>
                <div class="large-2 columns ruckus-background-black opacity-75 padding-bottom-20 padding-top-20-small-only"" data-equalizer-watch>
                    <!-- Check prices -->
                    <figure class="circular-fact">
                        <img class="lazy-load hide-for-small" data-original="images/guide/icons-21.png">
                        <figcaption class="ruckus-white">
                            <span class="hide show-for-small h4-small-only">49%</span>Check prices on mobile devices while in-store
                        </figcaption>
                    </figure>
                </div>
                <div class="large-2 columns ruckus-background-black opacity-75 padding-bottom-20" data-equalizer-watch>
                    <!-- Research product -->
                    <figure class="circular-fact">
                        <img class="lazy-load hide-for-small" data-original="images/guide/icons-22.png">
                        <figcaption class="ruckus-white">
                            <span class="hide show-for-small h4-small-only">44%</span>Research products before buying
                        </figcaption>
                    </figure>
                </div>
                <div class="large-2 columns ruckus-background-black opacity-75 padding-bottom-20" data-equalizer-watch>
                    <!-- Look at product reviews -->
                    <figure class="circular-fact">
                        <img class="lazy-load hide-for-small" data-original="images/guide/icons-23.png">
                        <figcaption class="ruckus-white">
                            <span class="hide show-for-small h4-small-only">35%</span>Check product reviews
                        </figcaption>
                    </figure>
                </div>
                <div class="large-2 columns ruckus-background-black opacity-75 padding-bottom-20" data-equalizer-watch>
                    <!-- Create win-win-win -->
                    <figure class="circular-fact">
                        <img class="lazy-load hide-for-small" data-original="images/guide/icons-24.png">
                        <figcaption class="ruckus-white">
                            <span class="hide show-for-small h4-small-only">30%</span>Have bought online
                        </figcaption>
                    </figure>
                </div>
                <div class="large-2 columns ruckus-background-black opacity-75 padding-bottom-20" data-equalizer-watch>
                    <!-- Create win-win-win -->
                    <figure class="circular-fact">
                        <img class="lazy-load hide-for-small" data-original="images/guide/icons-25.png">
                        <figcaption class="ruckus-white">
                            <span class="hide show-for-small h4-small-only">45%</span>Want ability to check stock level availability on their mobile
                        </figcaption>
                    </figure>
                </div>
            </div>
            <!-- Footer information: Semi-transparent black background -->
            <div class="row ruckus-background-black" data-equalizer>
                <div class="large-2 columns" data-equalizer-watch>
                    <figure class="padding-25 hide-for-small"><img class="lazy-load" data-original="images/guide/Icons-30.png"><figcaption class="ruckus-orange">Click & Collect</figcaption></figure>
                </div>
                <div class="large-6 columns" data-equalizer-watch>
                    <div class="table-center-container height-100">
                        <div class="table-center-cell">
                            <h4 class="ruckus-orange">Online marches onward </h4>
                            <p class="ruckus-white">In the 2014 holiday period, John Lewis - a leading UK 'bricks-and-clicks' retailer recorded a 19% increase in online sales, boosting the online share of their total sales to 36%.</p>
                        </div>
                    </div>
                </div>
                <div class="large-4 columns" data-equalizer-watch>
                    <div class="table-center-container height-100">
                        <div class="table-center-cell">
                            <h4 class="ruckus-orange">Click-and-collect delivers</h4>
                            <p class="ruckus-white">US retailer Macy's found that when using its click-and-collect service customers spent 25% more of their intended order.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ruckus-entry-3_background background-5 lazy-load" data-original="images/guide/guide-background-05.jpg" style="background-color: #000;"></div>
    </article>
    <!--#5: Loyalty Learnings -->
    <article class="row full-screen ruckus-background-black opacity-75 ruckus-tile" id="loyalty-learnings" data-cta="Reward your customers with the best wireless">
        <div class="large-12 columns">
            <div class="row ruckus-background-black">
                <div class="large-12 columns">
                    <h2 class="ruckus-white h3 h4-small-only">Leading loyalty programs will be driven by apps that let customers track and redeem their rewards via their smartphone</h2>
                </div>
            </div>
            <!-- Artwork -->
            <div class="row" data-equalizer>
                <!-- A rewarding future -->
                <div class="large-4 columns " data-equalizer-watch>
                    <figure class="padding-50">
                        <img class="lazy-load hide-for-small" data-original="images/guide/icons-12.png">
                        <figcaption>
                            <span class="ruckus-orange h4">A rewarding future</span>
                            <br>
                            <span class="ruckus-white">Retailers will need to expand their loyalty program outside of the store. Incentives should go beyond purchases and reward customers for their actions and engagments</span>
                        </figcaption>
                    </figure>
                </div>
                <!-- Many appy returns -->
                <div class="large-4 columns ruckus-background-black " data-equalizer-watch>
                    <div class="table-center-container">
                        <div class="table-center-cell">
                            <figure class="mobile-with-text" id="many-appy-returns">
                                <img class="lazy-load" data-original="images/guide/icons-11.png" alt="White touch screen SmartPhone - vector icon">
                                <figcaption>
                                    <span class="ruckus-orange">Many appy returns</span>
                                    <img class="lazy-load" data-original="images/guide/icons-19.png" width="100px" height="100px" alt="73%"><br>
                                    <span class="ruckus-white">of smartphone users are very likely to download a loyalty app</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <!-- The age of engagement -->
                <div class="large-4 columns " data-equalizer-watch>
                    <figure class="padding-50 padding-bottom-20-small-only">
                        <img class="lazy-load hide-for-small" data-original="images/guide/icons-13.png">
                        <figcaption><span class="ruckus-orange h4">The age of engagement</span><br><span class="ruckus-white">92% of shoppers engage with a loyalty scheme at least once a month</span></figcaption>
                    </figure>
                </div>
            </div>
        </div>
        <div class="ruckus-entry-3_background background-6 lazy-load" data-original="images/guide/guide-background-06.jpg" style="background-color: #000;"></div>
    </article>
    <!--#6: Social Shopping -->
    <article class="row full-screen ruckus-tile" id="social-shopping" data-cta="Get the right wireless to engage with your customers">
        <div class="large-12 columns">
            <div class="row ruckus-background-black">
                <div class="large-12 columns">
                    <h2 class="ruckus-white h3 h4-small-only">Social media lets retail brands engage directly with customers</h2>
                </div>
            </div>
            <!-- Artwork -->
            <div class="row" data-equalizer>
                <!-- Social shopping stats -->
                <div class="large-3 columns ruckus-background-black" data-equalizer-watch id="social-shopping-stats">
                    <div class="table-center-container">
                        <div class="table-center-cell text-left">
                            <h4 class="ruckus-orange">Social Shopping Stats</h4>
                            <h5 class="ruckus-white margin-bottom-20">Using social media consumers have:</h5>

                            <div class="row ruckus-white collapse">
                                <div class="large-2 columns hide-for-small"><i class="fa fa-comments ruckus-orange h3"></i></div>
                                <div class="large-8 columns line-height-h3 text-left"><span class="hide show-for-small display-inline">52%</span> Interacted with brands</div>
                                <div class="large-2 columns line-height-h3 text-left hide-for-small"><span>52%</span></div>
                            </div>
                            <div class="row ruckus-white collapse padding-top-10">
                                <div class="large-2 columns hide-for-small"><i class="fa fa-comment ruckus-orange h3"></i></div>
                                <div class="large-8 columns line-height-h3 text-left"><span class="hide show-for-small display-inline">55%</span> Shared their experience</div>
                                <div class="large-2 columns line-height-h3 text-left hide-for-small"><span>55%</span></div>
                            </div>
                            <div class="row ruckus-white collapse padding-top-10">
                                <div class="large-2 columns hide-for-small"><i class="fa fa-eye ruckus-orange h3"></i></div>
                                <div class="large-8 columns line-height-h3 text-left"><span class="hide show-for-small display-inline">58%</span> Discovered brands</div>
                                <div class="large-2 columns line-height-h3 text-left hide-for-small"><span>58%</span></div>
                            </div>
                            <div class="row ruckus-white collapse padding-top-10">
                                <div class="large-2 columns hide-for-small"><i class="fa fa-search ruckus-orange h3"></i></div>
                                <div class="large-8 columns line-height-h3 text-left"> <span class="hide show-for-small display-inline">59%</span> Researched a brand</div>
                                <div class="large-2 columns line-height-h3 text-left hide-for-small"><span>59%</span></div>
                            </div>
                            <div class="row ruckus-white collapse padding-top-10">
                                <div class="large-2 columns hide-for-small"><i class="fa fa-shopping-cart ruckus-orange h3"></i></div>
                                <div class="large-8 columns line-height-h3 text-left"><span class="hide show-for-small display-inline">48%</span> Bought products</div>
                                <div class="large-2 columns line-height-h3 text-left"><span class="hide-for-small">48%</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Referring is occurring / wr trust 'our' networks -->
                <div class="large-3 columns ruckus-background-orange opacity-75 " data-equalizer-watch>
                    <figure class="padding-50 padding-bottom-20-small-only">
                        <img class="lazy-load hide-for-small" data-original="images/guide/icons-14.png">
                        <figcaption>
                            <span class="ruckus-black h4">Referring is occurring</span>
                            <br>
                            <span class="ruckus-white">71% of consumers are likely to make a purchase based on social media referrals</span></figcaption></figure>
                </div>
                <div class="large-3 columns ruckus-background-black opacity-75 " data-equalizer-watch>
                    <figure class="padding-50 padding-bottom-20-small-only"><img class="lazy-load hide-for-small" data-original="images/guide/icons-15.png">
                        <figcaption>
                            <span class="ruckus-orange h4">We trust 'our' networks</span>
                            <br>
                            <span class="ruckus-white">77% of consumers trust product suggestions from friends and family</span>
                        </figcaption>
                    </figure>
                </div>
                <div class="large-3 columns ruckus-background-black opacity-75 " data-equalizer-watch>
                    <div class="table-center-container">
                        <div class="table-center-cell">
                            <figure class="mobile-with-text" id="vocal-over-social">
                                <img class="lazy-load" data-original="images/guide/icons-11.png" alt="White touch screen SmartPhone - vector icon">
                                <figcaption>
                                    <span class="ruckus-orange h5">Vocal over social</span>
                                    <br>
                                    <span class="ruckus-orange h2">32%</span>
                                    <br>
                                    <span class="ruckus-white">of smartphone users use social media to comment on their shopping experiences</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
<!--        </div>-->
            <div class="ruckus-entry-3_background background-7 lazy-load" data-original="images/guide/guide-background-07.jpg" style="background-color: #000;"></div>
    </article>
    <!--#7: Big Data -->
    <article class="row full-screen ruckus-tile" id="big-data" data-cta="Specify your wireless needs to make the most of Big Data">
        <div class="large-12 columns">
            <div class="row ruckus-background-black">
                <div class="large-12 columns">
                    <h2 class="ruckus-white h3 h4-small-only">Harnessing the power of big data will give retailers big advantages</h2>
                </div>
            </div>
            <div class="row">
                <div class="large-12 columns ruckus-background-orange opacity-75">
                    <h3 class="h3_5 ruckus-black">Of the retailers surveyed:</h3>
                </div>
            </div>
            <!-- Artwork -->
            <div class="row" data-equalizer>
                <!-- Social shopping stats -->
                <div class="large-4 columns ruckus-background-black opacity-75 " data-equalizer-watch>
                    <figure class="padding-50 padding-bottom-20-small-only"><img class="lazy-load hide-for-small" data-original="images/guide/icons-03.png">
                        <figcaption>
                            <span class="ruckus-orange h4">Full of 'next' appeal</span>
                            <br>
                            <span class="ruckus-white">52% say big data has enabled them to expand their sales by offering customers the 'next' logical item</span>
                        </figcaption></figure>
                </div>
                <!-- Referring is occurring / wr trust 'our' networks -->
                <div class="large-4 columns ruckus-background-orange opacity-75 " data-equalizer-watch>
                    <figure class="padding-50 padding-bottom-20-small-only">
                        <div class="table-center-container"><div class="table-center-cell">
                        <img class="lazy-load hide-for-small" data-original="images/guide/icons-31.png">
                        <figcaption>
                            <span class="ruckus-black h4">Feel the gain</span>
                            <br>
                            <span class="ruckus-white">64% of retailers have made financial gain in customer relationship management through big data</span>
                        </figcaption>
                    </figure>
                </div>
                <div class="large-4 columns ruckus-background-black opacity-75 " data-equalizer-watch>
                    <figure class="padding-50 padding-bottom-20-small-only">
                        <img class="lazy-load hide-for-small" data-original="images/guide/icons-36.png">
                        <figcaption>
                            <span class="ruckus-orange h4">Data pays in many ways</span>
                            <br>
                            <span class="ruckus-white">52% say data has made multichannel customer tracking and management more profitable</span>
                        </figcaption>
                    </figure>.
                </div>
            </div>
        </div>
        <div class="ruckus-entry-3_background background-8 lazy-load" data-original="images/guide/guide-background-08.jpg" style="background-color: #000;"></div>
    </article>
    <!--    <footer>-->
<!--    </footer>-->
    <div id="hub-link" class="hide-for-small">
        <a href="index.php" target="_blank" class="padding-25 display-block">
            <p id="CTA-text" class="h5 text-center">Select your own wireless needs</p>
            <p class="button alt no-margin-bottom">GO</p>
        </a>
    </div>

    <footer id="appendix" class="row full-screen ruckus-background-black">
            <div class="row">
                <div class="large-12 columns">
                    <h2>Sources</h2>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="large-12 columns">
                    <p>http://www.vendhq.com/university/retail-trends-and-predictions-2015</p>
                    <p>http://scn.sap.com/community/retail/blog/2015/01/22/a-recap-of-nrf15-complex-retail-trends-one-simple-question</p>
                    <p>https://nrf.com/news/theory-practice</p>
                    <p>http://www.chasepaymentech.co.uk/documents/m_commerce_five_myths.pdf</p>
                    <p>http://www.slideshare.net/Ikusmer/mobile-economy-20132018</p>
                    <p>http://gsma.com/newsroom/wp-content/uploads/2013/12/GSMA_ME_Europe_Report_2013.pdf</p>
                    <p>http://www.anywhichway.worldpay.com/track/download/123</p>
                    <p>https://www.zebra.com/content/dam/zebra/white-papers/en-us/motorola-whitepaper-zc-en-us.pdf</p>
                    <p>http://www.signalmind.com/infographics/point-of-sale</p>
                    <p>http://info.arqiva.com/wireless-nation</p>
                    <p>http://www.independent.co.uk/news/business/news/john-lewis-click-and-collect-service-overtakes-home-delivery-as-online-sales-grow-19-9957229.html</p>
                    <p>http://www.maritzmotivation.com/~/media/Files/MaritzMotivationSolutions/Product-Sheets/Maritz-Loyalty-Marketing_Loyalty-Report-US---Summary-of-Key-Insights.pdf</p>
                    <p>http://www.digitalinformationworld.com/2014/01/social-media-influence-on-purchase-decisions-infographic.html</p>
                </div>
            </div>
    </footer>
</body>
<?php
    require_once('footer-entry-3.php');
?>
<?php

}

?>