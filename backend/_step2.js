$(document).ready(function() {

	var list = '<?php echo $wunderlist_list; ?>';

	$.getJSON("/modules/wunderlist/assets/lists.php").success(function(data){

		if (data.length == 0){
			handleError();
		} else {
			$.each(data, function(index, el) {
				$("#wunderlist_lists").append("<option value='" + el.id + "'>" + el.title + "</option>");
			});
			$("#wunderlist_lists").val(list);
		}

	}).error(function() {
		handleError();
	});

	function handleError(){
		$("#wunderlist_step_2_error").show();
		$("#wunderlist_step_2_form").hide();
	}

});
