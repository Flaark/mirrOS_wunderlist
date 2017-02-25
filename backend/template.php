<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css">

<?php

	$wunderlist_access_token = getConfigValue('wunderlist_access_token');
	$wunderlist_client_id = getConfigValue('wunderlist_client_id');
	$wunderlist_list = getConfigValue('wunderlist_list');
	$wunderlist_include_completed = getConfigValue('wunderlist_include_completed');
	$wunderlist_sort = getConfigValue('wunderlist_sort');
	$wunderlist_max_tasks = getConfigValue('wunderlist_max_tasks');
	$wunderlist_max_tasks_completed = getConfigValue('wunderlist_max_tasks_completed');
	$wunderlist_icons = getConfigValue('wunderlist_icons');
	$wunderlist_include_other_tasks = getConfigValue('wunderlist_include_other_tasks');

	if($wunderlist_access_token == 'GLANCR_DEFAULT') {$wunderlist_access_token = ''; }
	if($wunderlist_client_id == 'GLANCR_DEFAULT') {$wunderlist_client_id = ''; }
	if($wunderlist_list == 'GLANCR_DEFAULT') {$wunderlist_list = ''; }
	if($wunderlist_include_completed == 'GLANCR_DEFAULT') {$wunderlist_include_completed = 'false'; }
	if($wunderlist_sort == 'GLANCR_DEFAULT') {$wunderlist_sort = 'alphabetical'; }
	if($wunderlist_max_tasks == 'GLANCR_DEFAULT') {$wunderlist_max_tasks = '8'; }
	if($wunderlist_max_tasks_completed == 'GLANCR_DEFAULT') {$wunderlist_max_tasks = '0'; }
	if($wunderlist_icons == 'GLANCR_DEFAULT') {$wunderlist_icons = 'new'; }
	if($wunderlist_include_other_tasks == 'GLANCR_DEFAULT') {$wunderlist_include_other_tasks = 'true'; }

	if ($wunderlist_client_id == "" || $wunderlist_access_token == ""){
		include "_step1.php";
	} else {
		include '_step2.php';
	}

 ?>

<div class="block__add" id="wunderlist__edit">
	<button class="wunderlist__edit--button" href="#">
		<span><?php echo _('wunderlist_save'); ?></span>
	</button>
</div>
