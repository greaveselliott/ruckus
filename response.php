<?php
//include db configuration file
include_once("config.php");

// Create connection
$connection = new mysqli($hostname, $username, $password, $databasename);

// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

// Values
//print_r($_POST);

    $ruckus_user_name               = array_key_exists('name', $_POST) ? $_POST['name']: null;
    $ruckus_user_email              = array_key_exists('email',$_POST) ? $_POST['email']: null;
    $ruckus_user_country            = array_key_exists('country',$_POST) ? $_POST['country']: null;
    $ruckus_user_telephone          = array_key_exists('telephone', $_POST) ? $_POST['telephone'] : null;
    $ruckus_user_business_sector    = 'not yet available';
    $ruckus_user_business_size      = array_key_exists('size',$_POST) ? $_POST['size'] : null;
    $ruckus_user_wifi_public        = array_key_exists('wifi-public', $_POST) ? 1 : 0;
    $ruckus_user_wifi_pos           = array_key_exists('wifi-pos',$_POST) ? 1 : 0;
    $ruckus_user_wifi_employee      = array_key_exists('wifi-employee',$_POST) ? 1 : 0;
    $ruckus_user_input_date         = date( 'Y-m-d H:i:s');

// Build Query String
$query = "INSERT INTO `ruckus_user_data` (`ruckus_user_name`, `ruckus_user_email`, `ruckus_user_phone`, `ruckus_user_country`, `ruckus_user_sector`, `ruckus_user_size`, `ruckus_req_public_wifi`, `ruckus_req_pos`, `ruckus_req_employee`, `ruckus_date`)
VALUES
	(
	    '".$ruckus_user_name."',
	    '".$ruckus_user_email."',
	    $ruckus_user_telephone,
	    '".$ruckus_user_country."',
	    '".$ruckus_user_business_sector."', '".$ruckus_user_business_size."', $ruckus_user_wifi_public, $ruckus_user_wifi_pos, $ruckus_user_wifi_employee, '".$ruckus_user_input_date."');
";

/*
 * VALUES
	($ruckus_user_name, $ruckus_user_email, $ruckus_user_telephone, $ruckus_user_country, $ruckus_user_business_sector, 'medium', $ruckus_user_wifi_pos, $ruckus_user_wifi_public, $ruckus_user_wifi_employee, $ruckus_user_input_date);
";
*/

// Submit Query to DB
if ($connection->query($query) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $query . "<br>" . $connection->error;
}

$msg = "First line of text\nSecond line of text";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

$subject = "Hi". $ruckus_user_name . ", view your simply wireless solution";

// send email
mail($ruckus_user_email,$subject,$msg);
?>