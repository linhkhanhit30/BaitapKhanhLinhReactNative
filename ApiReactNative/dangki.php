<?php 
	require "connect.php";
	
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);
	$password = $obj["password"];
	$username = $obj["username"];
	$sdt = $obj["sdt"];
	$diachi = $obj["diachi"];

	

	$trungemail = $conn->query("SELECT * FROM user WHERE username='$username'");
	
	if($username == "" || $password == "" || $sdt =="" || $diachi =="") {
		echo json_encode('vui lòng nhập đầy đủ');
	}elseif ($trungemail->num_rows>0) {
		echo json_encode('Trùng email');
	}else{
		$result = $conn->query("INSERT INTO user(username,password,sdt,diachi) VALUES ('$username','$password','$sdt','$diachi')");
		if($result){
			echo json_encode('Ðang ký thành công!!');
		}else{
			echo json_encode('Ðang ký không thành công!!');
		}
	}
