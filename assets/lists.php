<?php

	require "../../../config/glancrConfig.php";

	$wunderlist_access_token = getConfigValue("wunderlist_access_token");
	$wunderlist_client_id = getConfigValue("wunderlist_client_id");

	$opts = [
		"http" => [
			"method" => "GET",
			"header" =>
				"X-Client-ID: $wunderlist_client_id\r\n" .
				"X-Access-Token: $wunderlist_access_token"
		]
	];

	$file = file_get_contents("https://a.wunderlist.com/api/v1/lists", false, stream_context_create($opts));

	header("Content-Type: application/json");
	echo $file;

?>
