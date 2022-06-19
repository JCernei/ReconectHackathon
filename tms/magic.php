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
    //$usrid = 0;
	$sql = "SELECT calendar.id as cid,usert.id as uid,start,end FROM calendar join usert on (usert.id=calendar.usert) where tip = 0 and username = '".$usrnm."' order by start";
	$result = $conn->query($sql);
	$options = array();
	if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
  	$calid = [$row['cid']];
  	$usrid = $row['uid'];
    //$stime = date("H:i:s",strtotime($row['start']));
    $stime = date_create($row['start']); 
    $etime = date_create($row['end']);
    //echo $stime." ".$etime."<br>";
    $sql = "Select distinct username,mate2 from (SELECT mate2 from friends join usert on (usert.id=mate1) where username = '".$usrnm."') as x join usert on (mate2=usert.id)";
    $friends = $conn->query($sql);
    $afriends = array();
    $bfriends = array();
    $rstime = 0;
    $retime = 0;
    while($frow = $friends->fetch_assoc())
    {
    	$afriends[] = $frow['mate2'];
    	$bfriends[] = $frow['username'];
    	//echo $frow['username']."<br>";
    	$sql = "SELECT id,start,end FROM calendar where tip = 0 and usert = '".$frow['mate2']."' order by start";
        $friendtime = $conn->query($sql);
        while($ftrow = $friendtime->fetch_assoc())
        {
        	$lstime = date_create($ftrow['start']);
    		$letime = date_create($ftrow['end']);
        	//echo $lstime." ".$letime."<br>";
        	if($lstime>$etime) break;
        	if($letime<$stime) continue;
        	$calid[] = $ftrow['id']; 
        	$rstime = max($stime,$lstime);
        	$retime = min($etime,$letime);
        }
    }
    if(is_int($rstime))continue;
    $opt = new StdClass;
    $opt->calid = $calid;
    $opt->f = $afriends;
    $opt->fn = $bfriends;
    $opt->s = $rstime;
    $opt->e = $retime; 
    $options[] = $opt;
  }
  } 
  $mtime=0;
  $mopt= new StdClass;
  foreach ($options as $opt)
  {
  	$c = (date_timestamp_get($opt->e)-date_timestamp_get($opt->s))/60;
  	if($mtime<$c)
  		{$mtime=$c; $mopt=$opt;}
  }
  $sql = "Select * from activ where timp <= ".$mtime;
  $result = $conn->query($sql);
	if ($result->num_rows > 0) {
  $row = $result->fetch_assoc();
  $mopt->title = $row['title'];
  $mopt->timp = $row['timp'];
  $mopt->start = date_format($mopt->s, 'Y-m-d H:i:s');
  $mopt->end = date_format($mopt->e, 'Y-m-d H:i:s');
  /*echo " with ";
  foreach ($mopt->f as $fr)
  {
  	echo $fr;
  }}*/
}
  if(!is_null($mopt))
  {
  	foreach ($mopt->calid as $cal)
  	{
  	$sql = "delete from calendar where id = ".$cal;
  	$result = $conn->query($sql);
    }
  	$sql = "INSERT INTO `calendar` (`id`, `tip`, `title`, `start`, `end`, `usert`) VALUES (NULL, '1', '".$mopt->title." with ".implode(", ",$mopt->fn)."', '".$mopt->start."', '".$mopt->end."', '".$usrid."')";
	$result = $conn->query($sql);
	foreach ($mopt->f as $frid)
	{
		$sql = "INSERT INTO `calendar` (`id`, `tip`, `title`, `start`, `end`, `usert`) VALUES (NULL, '1', '".$mopt->title." with ".$usrnm."', '".$mopt->start."', '".$mopt->end."', '".$frid."')";
	$result = $conn->query($sql);
	}
  }
  echo json_encode($mopt);
  $conn->close();
?>