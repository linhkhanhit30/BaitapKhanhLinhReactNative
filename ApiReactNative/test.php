<?php
	require "connect.php";

	class Test{
		function Test($id, $username, $password, $node){
			$this->id = $id;
			$this->username = $username;
			$this->password = $password;
			$this->node = $node;
		}
	}
	$query = "SELECT * FROM test";
	$data = mysqli_query($conn, $query);
	$arrayChuDe = array();
	while ($row = mysqli_fetch_assoc($data)) {
		array_push($arrayChuDe, new Test($row['id']
										,$row['username']
										,$row['password']
										,$row['node']));
	}
	echo json_encode($arrayChuDe);
  ?>