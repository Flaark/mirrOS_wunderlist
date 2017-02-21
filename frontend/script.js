var wunderlist_access_token;
var wunderlist_client_id;
var wunderlist_list;
var wunderlist_list_name;
var wunderlist_max_tasks;
var wunderlist_max_tasks_completed;

$(document).ready(function () {
	wunderlist_access_token = "<?php echo getConfigValue('wunderlist_access_token'); ?>";
	wunderlist_client_id = "<?php echo getConfigValue('wunderlist_client_id'); ?>";
	wunderlist_list = "<?php echo getConfigValue('wunderlist_list'); ?>";
	wunderlist_inlcude_completed = "<?php echo getConfigValue('wunderlist_include_completed'); ?>"
	wunderlist_sort = "<?php echo getConfigValue('wunderlist_sort'); ?>"
	wunderlist_max_tasks = parseInt("<?php echo getConfigValue('wunderlist_max_tasks'); ?>")
	wunderlist_max_tasks_completed = parseInt("<?php echo getConfigValue('wunderlist_max_tasks_completed'); ?>")
	reloadWunderlist();
});

function reloadWunderlist() {

  $.ajax({ url: 'https://a.wunderlist.com/api/v1/lists/' + wunderlist_list, headers: { 'X-Client-ID': wunderlist_client_id, 'X-Access-Token': wunderlist_access_token }, success: function(data){
    list_name = data.title;
    $("#wunderlist_list").text(list_name);
  }});

	$.ajax({ url: 'https://a.wunderlist.com/api/v1/tasks?list_id=' + wunderlist_list + '&completed=' + wunderlist_inlcude_completed, headers: { 'X-Client-ID': wunderlist_client_id, 'X-Access-Token': wunderlist_access_token }, success: function(data){

		$("#wunderlist_table").empty();

		if (wunderlist_sort == "alphabetical"){
			// A-Z Titel
			data.sort(sort_by('title', false, function(a){return a.toUpperCase()}));
		} else if (wunderlist_sort == "alphabetical_reverse") {
			// Z-A Titel
			data.sort(sort_by('title', true, function(a){return a.toUpperCase()}));
		} else if (wunderlist_sort == "newest") {
			// newest first
			data.sort(sort_by('created_at', true));
		} else if (wunderlist_sort == "oldest") {
			// oldest first
			data.sort(sort_by('created_at', false));
		} else if (wunderlist_sort == "starred") {
			// starred first
			data.sort(sort_by('starred', true));
		}

    i = 0;
		$.each(data, function(index, el) {

			if (i < wunderlist_max_tasks) {
				$("#wunderlist_table").append("<tr></tr>");
				if (el.completed == true){ icon = "fa fa-check"; } else { icon = "fa fa-circle";	}

				if (el.starred == true) {
					star = '<i class="fa fa-star" aria-hidden="true"></i>';
				} else { star = ""; }

				$("#wunderlist_table tr:last").append("<td><i class='" + icon + "' aria-hidden='true'></i></td><td>" + star + el.title + "</td>");

			} else if (i == (wunderlist_max_tasks+1)) {
				more_tasks = "<td><i class='fa fa-info-circle' aria-hidden='true'></i></td><td>" + (data.length-wunderlist_max_tasks)+ " <?php echo _('wunderlist_more_tasks'); ?></td>";
			}
			i++;
		});

		$.ajax({ url: 'https://a.wunderlist.com/api/v1/tasks?list_id=' + wunderlist_list + '&completed=' + true, headers: { 'X-Client-ID': wunderlist_client_id, 'X-Access-Token': wunderlist_access_token }, success: function(data){

			data.sort(sort_by('completed_at', true));

			i = 0;
			$.each(data, function(index, el) {
				$("#wunderlist_table").append("<tr></tr>");

				if (i < wunderlist_max_tasks_completed) {

					if (el.starred == true) {
						star = '<i class="fa fa-star" aria-hidden="true"></i>';
					} else { star = ""; }

					$("#wunderlist_table tr:last").append("<td><i class='" + "fa fa-check" + "' aria-hidden='true'></i></td><td>" + star + el.title + "</td>");
				}
				i++;
			});

			// 	Ausgabe: X weitere Aufgaben
			if (more_tasks != ""){
				$("#wunderlist_table").append("<tr></tr>");
				$("#wunderlist_table tr:last").append(more_tasks);
			}
		 }});
	 }});

  // alle 10 Minuten aktualiseren
  window.setTimeout(function() {
  	reloadWunderlist();
  }, 600000);
}

// copied from http://stackoverflow.com/a/979325
var sort_by = function(field, reverse, primer){
   var key = primer ? function(x) {return primer(x[field])} : function(x) {return x[field]};
   reverse = !reverse ? 1 : -1;
   return function (a, b) { return a = key(a), b = key(b), reverse * ((a > b) - (b > a)); }
}
