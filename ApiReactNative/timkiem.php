<?php
	require "connect.php";

	class Test{
		function Test($id, $tensp, $mota, $gia, $hinhanh){
			$this->key = $id;
			$this->tensp = $tensp;
			$this->mota = $mota;
			$this->gia = $gia;
			$this->hinhanh = $hinhanh;
		}
	}
	$query = "SELECT * FROM `product`";
	if(isset($_GET['s']));
	$query = $query." where tensp like '%".$_GET['s']."%'";
	$data = mysqli_query($conn, $query);
	$arrayChuDe = array();
	if(isset($data))
	if (mysqli_num_rows($data) > 0)
	{
		while ($row = mysqli_fetch_assoc($data)) {
		array_push($arrayChuDe, new Test($row['id']
										,$row['tensp']
										,$row['mota']
										,$row['gia']
										,$row['hinhanh']));
		}
		
	}
	echo json_encode($arrayChuDe);
  ?>