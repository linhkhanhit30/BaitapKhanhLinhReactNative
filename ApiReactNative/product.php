<?php
	require "connect.php";

	class Test{
		function Test($id, $tensp, $mota, $gia, $hinhanh){
			$this->id = $id;
			$this->tensp = $tensp;
			$this->mota = $mota;
			$this->gia = $gia;
			$this->hinhanh = $hinhanh;
		}
	}
	$query = "SELECT * FROM product";
	$data = mysqli_query($conn, $query);
	$arrayChuDe = array();
	while ($row = mysqli_fetch_assoc($data)) {
		array_push($arrayChuDe, new Test($row['id']
										,$row['tensp']
										,$row['mota']
										,$row['gia']
										,$row['hinhanh']));
	}
	echo json_encode($arrayChuDe);
  ?>