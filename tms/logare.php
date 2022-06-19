<?php
	include 'db.php';
	$conn = new mysqli($servername, $username, $password, $dbname);
		if ($conn->connect_error) {
  	die("Connection failed: " . $conn->connect_error);
	}
  $json = file_get_contents('php://input');
  $obj = json_decode($json);
  $usrnm = $obj->user->username;
  $pass = $obj->user->password;
	$sql = "SELECT id from usert where username = '".$usernm."' and password = '".$pass."'";
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