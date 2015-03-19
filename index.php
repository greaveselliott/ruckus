
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
    * Template: index.php
    * Project: ruckus hub
    * Author: Elliott Matthew Greaves
    * Author URL: http://www.elliottgreaves.com/
    * Description: Template file for entry point 1.
    */
    require_once ('hub-head.php');
?>
  <body class="appContainer">
     <?php require_once ('hub-header.php'); ?>
      <!-- Web App Wrapper -->
      <article class="tile">
        <div class="slide-container">
          <!-- Hub 0: Simply Better Wireless -->
          <?php require_once('hub-0-1.php'); ?>
          <!-- Hub 1: Size of your business: template-stage-2 -->
          <?php require_once('hub-1.php'); ?>
          <!-- Hub 2: What do you need Wi-Fi for?: template-stage-3 -->
          <?php require_once('hub-2.php'); ?>
          <!-- Hub 3: Details: template-stage-4 -->
          <?php require_once('hub-3.php'); ?>
          <!-- Hub 4: Solution: template-stage-5 -->
          <?php require_once('hub-4.php'); ?>
        </div>
          <!-- Hub Navigation: Appears at the bottom of page -->
        <?php require_once('hub-navigation.php'); ?>
        <!-- closing </article> tag ends included in hub-footer -->
        <?php require_once('hub-footer.php');?>

<?php }?>