<?php
	include 'db.php';
	$conn = new mysqli($servername, $username, $password, $dbname);
		if ($conn->connect_error) {
  	die("Connection failed: " . $conn->connect_error);
	}
  $json = file_get_contents('php://input');
  $obj = json_decode($json);
  $usrnm = $obj->user->username;
  $start = $obj->event->start;
  $end = $obj->event->end;
  $tip = $obj->event->tip;
  $title = $obj->event->title;
  $sql = "select * from usert where username = '".$usrnm."'";
  $result = $conn->query($sql);
  $row = $result->fetch_assoc();
  $usrid = $row['id'];

	$sql = "INSERT INTO `calendar` (`id`, `tip`, `title`, `start`, `end`, `usert`) VALUES (NULL, '".$tip."', '".$title."', '".$start."', '".$end."', '".$usrid."')";
	$result = $conn->query($sql);
  $conn->close();
  echo json_encode($bus);
?>