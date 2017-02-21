$('.wunderlist__edit--button').click(function() {
	$.post('/config/setConfigValueAjax.php', {'key' : 'wunderlist_client_id', 'value' : $("#wunderlist_client_id").val()});
	$.post('/config/setConfigValueAjax.php', {'key' : 'wunderlist_access_token', 'value' : $("#wunderlist_access_token").val()});
	$.post('/config/setConfigValueAjax.php', {'key' : 'wunderlist_list', 'value' : $("#wunderlist_lists").val()});
	$.post('/config/setConfigValueAjax.php', {'key' : 'wunderlist_include_completed', 'value' : $("#wunderlist_include_completed").val()});
	$.post('/config/setConfigValueAjax.php', {'key' : 'wunderlist_max_tasks', 'value' : $("#wunderlist_max_tasks").val()});
	$.post('/config/setConfigValueAjax.php', {'key' : 'wunderlist_max_tasks_completed', 'value' : $("#wunderlist_max_tasks_completed").val()});
	$.post('/config/setConfigValueAjax.php', {'key' : 'wunderlist_sort', 'value' : $("#wunderlist_sort").val()}).done(function() {
		$('#ok').show(30, function() {
			$(this).hide('slow');
			location.reload();
		})
	});
});
