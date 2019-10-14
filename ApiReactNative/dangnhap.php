<?php 
	require "connect.php";
	
	
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);
	$username = $obj["username"];
	$password = $obj["password"];


	$result = $conn->query("SELECT * FROM user WHERE username='$username' AND password='$password'");
	
	
	if($username == "" || $password == "") {
		echo json_encode('Vui lòng nhập đầy đủ thông tin!!');
	}elseif($result->num_rows>0) {
		echo json_encode('Đăng nhập thành công');
	}else{
		echo json_encode('Đăng nhập không thành công!!');
	}

?>