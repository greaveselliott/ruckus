<?php
//include db configuration file
include_once("config.php");

$query_string = "INSERT INTO `ruckus_user_data` (`id`, `ruckus_user_name`, `ruckus_user_email`, `ruckus_user_phone`, `ruckus_user_country`, `ruckus_user_sector`, `ruckus_user_size`, `ruckus_req_public_wifi`, `ruckus_req_pos`, `ruckus_req_employee`, `ruckus_date`)
VALUES
	(1, 'John Doe', 'john@doe.com', 2147483647, 'UK', NULL, 'medium', 0, 1, 0, '2015-02-25');
	";

//MySQLi query
$results = $mysqli->query($query_string);
//get all records from add_delete_record table
//while($row = $results->fetch_assoc())
//{
//    echo '<li id="item_'.$row["id"].'">';
//    echo '<div class="del_wrapper"><a href="#" class="del_button" id="del-'.$row["id"].'">';
//    echo '<img src="images/icon_del.gif" border="0" />';
//    echo '</a></div>';
//    echo $row["content"].'</li>';
//}

//close db connection
$mysqli->close();
?>