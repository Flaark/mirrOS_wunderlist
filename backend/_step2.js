$(document).ready(function() {

	var access_token = '<?php echo $wunderlist_access_token; ?>';
	var client_id = '<?php echo $wunderlist_client_id; ?>';
	var list = '<?php echo $wunderlist_list; ?>';

	$.ajax({
		url: 'https://a.wunderlist.com/api/v1/lists',
		headers: {
				'X-Client-ID': client_id,
				'X-Access-Token': access_token
			},
		method: 'GET',
		dataType: 'json',
		success: function(data){
			console.log(data);
			$.each(data, function(index, el) {
				$("#wunderlist_lists").append("<option value='" + el.id + "'>" + el.title + "</option>");
				console.log(el.title);
			});
			$("#wunderlist_lists").val(list);
		}
	});

});
