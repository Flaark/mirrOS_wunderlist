<?php

	require "../../../config/glancrConfig.php";

	$wunderlist_access_token = getConfigValue("wunderlist_access_token");
	$wunderlist_client_id = getConfigValue("wunderlist_client_id");
	$wunderlist_list = getConfigValue("wunderlist_list");
	$wunderlist_include_completed = getConfigValue("wunderlist_include_completed");


	if ($_GET["completed"] == "true"){
		$wunderlist_include_completed = true;
	}

	$url = "https://a.wunderlist.com/api/v1/tasks?list_id=$wunderlist_list&completed=$wunderlist_include_completed";

	$opts = [
		"http" => [
			"method" => "GET",
			"header" =>
				"X-Client-ID: $wunderlist_client_id\r\n" .
				"X-Access-Token: $wunderlist_access_token"
		]
	];

	$file = file_get_contents($url, false, stream_context_create($opts));

	header("Content-Type: application/json");
	echo $file;

?>
