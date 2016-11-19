var access_token;
var client_id;
var list;
var list_name;
var max_tasks;

$(document).ready(function () {
	access_token = "<?php echo getConfigValue('wunderlist_access_token'); ?>";
	client_id = "<?php echo getConfigValue('wunderlist_client_id'); ?>";
	list = "<?php echo getConfigValue('wunderlist_list'); ?>";
	inlcude_completed = "<?php echo getConfigValue('wunderlist_include_completed'); ?>"
	sort = "<?php echo getConfigValue('wunderlist_sort'); ?>"
	max_tasks = parseInt("<?php echo getConfigValue('wunderlist_max_tasks'); ?>")
	reloadWunderlist();
});

function reloadWunderlist() {

  $.ajax({ url: 'https://a.wunderlist.com/api/v1/lists/' + list, headers: { 'X-Client-ID': client_id, 'X-Access-Token': access_token }, success: function(data){
    list_name = data.title;
    $("#wunderlist_list").text(list_name);
  }});

	$.ajax({ url: 'https://a.wunderlist.com/api/v1/tasks?list_id=' + list + '&completed=' + inlcude_completed, headers: { 'X-Client-ID': client_id, 'X-Access-Token': access_token }, success: function(data){

		$("#wunderlist_table").empty();

		if (sort == "alphabetical"){
			// A-Z Titel
			data.sort(sort_by('title', false, function(a){return a.toUpperCase()}));
		} else if (sort == "alphabetical_reverse") {
			// Z-A Titel
			data.sort(sort_by('title', true, function(a){return a.toUpperCase()}));
		} else if (sort == "newest") {
			// newest first
			data.sort(sort_by('created_at', true));
		} else if (sort == "oldest") {
			// oldest first
			data.sort(sort_by('created_at', false));
		} else if (sort == "starred") {
			// starred first
			data.sort(sort_by('starred', true));
		}

    i = 0;
		$.each(data, function(index, el) {
			$("#wunderlist_table").append("<tr></tr>");

			if (i < max_tasks) {
				if (el.completed == true){ icon = "fa fa-check-square-o"; } else { icon = "fa fa-square-o";	}

				if (el.starred == true) {
					star = '<i class="fa fa-star" aria-hidden="true"></i>';
				} else { star = ""; }

				$("#wunderlist_table tr:last").append("<td><i class='" + icon + "' aria-hidden='true'></i></td><td>" + star + el.title + "</td>");

			} else if (i == (max_tasks+1)) {
				$("#wunderlist_table tr:last").append("<td><i class='fa fa-info-circle' aria-hidden='true'></i></td><td>" + (data.length-max_tasks)+ " <?php echo _('wunderlist_more_tasks'); ?></td>");
			}
			i++;
		});
	 }});

  // alle 10 Sekunden aktualiseren
  window.setTimeout(function() {
  	reloadWunderlist();
  }, 10000);
}


// copied from http://stackoverflow.com/a/979325
var sort_by = function(field, reverse, primer){
   var key = primer ? function(x) {return primer(x[field])} : function(x) {return x[field]};
   reverse = !reverse ? 1 : -1;
   return function (a, b) { return a = key(a), b = key(b), reverse * ((a > b) - (b > a)); }
}
