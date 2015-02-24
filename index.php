<?php
    /*
    * Template: index.php
    * Project: ruckus hub
    * Author: Elliott Matthew Greaves
    * Author URL: http://www.elliottgreaves.com/
    * Description: Template file for entry point 1.
    */
    require_once 'header.php'
?>
  <body class="appContainer">
      <div class="absolute top width-100 header">
        <div class="row padding-top-10">
            <div class="large-12 columns">
                <ul class="large-block-grid-2 medium-block-grid-2 small-block-grid-2">
                    <li>
                    <header class="left">
                        <img src="images/ruckus-logo.png" alt="Ruckus Logo" class="logo">
                        <h1 class="hide">Ruckus</h1>
                    </header>
                    </li>
                    <li>
                    <nav id="social-media-links">
                        <div class="clearfix">
                            <ul class="right small">
                                <li><a class="icon_facebook" href="#" title="Like us on Facebook"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="icon_twitter" href="#" title="Follow us on Twitter"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="icon_google" href="#" title="Follow us on Google+"><i class="fa fa-google-plus"></i></a></li>
                                <li><a class="icon_linked-in" href="#" title="Follow our Linked-in page"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </nav>
                    </li>
                </ul>
            </div>
            <div class="large-6 columns">

            </div>
        </div>
      </div>
      <!-- Web App Wrapper -->
      <article class="tile">
          <div class="slide-container">
          <!-- Tile 1: Simply Better Wireless -->
<!--          <section class="stage-1 slide">-->
<!--             <!-- Centering the content  -->
<!--             <div class="row valign-middle tile-content">-->
<!--                <div class="large-12 columns">-->
<!--                    <!-- Heading text -->
<!--                    <div class="row collapse">-->
<!--                        <div class="large-7 columns large-centered">-->
<!--                            <h2 class="ruckus-orange text-center">Simply Better Wireless.</h2>-->
<!--                            <h3 class="ruckus-white text-center">Choose your sector for a simply better solution</h3>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <!-- Selection of options -->
<!--                    <div class="row collapse padding-top-10">-->
<!--                        <nav>-->
<!--                            <!-- Options -->
<!--                                <ul class="large-block-grid-5 medium-block-grid-3 small-block-grid-2 ruckus-option-group"  data-toggle-type="radio">-->
<!--                                    <li data-option-name="retail" class="ruckus-option"><span class="button width-100 height-100 alt" >Retail</span></li>-->
<!--                                    <li data-option-name="leisure" class="ruckus-option"><span class="button width-100 height-100 alt">Leisure</span></li>-->
<!--                                    <li data-option-name="hospitality" class="ruckus-option"><span class="button width-100 height-100 alt">Hospitality</span></li>-->
<!--                                    <li data-option-name="transport" class="ruckus-option"><span class="button width-100 height-100 alt">Transport</span></li>-->
<!--                                    <li data-option-name="open space" class="ruckus-option"><span class="button width-100 height-100 alt">Open Space</span></li>-->
<!--                                </ul>-->
<!--                        </nav>-->
<!--                    </div>-->
<!--                    <!-- Next button -->
<!--                    <div class="row">-->
<!--                        <div class="large-4 columns large-centered">-->
<!--                            <div class="button round-icon chevron-right ruckus-next"></div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </section>-->
        <!-- Stage 2: Size of your business: template-stage-2 -->
        <section class="stage2 slide">
            <div class="row valign-middle tile-content">
                <div class="large-12 columns">
                    <!-- Options 2 -->
                    <div class="ruckus-background-black opacity-75 large-centered padding-60-75 no-padding-small no-background-color-small">
                        <div class="row collapse">
                            <div class="large-7 columns large-centered">
                                <h2 class="ruckus-orange text-center">Simply Better Wireless.</h2>
                                <h3 class="ruckus-white text-center">Choose your simply better solution</h3>
                            </div>
                        </div>
                      <div class="row">
                          <div class="large-12 columns"><h2 class="ruckus-white">Size of your business?</h2></div>
                          <div class="large-12 columns">
                              <ul class="large-block-grid-3 medium-block-grid-3 small-block-grid-1 ruckus-option-group"  data-toggle-type="radio">
                                  <li class="ruckus-option"  data-option-name="small">
                                      <img src="images/business-small.png" alt="Small Ruckus logo" class="hide-for-small">
                                      <span class="button alt">Small</span>
                                  </li>
                                  <li class="ruckus-option"  data-option-name="medium">
                                      <img src="images/business-medium.png" alt="Medium Ruckus logo" class="hide-for-small">
                                      <span class="button alt">Medium</span>
                                  </li>
                                  <li class="ruckus-option"  data-option-name="large">
                                      <img src="images/business-large.png" alt="Large Ruckus logo" class="hide-for-small">
                                      <span class="button alt">Large</span>
                                  </li>
                              </ul>
                          </div>
                      </div>
                </div>
          </div>

        </div>
        </section>
        <!-- Stage 3: What do you need Wi-Fi for?: template-stage-3 -->
        <section class="stage-3 slide">
        <div class="row valign-middle tile-content">
          <div class="large-12 columns">
              <!-- Options 2 -->
              <div class="ruckus-background-black opacity-75 large-centered padding-60-75 no-padding-small no-background-color-small">
                  <div class="row">
                      <div class="large-12 columns">
                          <h2 class="ruckus-white">What do you need Wi-Fi for?</h2>
                          <h4 class="ruckus-white">Select the option/s relevant to you</h4>
                      </div>
                      <div class="large-12 columns">
                          <ul class="large-block-grid-3 medium-block-grid-3 small-block-grid-1 ruckus-option-group"  data-toggle-type="checkbox">
                              <li class="ruckus-option"  data-option-name="public"><div class="image hide-for-small" id="wi-fi"></div><span class="button">To provide public Wi-Fi</span></li>
                              <li class="ruckus-option"  data-option-name="pos"><div class="image hide-for-small" id="pos"></div><span class="button">POS</span></li>
                              <li class="ruckus-option"  data-option-name="employee"><div class="image hide-for-small" id="employee"></div><span class="button">Employee enablement</span></li>
                          </ul>
                      </div>
                  </div>
               </div>
          </div>
        </div>
        </section>
        <!-- Stage 4: Details: template-stage-4 -->
        <section class="stage4 slide">
        <div class="row valign-middle tile-content">
          <div class="large-12 columns">
              <!-- content -->
              <div class="row">
                  <div class="large-8 columns large-centered">
                      <h2 class="text-center">Details</h2>
                  </div>
              </div>
              <div class="row">
                  <div class="large-8 columns large-centered medium-8 medium-centered">
                      <form id="ruckus-data" data-option-type="ruckus-option-group">
                          <!-- Business Sector -->
                          <!-- Removed temporarily -->
