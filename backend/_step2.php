<select id="wunderlist_lists">
	<option value="" disabled><?php echo _('wunderlist_select_list');?></option>
</select>

<select id="wunderlist_include_completed">
	<option value="" disabled><?php echo _('wunderlist_include_completed');?></option>
	<option value="false" <?php if ($wunderlist_include_completed == "false"){ echo "selected"; } ?>><?php echo _('wunderlist_include_completed_no');?></option>
	<option value="true"  <?php if ($wunderlist_include_completed == "true") { echo "selected"; } ?>><?php echo _('wunderlist_include_completed_yes');?></option>
</select>

<select id="wunderlist_sort">
	<option value="" disabled><?php echo _('wunderlist_sort');?></option>
	<option value="alphabetical"         <?php if ($wunderlist_sort == "alphabetical")        { echo "selected"; } ?>><?php echo _('wunderlist_sort_alphabetical');?></option>
	<option value="alphabetical_reverse" <?php if ($wunderlist_sort == "alphabetical_reverse"){ echo "selected"; } ?>><?php echo _('wunderlist_sort_alphabetical_reverse');?></option>
	<option value="newest"               <?php if ($wunderlist_sort == "newest")              { echo "selected"; } ?>><?php echo _('wunderlist_sort_newest');?></option>
	<option value="oldest"               <?php if ($wunderlist_sort == "oldest")              { echo "selected"; } ?>><?php echo _('wunderlist_sort_oldest');?></option>
	<option value="starred"              <?php if ($wunderlist_sort == "starred")             { echo "selected"; } ?>><?php echo _('wunderlist_sort_starred');?></option>
</select>

<input id="wunderlist_max_tasks" type="number" step="1" min="1" max="8" placeholder="<?php echo _('wunderlist_max_tasks');?>" value="<?php echo $wunderlist_max_tasks; ?>"/>

<input id="wunderlist_max_tasks_completed" type="number" step="1" min="1" max="8" placeholder="<?php echo _('wunderlist_max_tasks_completed');?>" value="<?php echo $wunderlist_max_tasks_completed; ?>"/>

<a href="/modules/wunderlist/assets/reset.php">Reset Config</a><br /><br />

<script>
	<?php include "_step2.js"; ?>
</script>
