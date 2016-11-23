<?php

	include('../../../config/glancrConfig.php');

	setConfigValue("wunderlist_access_token", "");
	setConfigValue("wunderlist_client_id", "");
	setConfigValue("wunderlist_include_completed", "");
	setConfigValue("wunderlist_list", "");
	setConfigValue("wunderlist_max_tasks", "");
	setConfigValue("wunderlist_max_tasks_completed", "");
	setConfigValue("wunderlist_sort", "");


	header("location: /config/");

?>
