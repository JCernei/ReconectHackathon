<?php
	include 'db.php';
	$conn = new mysqli($servername, $username, $password, $dbname);
		if ($conn->connect_error) {
  	die("Connection failed: " . $conn->connect_error);
	}
  $json = file_get_contents('php://input');
  $obj = json_decode($json);
  //$usrnm = $obj->user->username;
  $usrnm = "alpha";
  $sql = "Select distinct username,nume,mate2 from (SELECT mate2 from friends join usert on (usert.id=mate1) where username = '".$usrnm."') as x join usert on (mate2=usert.id)";
	$result = $conn->query($sql);
  $bus = array();
  if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $bus[] = $row;
  }
  } 
  $conn->close();
  echo json_encode($bus);
?>