<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="mainStyle.css">
</head>
<body>
	<div class="nav">
    <img src="leti.png">
    <form method="post" action="">
    	<input type="password" name="pas" class="pas">
		<input type="submit" name="go" value="Log in">
	</form>
    
  </div>
	<?php
	if(isset($_POST['pas']))
	{
	$_SESSION['pass']= $_POST['pas'];
	echo "<script>window.location.href='invoices.php';</script>";
	die();
}

	  ?>
	  <script type="text/javascript">
	  	var inp=document.querySelector('.pas');
	  	inp.focus();
inp.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector('.listbut').click();
  }});
	  </script>
	
	   
</body>
</html>