<!--                          <input type="radio" name="sector" data-name="retail" value="2" class="">-->
<!--                          <input type="radio" name="sector" data-name="leisure" value="3" class="">-->
<!--                          <input type="radio" name="sector" data-name="hospitality" value="5" class="">-->
<!--                          <input type="radio" name="sector" data-name="transport" value="7" class="">-->
<!--                          <input type="radio" name="sector" data-name="open space" value="11" class="">-->
                          <!-- Size of business -->
                          <input type="radio" name="size" data-name="small" value="13" class="hide">
                          <input type="radio" name="size" data-name="medium" value="17" class="hide">
                          <input type="radio" name="size" data-name="large" value="19" class="hide">
                          <!-- Wi-Fi requirement -->
                          <input type="checkbox" name="requirement" data-name="public" value="23" class="hide">
                          <input type="checkbox" name="requirement" data-name="pos" value="29" class="hide">
                          <input type="checkbox" name="requirement" data-name="employee" value="31" class="hide">
                          <!-- Name -->
                          <div class="row collapse">
                              <div class="large-12 columns">
                                  <label><span>Name<span>*</span></span>
                                      <input type="text" placeholder="large-12.columns" data-option-type="ruckus-option"/>
                                  </label>
                              </div>
                          </div>
                          <!-- Email -->
                          <div class="row collapse">
                              <div class="large-12 columns">
                                  <label><span>Email<span>*</span></span>
                                      <input type="text" placeholder="large-12.columns" data-option-type="ruckus-option"/>
                                  </label>
                              </div>
                          </div>
                          <!-- Country -->
                          <div class="row collapse">
                              <div class="large-10 large-centered columns">
                                  <label><span>Country</span><small>(option)</small>
                                  <select data-option-type="ruckus-option">
                                  <option value="">Select your country</option>
                                  <option value="AF">Afghanistan</option>
                                  <option value="AX">Åland Islands</option>
                                  <option value="AL">Albania</option>
                                  <option value="DZ">Algeria</option>
                                  <option value="AS">American Samoa</option>
                                  <option value="AD">Andorra</option>
                                  <option value="AO">Angola</option>
                                  <option value="AI">Anguilla</option>
                                  <option value="AQ">Antarctica</option>
                                  <option value="AG">Antigua and Barbuda</option>
                                  <option value="AR">Argentina</option>
                                  <option value="AM">Armenia</option>
                                  <option value="AW">Aruba</option>
                                  <option value="AU">Australia</option>
                                  <option value="AT">Austria</option>
                                  <option value="AZ">Azerbaijan</option>
                                  <option value="BS">Bahamas</option>
                                  <option value="BH">Bahrain</option>
                                  <option value="BD">Bangladesh</option>
                                  <option value="BB">Barbados</option>
                                  <option value="BY">Belarus</option>
                                  <option value="BE">Belgium</option>
                                  <option value="BZ">Belize</option>
                                  <option value="BJ">Benin</option>
                                  <option value="BM">Bermuda</option>
                                  <option value="BT">Bhutan</option>
                                  <option value="BO">Bolivia, Plurinational State of</option>
                                  <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                  <option value="BA">Bosnia and Herzegovina</option>
                                  <option value="BW">Botswana</option>
                                  <option value="BV">Bouvet Island</option>
                                  <option value="BR">Brazil</option>
                                  <option value="IO">British Indian Ocean Territory</option>
                                  <option value="BN">Brunei Darussalam</option>
                                  <option value="BG">Bulgaria</option>
                                  <option value="BF">Burkina Faso</option>
                                  <option value="BI">Burundi</option>
                                  <option value="KH">Cambodia</option>
                                  <option value="CM">Cameroon</option>
                                  <option value="CA">Canada</option>
                                  <option value="CV">Cape Verde</option>
                                  <option value="KY">Cayman Islands</option>
                                  <option value="CF">Central African Republic</option>
                                  <option value="TD">Chad</option>
                                  <option value="CL">Chile</option>
                                  <option value="CN">China</option>
                                  <option value="CX">Christmas Island</option>
                                  <option value="CC">Cocos (Keeling) Islands</option>
                                  <option value="CO">Colombia</option>
                                  <option value="KM">Comoros</option>
                                  <option value="CG">Congo</option>
                                  <option value="CD">Congo, the Democratic Republic of the</option>
                                  <option value="CK">Cook Islands</option>
                                  <option value="CR">Costa Rica</option>
                                  <option value="CI">Côte d'Ivoire</option>
                                  <option value="HR">Croatia</option>
                                  <option value="CU">Cuba</option>
                                  <option value="CW">Curaçao</option>
                                  <option value="CY">Cyprus</option>
                                  <option value="CZ">Czech Republic</option>
                                  <option value="DK">Denmark</option>
                                  <option value="DJ">Djibouti</option>
                                  <option value="DM">Dominica</option>
                                  <option value="DO">Dominican Republic</option>
                                  <option value="EC">Ecuador</option>
                                  <option value="EG">Egypt</option>
                                  <option value="SV">El Salvador</option>
                                  <option value="GQ">Equatorial Guinea</option>
                                  <option value="ER">Eritrea</option>
                                  <option value="EE">Estonia</option>
                                  <option value="ET">Ethiopia</option>
                                  <option value="FK">Falkland Islands (Malvinas)</option>
                                  <option value="FO">Faroe Islands</option>
                                  <option value="FJ">Fiji</option>
                                  <option value="FI">Finland</option>
                                  <option value="FR">France</option>
                                  <option value="GF">French Guiana</option>
                                  <option value="PF">French Polynesia</option>
                                  <option value="TF">French Southern Territories</option>
                                  <option value="GA">Gabon</option>
                                  <option value="GM">Gambia</option>
                                  <option value="GE">Georgia</option>
                                  <option value="DE">Germany</option>
                                  <option value="GH">Ghana</option>
                                  <option value="GI">Gibraltar</option>
                                  <option value="GR">Greece</option>
                                  <option value="GL">Greenland</option>
                                  <option value="GD">Grenada</option>
                                  <option value="GP">Guadeloupe</option>
                                  <option value="GU">Guam</option>
                                  <option value="GT">Guatemala</option>
                                  <option value="GG">Guernsey</option>
                                  <option value="GN">Guinea</option>
                                  <option value="GW">Guinea-Bissau</option>
                                  <option value="GY">Guyana</option>
                                  <option value="HT">Haiti</option>
                                  <option value="HM">Heard Island and McDonald Islands</option>
                                  <option value="VA">Holy See (Vatican City State)</option>
                                  <option value="HN">Honduras</option>
                                  <option value="HK">Hong Kong</option>
                                  <option value="HU">Hungary</option>
                                  <option value="IS">Iceland</option>
                                  <option value="IN">India</option>
                                  <option value="ID">Indonesia</option>
                                  <option value="IR">Iran, Islamic Republic of</option>
                                  <option value="IQ">Iraq</option>
                                  <option value="IE">Ireland</option>
                                  <option value="IM">Isle of Man</option>
                                  <option value="IL">Israel</option>
                                  <option value="IT">Italy</option>
                                  <option value="JM">Jamaica</option>
                                  <option value="JP">Japan</option>
                                  <option value="JE">Jersey</option>
                                  <option value="JO">Jordan</option>
                                  <option value="KZ">Kazakhstan</option>
                                  <option value="KE">Kenya</option>
                                  <option value="KI">Kiribati</option>
                                  <option value="KP">Korea, Democratic People's Republic of</option>
                                  <option value="KR">Korea, Republic of</option>
                                  <option value="KW">Kuwait</option>
                                  <option value="KG">Kyrgyzstan</option>
                                  <option value="LA">Lao People's Democratic Republic</option>
                                  <option value="LV">Latvia</option>
                                  <option value="LB">Lebanon</option>
                                  <option value="LS">Lesotho</option>
                                  <option value="LR">Liberia</option>
                                  <option value="LY">Libya</option>
                                  <option value="LI">Liechtenstein</option>
                                  <option value="LT">Lithuania</option>
                                  <option value="LU">Luxembourg</option>
                                  <option value="MO">Macao</option>
                                  <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                                  <option value="MG">Madagascar</option>
                                  <option value="MW">Malawi</option>
                                  <option value="MY">Malaysia</option>
                                  <option value="MV">Maldives</option>
                                  <option value="ML">Mali</option>
                                  <option value="MT">Malta</option>
                                  <option value="MH">Marshall Islands</option>
                                  <option value="MQ">Martinique</option>
                                  <option value="MR">Mauritania</option>
                                  <option value="MU">Mauritius</option>
                                  <option value="YT">Mayotte</option>
                                  <option value="MX">Mexico</option>
                                  <option value="FM">Micronesia, Federated States of</option>
                                  <option value="MD">Moldova, Republic of</option>
                                  <option value="MC">Monaco</option>
                                  <option value="MN">Mongolia</option>
                                  <option value="ME">Montenegro</option>
                                  <option value="MS">Montserrat</option>
                                  <option value="MA">Morocco</option>
                                  <option value="MZ">Mozambique</option>
                                  <option value="MM">Myanmar</option>
                                  <option value="NA">Namibia</option>
                                  <option value="NR">Nauru</option>
                                  <option value="NP">Nepal</option>
                                  <option value="NL">Netherlands</option>
                                  <option value="NC">New Caledonia</option>
                                  <option value="NZ">New Zealand</option>
                                  <option value="NI">Nicaragua</option>
                                  <option value="NE">Niger</option>
                                  <option value="NG">Nigeria</option>
                                  <option value="NU">Niue</option>
                                  <option value="NF">Norfolk Island</option>
                                  <option value="MP">Northern Mariana Islands</option>
                                  <option value="NO">Norway</option>
                                  <option value="OM">Oman</option>
                                  <option value="PK">Pakistan</option>
                                  <option value="PW">Palau</option>
                                  <option value="PS">Palestinian Territory, Occupied</option>
                                  <option value="PA">Panama</option>
                                  <option value="PG">Papua New Guinea</option>
                                  <option value="PY">Paraguay</option>
                                  <option value="PE">Peru</option>
                                  <option value="PH">Philippines</option>
                                  <option value="PN">Pitcairn</option>
                                  <option value="PL">Poland</option>
                                  <option value="PT">Portugal</option>
                                  <option value="PR">Puerto Rico</option>
                                  <option value="QA">Qatar</option>
                                  <option value="RE">Réunion</option>
                                  <option value="RO">Romania</option>
                                  <option value="RU">Russian Federation</option>
                                  <option value="RW">Rwanda</option>
                                  <option value="BL">Saint Barthélemy</option>
                                  <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                  <option value="KN">Saint Kitts and Nevis</option>
                                  <option value="LC">Saint Lucia</option>
                                  <option value="MF">Saint Martin (French part)</option>
                                  <option value="PM">Saint Pierre and Miquelon</option>
                                  <option value="VC">Saint Vincent and the Grenadines</option>
                                  <option value="WS">Samoa</option>
                                  <option value="SM">San Marino</option>
                                  <option value="ST">Sao Tome and Principe</option>
                                  <option value="SA">Saudi Arabia</option>
                                  <option value="SN">Senegal</option>
                                  <option value="RS">Serbia</option>
                                  <option value="SC">Seychelles</option>
                                  <option value="SL">Sierra Leone</option>
                                  <option value="SG">Singapore</option>
                                  <option value="SX">Sint Maarten (Dutch part)</option>
                                  <option value="SK">Slovakia</option>
                                  <option value="SI">Slovenia</option>
                                  <option value="SB">Solomon Islands</option>
                                  <option value="SO">Somalia</option>
                                  <option value="ZA">South Africa</option>
                                  <option value="GS">South Georgia and the South Sandwich Islands</option>
                                  <option value="SS">South Sudan</option>
                                  <option value="ES">Spain</option>
                                  <option value="LK">Sri Lanka</option>
                                  <option value="SD">Sudan</option>
                                  <option value="SR">Suriname</option>
                                  <option value="SJ">Svalbard and Jan Mayen</option>
                                  <option value="SZ">Swaziland</option>
                                  <option value="SE">Sweden</option>
                                  <option value="CH">Switzerland</option>
                                  <option value="SY">Syrian Arab Republic</option>
                                  <option value="TW">Taiwan, Province of China</option>
                                  <option value="TJ">Tajikistan</option>
                                  <option value="TZ">Tanzania, United Republic of</option>
                                  <option value="TH">Thailand</option>
                                  <option value="TL">Timor-Leste</option>
                                  <option value="TG">Togo</option>
                                  <option value="TK">Tokelau</option>
                                  <option value="TO">Tonga</option>
                                  <option value="TT">Trinidad and Tobago</option>
                                  <option value="TN">Tunisia</option>
                                  <option value="TR">Turkey</option>
                                  <option value="TM">Turkmenistan</option>
                                  <option value="TC">Turks and Caicos Islands</option>
                                  <option value="TV">Tuvalu</option>
                                  <option value="UG">Uganda</option>
                                  <option value="UA">Ukraine</option>
                                  <option value="AE">United Arab Emirates</option>
                                  <option value="GB">United Kingdom</option>
                                  <option value="US">United States</option>
                                  <option value="UM">United States Minor Outlying Islands</option>
                                  <option value="UY">Uruguay</option>
                                  <option value="UZ">Uzbekistan</option>
                                  <option value="VU">Vanuatu</option>
                                  <option value="VE">Venezuela, Bolivarian Republic of</option>
                                  <option value="VN">Viet Nam</option>
                                  <option value="VG">Virgin Islands, British</option>
                                  <option value="VI">Virgin Islands, U.S.</option>
                                  <option value="WF">Wallis and Futuna</option>
                                  <option value="EH">Western Sahara</option>
                                  <option value="YE">Yemen</option>
                                  <option value="ZM">Zambia</option>
                                  <option value="ZW">Zimbabwe</option>
                                  </select>
                                  </label>
                              </div>
                          </div>
                          <!-- Telephone -->
                          <div class="row collapse">
                              <div class="large-12 columns">
                                  <label><span>Telephone</span><small>(option)</small>
                                      <input type="text" placeholder="large-12.columns" data-option-type="ruckus-option"/>
                                  </label>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
        </div>
        </section>
          <!-- Stage 5: Solution: template-stage-5 -->
          <section class="stage5 slide">
              <div class="row valign-middle tile-content">
                  <div class="large-12 columns">
                      <div class="ruckus-background-black opacity-75 large-centered padding-60-75 no-padding-small no-background-color-small">
                          <!-- content -->
                          <div class="row ">
                              <div class="large-12 columns large-centered">
                                  <h3 class="text-center ruckus-white">Your simply better solution</h3>
                              </div>
                          </div>
                          <div class="row">
                              <div class="large-12 columns large-centered medium-8 medium-centered">
                                  <!-- Solution -->
                                  <div class="row">
                                      <div class="large-12 columns template-solution-header">
                                          <h3 class="ruckus-orange">Small Retail</h3>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <!-- Writing-->
                                      <div class="large-8 columns ruckus-white template-solution-article">

                                      </div>
                                      <!-- Video-->
                                      <div class="large-4 columns">
                                          <h5 class="ruckus-orange">Videos</h5>
                                          <ul class="large-block-grid-1 medium-block-grid-2 small-block-grid-2 template-solution-videos">
                                          </ul>
                                          <h5 class="ruckus-orange">Downloads</h5>
                                          <ul class="large-block-grid-1 medium-block-grid-3 small-block-grid-2 template-solution-downloads">
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
            </div>
          </section>
        </div>
        <!-- slide navigation -->
          <div class="navigation">
              <div class="nav-wrapper">
                  <div class="display-inline-block">
                      <div class="button round-icon chevron-left subtle ruckus-prev"></div>
                  </div>
                  <div class="display-inline-block">
                      <div class="button round-icon chevron-right ruckus-next"></div>
                  </div>
              </div>
          </div>
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
</body>
<?php require_once('footer.php');?>