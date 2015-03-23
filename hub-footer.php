<?php
/*
* Template: footer.php
* Project: ruckus hub
* Author: Elliott Matthew Greaves
* Author URL: http://www.elliottgreaves.com/
* Description: Includes the footer scripts and closing </html> tags.
*/
?>
    <!-- Loading Image -->
    <div class="loading inactive"></div>
    <!-- Tile background image -->
    <div class="tile_background-wrapper">
        <div class="tile_background-overlay"></div>
        <div class="tile_background-position">
            <div class="tile_background background_tile_1 inactive" data-activeOnSlide="1"></div>
            <div class="tile_background background_tile_2 inactive" data-activeOnSlide="2,3"></div>
            <div class="tile_background background_tile_3 inactive" data-activeOnSlide="4,5"></div>
        </div>
    </div>
</article>
<!-- Scripts: DO NOT DELETE -->
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="js/json-serialize.js"></script>
<script src="js/jquery-cookie/src/jquery.cookie.js"></script>
<script src="js/jquery.address-1.5.min.js"></script>
<script src="bower_components/foundation/js/foundation.min.js"></script>
<script src="bower_components/foundation/js/foundation/foundation.accordion.js"></script>
<script src="js/app.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.15.1/TweenMax.min.js"></script>
<script src="jquery-template/jquery-loadTemplate/jquery.loadTemplate-1.4.5.min.js"></script>
<script src="jquery.cookiebar/jquery.cookiebar.js"></script>
<script type="text/javascript">
    $(document).ready(function(){
        $.cookieBar({
        });
    });
</script>
<script src="accordion/js/jquery.accordion.js"></script>
<script src="accordion/js/jquery.easing.1.3.js"></script>
<script type="text/javascript">
    (function($){
        $('#st-accordion').accordion({
            oneOpenedItem	: true
        });
    })(jQuery);
</script>
<script src="Sharrre/jquery.sharrre.min.js"></script>
<script src="Sharrre/jquery.sharrre.config.js"></script>
<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script src="js/ruckus.js"></script>
<script src="js/ruckus.config.js"></script>
<script src="slick/slick/slick.min.js"></script>
<script src="slick/slick/slick.config.js"></script>
<script src="lightbox2/js/lightbox.min.js"></script>
</body>
</html>