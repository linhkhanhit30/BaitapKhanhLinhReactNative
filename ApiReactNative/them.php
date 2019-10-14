<?php 
	require "connect.php";
	
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);
	$tensp = $obj["tensp"];
	$mota = $obj["mota"];
	$gia = $obj["gia"];
	$hinhanh = $obj["hinhanh"];

	

	$trungemail = $conn->query("SELECT * FROM product WHERE tensp='$tensp'");
	
	if($tensp == "" || $mota == "" || $gia =="" || $hinhanh =="") {
		echo json_encode('vui lòng nhập đầy đủ');
	}elseif ($trungemail->num_rows>0) {
		echo json_encode('Trùng email');
	}else{
		$result = $conn->query("INSERT INTO product(tensp,mota,gia,hinhanh) VALUES ('$tensp','$mota','$gia','$hinhanh')");
		if($result){
			echo json_encode('Ðang ký thành công!!');
		}else{
			echo json_encode('Ðang ký không thành công!!');
		}
	}
